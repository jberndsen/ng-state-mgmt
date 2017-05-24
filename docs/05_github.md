# GitHub en Git Flow
## github.com
De code voor VIR Angular projecten wordt bewaard op https://www.github.com/virecare. U heeft een persoonlijk account nodig om toegang te krijgen en mee te werken aan deze projecten. Deze kan gratis worden aangemaakt op https://www.github.com/. De beheerder kan u daarna toevoegen aan de gewenste groepen (bijvoorbeeld ontwikkelaar of tester). U heeft daarmee de juiste toegang voor alle Angular projecten.

Indien u ervoor kiest om geen gebruik te maken van Jetbrains Webstorm (zie hoofdstuk "Laptop configuration"), dan is extra inrichting benodigd om met GitHub te kunnen werken. Dit bestaat uit twee delen:

1.	Het installeren van de [GitHub tools](https://git-for-windows.github.io/), indien u werkt op een Windows machine. Voor Mac zijn de benodigde tools standaard aanwezig.
2.	Het instellen van [SSH voor toegang](https://help.github.com/articles/generating-an-ssh-key/)

In Webstorm zijn deze benodigdheden automatisch geïntegreerd en het verdient daarom de aanbeveling om hier gebruik van te maken om installatiemoeilijkheden te voorkomen. Deze handleiding gaat niet verder in op het configureren van deze geavanceerde instellingen, omdat ervan uit wordt gegaan dat wanneer niet voor Webstorm wordt gekozen, de benodigde kennis aanwezig is.

## Git flow
Als git workflow proces is er gekozen voor *Git Flow*. Een proces wat een goede balans legt tussen het werkproces van de ontwikkelaar, de aansluiting met ontwerp-fases en de realiteit dat er werkzaamheden tussendoor benodigd zijn. Ook productie hot-fixes zijn goed te faciliteren met dit proces. Meer informatie kan [hier](http://nvie.com/posts/a-successful-git-branching-model/) gevonden worden.

Een korte samenvatting van de spelregels:

1. De branch *master* wordt enkel en alleen gebruikt voor code die daadwerkelijk in productie is gebracht bij klanten. Een release wordt getagd met het correcte versienummer.
2. De branch *develop* is waar alle ontwikkelingen samenkomen voor de komende release. Zowel *master* als *develop* zijn beschermd (middels een instelling binnen Github) tegen directe wijzigingen. Alle aanpassingen moeten door een ander teamlid middels een *Pull Request* zijn goedgekeurd om code kwaliteit te borgen.
3. Nieuwe features worden ontwikkeld in een *feature branch*, welke afgesplitst wordt van *develop*. Middels een *Pull Request* worden deze geaccepteerd in de *develop* branch.
4. Hotfixes voor productie verstoringen worden gedaan in een *hotfix branch*, welke afgesplitst wordt van *master*. Na goedkeuring wordt deze doorgevoerd in *master* en *develop*.

Onderstaande afbeelding geeft het beoogde proces goed weer:

![Git Flow](http://nvie.com/img/git-model@2x.png)