# Web Animation Robin Ansems VID2 

Hallo, welkom bij mijn Github-Repository van Web-Animation. Ik volg een opleiding genaamd: Communication and Multimedia Design aan de Hogeschool van Amsterdam en volg een Minor genaamd Visual Interface Design. Bij het vak Web-Animation leren we hoe je verschillende CSS-transities en CSS-animaties mmaakt die interactie toevoegen. Hier onder is te zien wat ik heb gemaakt voor het vak. Veel lees plezier!

## Inhoudsopgave

*   [Opdracht](#opdracht)
*   [Kunstwerk](#kunstwerk)
*   [Interactie](#interactie)
*   [Bronnen](#bronnen)
*   [Socials](#socials)

## Opdracht
De opdracht is:
_Kies een kunstwerk uit het Letterform-archief of het AIGA-archief en vertaal dat naar het web. Wat gebeurt er als mensen met hun muis over bepaalde elementen zweven? Wat als ze op toetsen op hun toetsenbord drukken? Hoe moet het 'statische kunstwerk' zich gedragen op verschillende schermformaten? Probeer het eerst opnieuw te maken met webtechnologie (html-elementen, svg), voeg vervolgens interactiviteit en animatie toe._

## Kunstwerk
Het kunstwerk dat ik heb gekozen is, heet: "_How To Fix A Broken Heart and Make A Spare_".

![gekozenkunstwerk](https://github.com/RobinAnsems/web-animation/blob/master/images/1.jpg)

[bron](https://designarchives.aiga.org/#/entries/How%20To%20Fix%20A%20Broken%20Heart%20and%20Make%20A%20Spare/_/detail/relevance/asc/0/7/21926/how-to-fix-a-broken-heart-and-make-a-spare/1)

Het kunstwerk is gemaakt door Tré Seals. Deze Afro-Amerikaan uit Accoceek heeft het kunstwerk in 2017 gemaakt.

#### Achtergrondverhaal
Een klein achtergrondverhaaltje over het kunstwerk: 

"_Het begon allemaal op de middelbare school toen hij kleine Lego ™ -stukken begon te maken (harten, klavertje vier, Pac Man, enz.), Spelden op de rug legde en er een modeaccessoire van maakte._"

"_Tijdens zijn eerste jaar op de universiteit was hij behoorlijk verlegen en onzeker over hoe hij mensen moest ontmoeten. Dus besloot hij deze Lego ™ -spelden te dragen om mensen naar binnen te trekken en een gesprek te beginnen. En het werkte. Hij werd bekend als "The Guy with the Lego Heart" voor degenen die zijn echte naam niet kenden, en zijn vrienden zouden boos worden als hij besloot er geen te dragen. Nadat hij ze tijdens zijn studententijd als bijzaak had verkocht, besloot Tré een boek en een doe-het-zelf-pakket te maken, zodat mensen er zelf een konden maken._" [bron](https://designarchives.aiga.org/#/entries/How%20To%20Fix%20A%20Broken%20Heart%20and%20Make%20A%20Spare/_/detail/relevance/asc/0/7/21926/how-to-fix-a-broken-heart-and-make-a-spare/1)

#### Waarom ik het kunstwerk heb gekozen
Ik heb het kunstwerk gevonden op [designarchives.aiga.org](https://designarchives.aiga.org/#/home) onder "_50 Books | 50 Covers of 2017_". Toen ik het kunstwerk tegenkwam was ik gelijk geïnteresseerd in de Lego-steentjes. Ik dacht gelijk: "Wat nou als je het hartje uit elkaar kan halen en er iets nieuws van kan maken?". Ik was ook gelijk geïnteresseerd in de tekst van het kunstwerk. De tekst bestaat uit bolletjes (die ik in css allemaal individueel moet gaan positioneren), per regel staan er 1 of 2 woorden, maar wat nou als ik het kunstwerk responsive wil maken? Ik dacht gelijk: "Dan kunnen de woorden anders achter elkaar komen te staan waardoor je bij elk ander schermformaat een unieke poster creëert.

## Interactie
De interacties die ik heb toegepast zijn de volgende:

#### Het hartje
Ik heb elk steentje van het hartje apart gedigitaliseerd zodat als je het hartje uit elkaar haalt, je ook kan zien dat elk steentje puntjes heeft aan de bovenkant, dit is realistischer en hardstikke logisch. 

![steentjes-weergave](https://github.com/RobinAnsems/web-animation/blob/master/images/steentjes-weergave.png)

Ik heb met wat javascript er voor kunnen zorgen dat je elk steentje (dat een divje is) apart kunt bewegen:

```javascript
//bron: https://www.w3schools.com/howto/howto_js_draggable.asp
dragElement1(document.getElementById("steentje1verplaatsen"));

function dragElement1(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    // deze regel zorgt er voor dat wanneer jij je muis ingegedrukt houdt op een steentje, het steentje kunt verplaatsen door met je muis te slepen:
    elmnt.onmousedown = dragMouseDown;
 

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // deze regel kijkt naar de positie van je muiscursor als je de pagina laadt: 
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // deze regel start de functie genaamd: 'elementDrag' wanneer jij je muis beweegt:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // deze regel berekend de nieuwe positie van je muiscursor: 
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // deze regel plaats het element op de nieuwe positie: 
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // deze regel zorgt er voor dat het element niet meer verplaatst als jij je muisknop loslaat:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
```

#### De tekst
Ik heb elk woord, elke letter en elk bolletje doormiddel van de volgende paar regels CSS gepositioneerd:

```css
.heart {
    background-color: transparent; /*niet belangrijk*/
    height: 11.5em; /*de hoogte van het bolletje, letter of woord*/
    left: 10em; /*gepositioneerd vanaf de linkerkant van het divje er omheen*/
    opacity: 100%; /*niet belangrijk*/
    position: absolute; /*dit is de belangrijkste!*/
    top: 66.5em; /*gepositioneerd vanaf de bovenkant van het divje er omheen*/
    width: 54em; /*de lengte van het bolletje, letter of woord*/
}
```

Daarna heb ik de tekst responsive gemaakt door middel van mediaqueries:

Het kunstwerk is op zijn originele wijze op het schermformaat van mobiel (width kleiner dan 750px):

![mobiel-responsive](https://github.com/RobinAnsems/web-animation/blob/master/images/mobiel-responsive.png)

De tekst van het kunstwerk is anders weergegeven op het schermformaat van tablet, en het hartje staat in het midden van het scherm (width groter dan 750px):

![tablet-responsive](https://github.com/RobinAnsems/web-animation/blob/master/images/tablet-responsive.png)

De tekst van het kunstwerk is nog een keer anders weergegeven op het schermformaat van desktop, en het hartje staat in het midden van het scherm en is vergroot (width groter dan 1024px):

![desktop-responsive](https://github.com/RobinAnsems/web-animation/blob/master/images/desktop-responsive.png)


#### De kleur van de achtergrond
Ik heb doormiddel van colorsliders er voor kunnen zorgen dat je de kleur van de achtergrond kan veranderen.
Dat heb ik gedaan doormiddel van de volgende code:

```javascript
//bron: https://codepen.io/leemark/pen/lpEHr
var body = document.body,
    rood = document.querySelector('#rood'),
    groen = document.querySelector('#groen'),
    blauw = document.querySelector('#blauw'),
    rood_out = document.querySelector('#rood_out'),
    groen_out = document.querySelector('#groen_out'),
    blauw_out = document.querySelector('#blauw_out'),
    hex_out = document.querySelector('#hex');

function setColorbody() {
    var rood_hex = parseInt(rood.value, 10).toString(16),
        groen_hex = parseInt(groen.value, 10).toString(16),
        blauw_hex = parseInt(blauw.value, 10).toString(16),
        hex = "#" + pad(rood_hex) + pad(groen_hex) + pad(blauw_hex);
    body.style.backgroundColor = hex;
    hex_out.value = hex;
}

function pad(n) {
    return (n.length < 2) ? "0" + n : n;
}

rood.addEventListener('change', function () {
    setColorbody();
    rood_out.value = rood.value;
}, false);

rood.addEventListener('input', function () {
    setColorbody();
    rood_out.value = rood.value;
}, false);

groen.addEventListener('change', function () {
    setColorbody();
    groen_out.value = groen.value;
}, false);

groen.addEventListener('input', function () {
    setColorbody();
    groen_out.value = groen.value;
}, false);

blauw.addEventListener('change', function () {
    setColorbody();
    blauw_out.value = blauw.value;
}, false);

blauw.addEventListener('input', function () {
    setColorbody();
    blauw_out.value = blauw.value;
}, false);
```

Zo ziet het er uit:

![colorpicker](https://github.com/RobinAnsems/web-animation/blob/master/images/colorpicker.png)

#### Hover
Ik heb door middel van "_:hover_" er voor gezorgd dat de kleur van de bolletjes veranderd als je er met je muis overheen hovert. Dat heb ik gedaan door middel van de volgende code:

```css
#style1 {
    background-color: red;
    border: 0.5em solid black;
    border-radius: 50%;
    height: 1.5em;
    opacity: 100%;
    position: absolute;
    width: 1.5em;
}

#style1:hover {
    background-color: white;
    border: 0.5em solid black;
    border-radius: 50%;
    height: 1.5em;
    opacity: 100%;
    position: absolute;
    width: 1.5em;
    transform: scale(1.5);
    transition: 0.1s ease-in-out;
    transform-origin: center;
}
```

Zo ziet het er uit (en eerlijk gezegd is het best satisfying om te hoveren over de bolletjes):

![hover](https://github.com/RobinAnsems/web-animation/blob/master/images/hover.png)

#### Toetsenbord-interactie
Ik heb door middel van het volgende stukje code, er voor kunnen zorgen dat wanneer je een letter op je toetsenbord indrukt de letter op het kunstwerk 3D wordt weergegeven:

```javascript
// Het selecteren van een element
var letter-h = document.querySelector('.how-h');
// Luisteren naar het event genaamd 'keydown' oftwel toets ingedrukt
document.addEventListener('keydown', toggle)
// Luisteren naar het event genaamd 'keyup' oftwel toets losgelaten
document.addEventListener('keyup', toggle)

function toggle(event) {
// De toets die moet worden ingedrukt
    if (event.key === 'h') {
// De CSS wordt aangepast door het toevoegen van een class
        letter-h.classList.add('toets');
    }
}

function toggle(event) {
// De CSS wordt verwijderd door het verwijderen van de class
    letter-h.classList.remove('toets');
}
```

Dit is de css die wordt toegevoegd:

```css
.toets {
    transform: scale(1.1) rotateX(20deg) rotateY(-15deg) rotateZ(5deg);
    box-shadow: 0.5em 0.5em 0.5em 0.5em rgba(0, 0, 0, .4);
    transition-duration: 0.3s;
}
```

Zo ziet het er uit als je bijvoorbeeld de letter 'a' indrukt (ik heb dit voor elke letter in het kunstwerk gemaakt): 

![letter-a](https://github.com/RobinAnsems/web-animation/blob/master/images/letter-a.png)

## Bronnen
De bronnen die ik heb gebruikt zijn:
* [Het kunstwerk](https://designarchives.aiga.org/#/entries/How%20To%20Fix%20A%20Broken%20Heart%20and%20Make%20A%20Spare/_/detail/relevance/asc/0/7/21926/how-to-fix-a-broken-heart-and-make-a-spare/1)
* [Colorpicker](https://codepen.io/leemark/pen/lpEHr)
* [Draggable Elements](https://www.w3schools.com/howto/howto_js_draggable.asp)
* []()

#### Socials
dit is waar je mij kan vinden:
*   🌐[ Portfolio website](https://robinansems.github.io/index.html)
*   📷[ Instagram](https://www.instagram.com/robinansems/)
*   🐦[ Twitter](https://twitter.com/robinansems)
*   📹[ Youtube](https://www.youtube.com/user/robinansems00)
*   📚[ Facebook](https://www.facebook.com/profile.php?id=100005222555664)




