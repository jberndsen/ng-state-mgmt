# Omgaan met dynamische data
Angular applicaties zijn zeer dynamische, data-gedreven applicaties. Om componenten herbruikbaar te houden over de diverse projecten, is het belangrijk dat zij (de componenten) geen kennis bevatten over het dynamische gedrag van de applicatie. Een Angular applicatie gaat (veelal) om het visualiseren van data en het reageren op gebruikersinteracties. Er is gekozen voor een strategie waarbij de applicatie-specifieke data volledig en expliciet op één plek, buiten de componenten-boom, wordt bewaakt. Op basis van de data wordt de componenten-boom op eenduidige wijze opgebouwd. Door dit te combineren met een vast stramien waarin de gegevens aangepast kunnen worden, zijn de Angular applicaties voorspelbaar en analyseerbaar, met name vanwege de excellente tooling die deze strategie mogelijk maakt. Deze architectuur wordt **Redux** genoemd. De doelstellingen waarom voor *Redux* is gekozen zijn:

1. Voorspelbaarheid en reproduceerbaarheid over wat op het scherm wordt getoond;
2. Voorspelbaarheid en reproduceerbaarheid over hoe de applicatie in een bepaalde toestand geraakt.

Determinisme is uitermate belangrijk voor de testbaarheid van de applicatie, alsmede het gemak waarmee bugs gediagnostiseerd kunnen worden. Zou de applicatie niet-deterministisch zijn, dan is het onmogelijk om te garanderen dat schermen en applicatie-toestand nog steeds valide en consistent met elkaar zijn. Men zou zover kunnen gaan om te beweren dat non-determinisme een bug in zichzelf is.

Het overkoepelende doel is om de applicatie-toestand te isoleren van de aanwezige zij-effecten, zoals het renderen van het scherm of netwerk operaties. Door deze zij-effecten te isoleren wordt de applicatie aanzienlijk eenvoudiger. De belangrijkste onderdelen van *Redux* worden hieronder kort toegelicht.

![Redux flow](http://www.bebetterdeveloper.com/img/post_img/rre-2.png)

## Redux: State
De *State* beschrijft alle dynamische data die voor de applicatie van toepassing is. Denk aan data die wordt aangeleverd door de back-end: revalidantgegevens, afspraken, etc., maar ook aan gegevens die relevant zijn voor de toestand van de applicatie: op welke pagina bevindt de gebruiker zich, welke gegevens zijn ingevoerd in een formulier, staat er een popup open, etc. De *State* is één alles-omvattende JSON structuur.

## Redux: Store
De *Store* is de plek waar de *State* wordt bewaart. Daarnaast bevat de *Store* de spelregels waarmee de *State* kan worden aangepast, de zogenaamde *Reducers*. Zonder deze functies zou het niet mogelijk zijn om dynamisch gedrag te programmeren.

## Redux: Reducers
Een *Reducer* is een functie die de gegevens in de *Store* kan aanpassen. Omdat dit de enige manier is om de *State* aan te passen, is op een eenduidige plek te herleiden hoe de applicatie reageert op de acties van een gebruiker. De signatuur van de functie is eenvoudig: `(state, action) -> state'`. In menselijke taal, gegeven een huidige *State* (onthoud: een simpele JSON structuur) en een *Action*, levert de *Reducer* een nieuwe *State* op. Deze nieuwe *State* wordt daarna direct in de *Store* geplaatst.

## Redux: Action
Een *Action* is een beschrijving van iets wat is gebeurd. Ze hebben in ieder geval een beschrijvend `type`, hun naam, en optioneel een `payload`, extra data die hoort bij de gebeurtenis. Dit kan bijvoorbeeld ingevoerde data zijn, of gegevens die zijn aangeleverd door de back-end. Het programmeren van het dynamische karakter van een Angular applicatie volgt steeds weer hetzelfde stramien:

  1. Als reactie op een gebeurtenis (bijvoorbeeld een gebruiker die op een knop klikt), definieer een actie die dit beschrijft.
  2. Lever deze actie aan bij de *Store*, dit wordt ook wel *dispatch* genoemd.
  3. De *Store* bepaalt de nieuwe *State*, door de *Action* langs de *Reducer* functies te halen.
  4. De nieuwe *State* wordt automatisch in de *Store* gezet.

## Redux: View
De *View* beschrijft hoe de *State* op het scherm wordt getekend. De *View* is opgebouwd uit de Angular componenten-boom. Optioneel kunnen componenten data weergeven uit de *Store*, door zich hier op te abboneren. Wanneer de *State* veranderd, dan passen de componenten zich automatisch aan. Dit krachtige mechanisme zorgt ervoor dat de programmeur zich niet bezig hoeft te houden met complexe synchronisatie, iets wat snel leid tot een onhoudbare situatie wanneer diverse interacties gelijktijdig kunnen plaatsvinden. De presentatie is op deze wijze volledig losgekoppeld van het dynamische gedrag van de applicatie.

Het resultaat is een voorspelbare applicatie die goed te analyseren is met ondersteunende tools en waarvan de GUI elementen herbruikbaar inzetbaar zijn voor diverse projecten. Door te beginnen met een kwalitatieve basisset van componenten (dankzij [Angular Material](https://material.angular.io)), kunnen nieuwe projecten snel gerealiseerd worden, omdat direct kan worden begonnen met de beoogde functionaliteit.

## Redux DevTools
