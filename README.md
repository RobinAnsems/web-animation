# Web Animation Robin Ansems VID2 

Hallo, welkom bij mijn Github-Repository van Web-Animation. Ik volg een opleiding genaamd: Communication and Multimedia Design aan de Hogeschool van Amsterdam en volg een Minor genaamd Visual Interface Design. Bij het vak Web-Animation leren we hoe je verschillende CSS-transities en CSS-animaties mmaakt die interactie toevoegen. Hier onder is te zien wat ik heb gemaakt voor het vak. Veel lees plezier!

## Inhoudsopgave

*   [Opdracht](#opdracht)
*   [Kunstwerk](#kunstwerk)
*   [Interactie](#interactie)
*   [Code](#code)
*   [Bronnen](#bronnen)
*   [Socials](#socials)

## Opdracht
De opdracht is:
_Kies een kunstwerk uit het Letterform-archief of het AIGA-archief en vertaal dat naar het web. Wat gebeurt er als mensen met hun muis over bepaalde elementen zweven? Wat als ze op toetsen op hun toetsenbord drukken? Hoe moet het 'statische kunstwerk' zich gedragen op verschillende schermformaten? Probeer het eerst opnieuw te maken met webtechnologie (html-elementen, svg), voeg vervolgens interactiviteit en animatie toe._

## Kunstwerk
Het kunstwerk dat ik heb gekozen is, heet: "_How To Fix A Broken Heart and Make A Spare_".
![gekozenkunstwerk](https://github.com/RobinAnsems/web-animation/blob/master/images/1.jpg)

Het kunstwerk is gemaakt door Tré Seals. Deze Afro-Amerikaan uit Accoceek heeft het kunstwerk in 2017 gemaakt.

#### Achtergrondverhaal
Een klein achtergrondverhaaltje over het kunstwerk: 
"_Het begon allemaal op de middelbare school toen hij kleine Lego ™ -stukken begon te maken (harten, klavertje vier, Pac Man, enz.), Spelden op de rug legde en er een modeaccessoire van maakte._"

"_Tijdens zijn eerste jaar op de universiteit was hij behoorlijk verlegen en onzeker over hoe hij mensen moest ontmoeten. Dus besloot hij deze Lego ™ -spelden te dragen om mensen naar binnen te trekken en een gesprek te beginnen. En het werkte. Hij werd bekend als "The Guy with the Lego Heart" voor degenen die zijn echte naam niet kenden, en zijn vrienden zouden boos worden als hij besloot er geen te dragen. Nadat hij ze tijdens zijn studententijd als bijzaak had verkocht, besloot Tré een boek en een doe-het-zelf-pakket te maken, zodat mensen er zelf een konden maken._"

#### Waarom ik het kunstwerk heb gekozen
Ik heb het kunstwerk gevonden op [designarchives.aiga.org](https://designarchives.aiga.org/#/home) onder "_50 Books | 50 Covers of 2017_". Toen ik het kunstwerk tegenkwam was ik gelijk geïnteresseerd in de Lego-steentjes. Ik dacht gelijk: "Wat nou als je het hartje uit elkaar kan halen en er iets nieuws van kan maken?". Ik was ook gelijk geïnteresseerd in de tekst van het kunstwerk. De tekst bestaat uit bolletjes (die ik in css allemaal individueel moet gaan positioneren), per regel staan er 1 of 2 woorden, maar wat nou als ik het kunstwerk responsive wil maken? Ik dacht gelijk: "Dan kunnen de woorden anders achter elkaar komen te staan waardoor je bij elk ander schermformaat een unieke poster creëert.

## Interactie
De interacties die ik heb toegepast zijn de volgende:

#### Het hartje
Ik heb elk steentje van het hartje apart gedigitaliseerd zodat als je het hartje uit elkaar haalt, je ook kan zien dat elk steentje puntjes heeft aan de bovenkant, dit is realistischer en hardstikke logisch. Ik heb met wat javascript er voor kunnen zorgen dat je elk steentje (dat een divje is) apart kunt bewegen:

```javascript
//bron: https://www.w3schools.com/howto/howto_js_draggable.asp
dragElement1(document.getElementById("steentje1verplaatsen"));

function dragElement1(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "-drag")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "-drag").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
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
    height: 11.5em; /*de hoogte van het woord*/
    left: 10em; /*gepositioneerd vanaf de linkerkant van het kunstwerk*/
    opacity: 100%; /*niet belangrijk*/
    position: absolute; /*dit is de belangrijkste!*/
    top: 66.5em; /*gepositioneerd vanaf de bovenkant van het kunstwerk*/
    width: 54em; /*de lengte van het woord*/
}
```

Daarna heb ik de tekst responsive gemaakt:

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

## Code
De code die ik heb geschreven is...

## Bronnen
De bronnen die ik heb gebruikt zijn:
* [Het kunstwerk](https://designarchives.aiga.org/#/entries/How%20To%20Fix%20A%20Broken%20Heart%20and%20Make%20A%20Spare/_/detail/relevance/asc/0/7/21926/how-to-fix-a-broken-heart-and-make-a-spare/1)
* []()
* []()
* []()

#### Socials
dit is waar je mij kan vinden:
*   🌐[ Portfolio website](https://robinansems.github.io/index.html)
*   📷[ Instagram](https://www.instagram.com/robinansems/)
*   🐦[ Twitter](https://twitter.com/robinansems)
*   📹[ Youtube](https://www.youtube.com/user/robinansems00)
*   📚[ Facebook](https://www.facebook.com/profile.php?id=100005222555664)




