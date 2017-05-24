# Beginnen met een nieuw Angular project
Om het beginnen met een nieuw Angular project zo eenvoudig mogelijk te maken, is een basisproject gemaakt wat fungeert als startpunt. Het beginnen van een nieuw project bestaat daarmee uit drie eenvoudige stappen: het aanmaken van het project in GitHub (waar de broncode wordt bewaard en om te kunnen samenwerken), het inladen van het basisproject en het inrichten van enkele laatste project instellingen.

## Aanmaken van een nieuw project in GitHub
Het aanmaken van een nieuw project in GitHub kan gedaan worden door een zogenaamde administrator. U kunt [hier](https://github.com/orgs/virecare/people?utf8=%E2%9C%93&query=%20role%3Aowner) zien wie dat zijn. De administrator dient de volgende stappen uit te voeren.

1. Klik op [GitHub](https://www.github.com/virecare) op de overzichtspagina rechtsboven op de groene knop `New`.
2. Geef de repository een beschrijvende naam voor het project, kies voor `Private` en zet het vinkje **aan** bij `Initialize this repository with a README`.
3. Klik rechtsboven op `Settings` en ga naar de pagina `Collaborators & teams`. Voeg de gewenste teams toe. Standaard is dit *developers* met lees- en schrijfrechten, *testers* met alleen leesrechten en *automation* met alleen leesrechten.

## Inladen van het basisproject
De volgende fase is het inladen van het basisproject. U kunt alle bestanden als *.zip* bestand [hier](https://www.github.com/virecare/seed) downloaden. Voer daarna de volgende stappen uit:

1. Open *Webstorm* en klik vanuit het startscherm op `Check out from Version Control -> GitHub`. N.B. voor deze stap dient uw laptop ingericht te zijn conform hoofdstuk *Laptop configuration*.
2. Selecteer in de beschikbare lijst van projecten het zojuist nieuw aangemaakte project en kies een plek op uw harde schijf waar u dit project wilt plaatsen.
3. Ga daarna met de *Verkenner* of *Finder* naar deze map en plaats hier de bestanden uit het gedownloade *.zip* bestand.
4. Ga terug naar Webstorm. Als het goed is ziet u hier nu de zojuist toegevoegde bestanden ook staan. Voeg alle bestanden toe aan uw eerste initiële commit en `push` deze.
5. Maak nu een nieuwe *branch* aan, genaamd **develop**. Pas in de bestanden *package.json* en *.angular-cli.json* de projectnaam en eventuele links aan. Maak hier een nieuwe commit van en `push` ook deze.

## Beschermen van branches 
De laatste stap is het *beschermen* van de zojuist aangemaakte branches tegen directe aanpassingen. Het doel hiervan is om elkaar te dwingen te werken conform het Git Flow proces, beschreven in hoofdstuk *Github*. Zodoende krijgt u de mogelijkheid om procesmatig de kwaliteit van nieuwe code te borgen. Een administrator doet dit als volgt:

1. Open de projectinstellingen op [github](www.github.com) (waar u ook de *Teams* heeft ingesteld.
2. Open ditmaal het tabblad *Branches*.
3. Kies de branch **master** onder het kopje *protected branches*.
4. Zet daarna de vinkjes **aan** bij:
    - Protect this branch
    - Require pull request reviews before merging
    - Require status checks to pass before merging
    - Require branches to be up to date before merging
5. Herhaal stap 3 en 4 voor de branch **develop**.

U bent nu klaar met het inladen en configureren van een nieuw Angular project. Happy coding!