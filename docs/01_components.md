# Componenten
Met een component-based architectuur wordt bedoelt dat een front-end applicatie wordt opgebouwd uit componenten: geëncapsuleerde en herbruikbare bouwstenen. Men kan over een component denken als zijnde een geisoleerd brokje functionaliteit wat een stukje scherm representeert. Kleine componenten, zoals bijvoorbeeld een checkbox, een invoerveld en een knop worden samengevoegd tot grotere componenten, zoals bijvoorbeeld een zoekbalk. Weer grotere componenten vormen uiteindelijk pagina-onderdelen, die tezamen een hele Angular applicatie vormen. Men kan een Angular applicatie visualiseren als een boom-structuur van componenten.

## Anatomie van een component
Een Angular component bestaat meestal uit 3 bestanden:

1. een *html* bestand, wat de DOM bescrijft;
2. een *css* bestand, wat **component-specifieke** layout regels beschrijft;
3. een *TypeScript* bestand, welke het dynamische gedrag beschrijft en het component beschikbaar stelt binnen de Angular applicatie.

Het is behulpzaam om een component te zien als een geïsoleerd stukje scherm. Een stukje visualisatie voor de eindgebruiker. Dynamische data kan aangeleverd worden als *input* parameters. Tevens kunnen er *events* optreden middels *output* parameters, bedoelt om het bovenliggende component hierop te laten reageren. Logica die niet gerelateerd is aan het **tonen van gegevens** of aan het **afhandelen van gebruikersacties** hoort waarschijnlijk niet in een component thuis. Probeer er altijd zodanig over na te denken, dat het component zo weinig mogelijk doet en zodoende breder inzetbaar is in andere applicaties.

## *root-component* en *entry-component*
Het zogenaamde *root component* is bedoelt als het startpunt van de Angular applicatie, het element vanwaar uit de rest van de applicatie wordt opgebouwd. Men vindt dit component in het seed project in `src/app/components/root/root.component.ts`. In dit component kan men direct beginnen met het opbouwen van de visuele componenten. Eventuele additionele opstart-logica kan ook hier geinitialiseerd worden.

Wanneer men goed kijkt, dan zal opvallen dat er nog een hoger liggend component bestaat, het zogenaamde *entry component*. Deze bevindt zich in het seed project in `src/app/app.component.ts`. Dit is het component waarmee Angular (volgens de *module definitie*) opstart. De reden dat deze lossstaat van de overige componenten, is omdat dit component niks visueels toevoegt. Hij bestaat enkel en alleen om *route parameters* (url fragmenten) goed op te kunnen vangen. Deze wijze van initialiseren is voor nagenoeg alle projecten gelijk. Zodoende helpt het de ontwikkelaar om sneller te kunnen starten met bouwen door mentaal te beginnen vanuit het *root-component*.

## De map *components*
Alle componenten worden ondergebracht in een eigen map in de map `src/app/components`. Gezien de geringe omvang van de huidige Angular applicaties wordt hier geen verdere onderverdeling toegepast. In ieder geval vindt men hier altijd het *root component* terug. Men zal later ontdekken dat in het *seed project* meer componenten standaard aanwezig zijn, welke te maken hebben met vaak terugkomende VIR-specifieke functionaliteit. In deze beschrijving wordt hier verder niet op ingegaan.

## Angular modules
Het Angular framework bundelt functionaliteit in een zogenaamde *Module*. Het is een manier om samenhorende functionaliteit bij elkaar te bundelen. Een module beschrijft welke *components*, *services* en afhankelijkheden bij elkaar horen. Een VIR Angular applicatie bestaat uit één enkele module, gedefinieerd in het bestand `src/app/app.module.ts`. Hierin staat precies beschreven welke externe afhankelijkheden er benodigd zijn, welke componenten en services er gedefinieerd zijn, en welk component het opstart-component is waarmee de applicatie moet worden geinitialiseerd.

**n.b.** Het is een veelvoorkomende fout om een nieuw component toe te voegen aan het project, maar om deze niet ook aan de module toe te voegen. Men kan het component dan nog niet gebruiken in andere componenten, zonder dat hier een duidelijke foutmelding over wordt gegeven. Let hier dus op.

## Material Design
Voor de VIR suite is gekozen om gebruik te maken van **Google Material Design**. Een volledige design specificatie, welke de visuele spelregels bepaalt over de look-and-feel van de Angular applicaties. De volledige specificatie kan men [hier](https://material.io/guidelines/) terugvinden. Het is de doelstelling om voor alle VIR Angular applicaties deze richtlijnen zoveel mogelijk te volgen. Dit creëert een consistente gebruikersbeleving. Tevens versnelt het de ontwikkeling met ieder nieuw project, omdat herbruikbare componenten voor nieuwe projecten ingezet kunnen worden. 

Voor Angular ontwikkelt een team bij Google een complete bibliotheek met veelvoorkomende visuele componenten, te vinden op [Angular Material](https://material.angular.io/components). Deze componenten voldoen aan de visuele specificatie, zijn van hoogwaardige kwaliteit en zijn direct in te zetten in de VIR Angular applicaties. Op de website vind men de beschikbare componenten, visuele voorbeelden en de code documentatie.