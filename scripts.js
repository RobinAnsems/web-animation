//-------------------------------------------------------------------------------
//------code voor het verschuiven van de steentjes (regel 5 tot en met 771)------
//-------------------------------------------------------------------------------

//bron: https://www.w3schools.com/howto/howto_js_draggable.asp
dragElement1(document.getElementById("steentje1verplaatsen"));
dragElement2(document.getElementById("steentje2verplaatsen"));
dragElement3(document.getElementById("steentje3verplaatsen"));
dragElement4(document.getElementById("steentje4verplaatsen"));
dragElement5(document.getElementById("steentje5verplaatsen"));
dragElement6(document.getElementById("steentje6verplaatsen"));
dragElement7(document.getElementById("steentje7verplaatsen"));
dragElement8(document.getElementById("steentje8verplaatsen"));
dragElement9(document.getElementById("steentje9verplaatsen"));
dragElement10(document.getElementById("steentje10verplaatsen"));
dragElement11(document.getElementById("steentje11verplaatsen"));
dragElement12(document.getElementById("steentje12verplaatsen"));
dragElement13(document.getElementById("steentje13verplaatsen"));
dragElement14(document.getElementById("steentje14verplaatsen"));
dragElement15(document.getElementById("steentje15verplaatsen"));
dragElement16(document.getElementById("steentje16verplaatsen"));
dragElement17(document.getElementById("steentje17verplaatsen"));

function dragElement1(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
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

function dragElement2(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
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

function dragElement3(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
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

function dragElement4(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
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

function dragElement5(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
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

function dragElement6(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
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

function dragElement7(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
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

function dragElement8(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
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

function dragElement9(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
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

function dragElement10(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
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

function dragElement11(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
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

function dragElement12(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
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

function dragElement13(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
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

function dragElement14(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
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

function dragElement15(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
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

function dragElement16(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
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

function dragElement17(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
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

//---------------------------------------------------------------
//------code voor de colorpicker (regel 776 tot en met 828)------
//---------------------------------------------------------------

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

//-----------------------------------------------------------------------------
//------code voor de button van de colorpicker (regel 833 tot en met 847)------
//-----------------------------------------------------------------------------

var img1 = "images/omlaag.png";
var img2 = "images/omhoog.png";
var imgElement = document.getElementById('image1');

function laatsliderzien() {
    var knopje1 = document.getElementById('showdiv1');
    if (knopje1.style.display === "none") {
        knopje1.style.display = "block";
        imgElement.src = img2;
    } else {
        knopje1.style.display = "none";
        imgElement.src = img1;
    }
}

//-----------------------------------------------------------------------------
//------code voor de button van de metadata (regel 844 tot en met 862)------
//-----------------------------------------------------------------------------

var img12 = "images/omlaag.png";
var img22 = "images/omhoog.png";
var imgElement2 = document.getElementById('image2');

function laatmetazien() {
    var knopje2 = document.getElementById("showdiv2");
    if (knopje2.style.display === "none") {
        knopje2.style.display = "block";
        imgElement2.src = img22;
    } else {
        knopje2.style.display = "none";
        imgElement2.src = img12;
    }
}

//-----------------------------------------------------------------------------
//------code voor de button van de checkboxes (regel 867 tot en met 880)------
//-----------------------------------------------------------------------------

var img13 = "images/omlaag.png";
var img23 = "images/omhoog.png";
var imgElement3 = document.getElementById('image3');

function laatcheckboxzien() {
    var knopje3 = document.getElementById("showdiv3");
    if (knopje3.style.display === "none") {
        knopje3.style.display = "block";
        imgElement3.src = img23;
    } else {
        knopje3.style.display = "none";
        imgElement3.src = img13;
    }
}

//--------------------------------------------------------
//------toets-interactie (regel 886 tot en met 1296)------
//--------------------------------------------------------

var howh = document.querySelector('.how-h');
var hearth = document.querySelector('.heart-h');

document.addEventListener('keydown', toggleh1)

document.addEventListener('keyup', toggleh2)

function toggleh1(event1) {
    if (event1.key === 'h') {
        howh.classList.add('toets');
        hearth.classList.add('toets');
    }
}

function toggleh2(event1) {
    howh.classList.remove('toets');
    hearth.classList.remove('toets');
}



var howo = document.querySelector('.how-o');
var too = document.querySelector('.to-o');
var brokeno = document.querySelector('.broken-o');

document.addEventListener('keydown', toggleo1)

document.addEventListener('keyup', toggleo2)

function toggleo1(event2) {
    if (event2.key === 'o') {
        howo.classList.add('toets');
        too.classList.add('toets');
        brokeno.classList.add('toets');
    }
}

function toggleo2(event2) {
    howo.classList.remove('toets');
    too.classList.remove('toets');
    brokeno.classList.remove('toets');
}



var howw = document.querySelector('.how-w');

document.addEventListener('keydown', togglew1)

document.addEventListener('keyup', togglew2)

function togglew1(event3) {
    if (event3.key === 'w') {
        howw.classList.add('toets');
    }
}

function togglew2(event3) {
    howw.classList.remove('toets');
}



var tot = document.querySelector('.to-t');
var tret = document.querySelector('.tre-t');
var heartt = document.querySelector('.heart-t');

document.addEventListener('keydown', togglet1)

document.addEventListener('keyup', togglet2)

function togglet1(event4) {
    if (event4.key === 't') {
        tot.classList.add('toets');
        tret.classList.add('toets');
        heartt.classList.add('toets');
    }
}

function togglet2(event4) {
    tot.classList.remove('toets');
    tret.classList.remove('toets');
    heartt.classList.remove('toets');
}



var fixf = document.querySelector('.fix-f');

document.addEventListener('keydown', togglef1)

document.addEventListener('keyup', togglef2)

function togglef1(event5) {
    if (event5.key === 'f') {
        fixf.classList.add('toets');
    }
}

function togglef2(event5) {
    fixf.classList.remove('toets');
}



var fixi = document.querySelector('.fix-i');

document.addEventListener('keydown', togglei1)

document.addEventListener('keyup', togglei2)

function togglei1(event6) {
    if (event6.key === 'i') {
        fixi.classList.add('toets');
    }
}

function togglei2(event6) {
    fixi.classList.remove('toets');
}



var fixx = document.querySelector('.fix-x');

document.addEventListener('keydown', togglex1)

document.addEventListener('keyup', togglex2)

function togglex1(event7) {
    if (event7.key === 'x') {
        fixx.classList.add('toets');
    }
}

function togglex2(event7) {
    fixx.classList.remove('toets');
}



var a = document.querySelector('.a');
var hearta = document.querySelector('.heart-a');
var anda = document.querySelector('.and-a');
var makea = document.querySelector('.make-a');
var atwee = document.querySelector('.atwee');
var sparea = document.querySelector('.spare-a');
var sealsa = document.querySelector('.seals-a');

document.addEventListener('keydown', togglea1)

document.addEventListener('keyup', togglea2)

function togglea1(event8) {
    if (event8.key === 'a') {
        a.classList.add('toets');
        hearta.classList.add('toets');
        anda.classList.add('toets');
        makea.classList.add('toets');
        atwee.classList.add('toets');
        sparea.classList.add('toets');
        sealsa.classList.add('toets');
    }
}

function togglea2(event8) {
    a.classList.remove('toets');
    hearta.classList.remove('toets');
    anda.classList.remove('toets');
    makea.classList.remove('toets');
    atwee.classList.remove('toets');
    sparea.classList.remove('toets');
    sealsa.classList.remove('toets');
}



var brokenb = document.querySelector('.broken-b');
var byb = document.querySelector('.by-b');

document.addEventListener('keydown', toggleb1)

document.addEventListener('keyup', toggleb2)

function toggleb1(event9) {
    if (event9.key === 'b') {
        brokenb.classList.add('toets');
        byb.classList.add('toets');
    }
}

function toggleb2(event9) {
    brokenb.classList.remove('toets');
    byb.classList.remove('toets');
}



var brokenr = document.querySelector('.broken-r');
var heartr = document.querySelector('.heart-r');
var sparer = document.querySelector('.spare-r');
var trer = document.querySelector('.tre-r');

document.addEventListener('keydown', toggler1)

document.addEventListener('keyup', toggler2)

function toggler1(event10) {
    if (event10.key === 'r') {
        brokenr.classList.add('toets');
        heartr.classList.add('toets');
        sparer.classList.add('toets');
        trer.classList.add('toets');
    }
}

function toggler2(event10) {
    brokenr.classList.remove('toets');
    heartr.classList.remove('toets');
    sparer.classList.remove('toets');
    trer.classList.remove('toets');
}



var brokenk = document.querySelector('.broken-k');
var makek = document.querySelector('.make-k');

document.addEventListener('keydown', togglek1)

document.addEventListener('keyup', togglek2)

function togglek1(event11) {
    if (event11.key === 'k') {
        brokenk.classList.add('toets');
        makek.classList.add('toets');
    }
}

function togglek2(event11) {
    brokenk.classList.remove('toets');
    makek.classList.remove('toets');
}



var brokene = document.querySelector('.broken-e');
var hearte = document.querySelector('.heart-e');
var makee = document.querySelector('.make-e');
var sparee = document.querySelector('.spare-e');
var tree = document.querySelector('.tre-z');
var sealse = document.querySelector('.seals-e');

document.addEventListener('keydown', togglee1)

document.addEventListener('keyup', togglee2)

function togglee1(event12) {
    if (event12.key === 'e') {
        brokene.classList.add('toets');
        hearte.classList.add('toets');
        makee.classList.add('toets');
        sparee.classList.add('toets');
        tree.classList.add('toets');
        sealse.classList.add('toets');
    }
}

function togglee2(event12) {
    brokene.classList.remove('toets');
    hearte.classList.remove('toets');
    makee.classList.remove('toets');
    sparee.classList.remove('toets');
    tree.classList.remove('toets');
    sealse.classList.remove('toets');
}



var brokenn = document.querySelector('.broken-n');
var andn = document.querySelector('.and-n');

document.addEventListener('keydown', togglen1)

document.addEventListener('keyup', togglen2)

function togglen1(event13) {
    if (event13.key === 'n') {
        brokenn.classList.add('toets');
        andn.classList.add('toets');
    }
}

function togglen2(event13) {
    brokenn.classList.remove('toets');
    andn.classList.remove('toets');
}



var andd = document.querySelector('.and-d');

document.addEventListener('keydown', toggled1)

document.addEventListener('keyup', toggled2)

function toggled1(event14) {
    if (event14.key === 'd') {
        andd.classList.add('toets');
    }
}

function toggled2(event14) {
    andd.classList.remove('toets');
}



var makem = document.querySelector('.make-m');

document.addEventListener('keydown', togglem1)

document.addEventListener('keyup', togglem2)

function togglem1(event15) {
    if (event15.key === 'm') {
        makem.classList.add('toets');
    }
}

function togglem2(event15) {
    makem.classList.remove('toets');
}



var spares = document.querySelector('.spare-s');
var sealss1 = document.querySelector('.seals-s1');
var sealss2 = document.querySelector('.seals-s2');

document.addEventListener('keydown', toggles1)

document.addEventListener('keyup', toggles2)

function toggles1(event16) {
    if (event16.key === 's') {
        spares.classList.add('toets');
        sealss1.classList.add('toets');
        sealss2.classList.add('toets');
    }
}

function toggles2(event16) {
    spares.classList.remove('toets');
    sealss1.classList.remove('toets');
    sealss2.classList.remove('toets');
}



var sparep = document.querySelector('.spare-p');

document.addEventListener('keydown', togglep1)

document.addEventListener('keyup', togglep2)

function togglep1(event17) {
    if (event17.key === 'p') {
        sparep.classList.add('toets');
    }
}

function togglep2(event17) {
    sparep.classList.remove('toets');
}



var byy = document.querySelector('.by-y');

document.addEventListener('keydown', toggley1)

document.addEventListener('keyup', toggley2)

function toggley1(event18) {
    if (event18.key === 'y') {
        byy.classList.add('toets');
    }
}

function toggley2(event18) {
    byy.classList.remove('toets');
}



var sealsl = document.querySelector('.seals-l');

document.addEventListener('keydown', togglel1)

document.addEventListener('keyup', togglel2)

function togglel1(event19) {
    if (event19.key === 'l') {
        sealsl.classList.add('toets');
    }
}

function togglel2(event19) {
    sealsl.classList.remove('toets');
}

//--------------------------------------------------------
//------checkboxes (regel 1302 tot en met 1539)------
//--------------------------------------------------------

var checkbox1 = document.querySelector('#checkbox1');

function checkboxeen() {
    if (checkbox1.checked == true) {
        howh.classList.add('toets');
        hearth.classList.add('toets');
    } else {
        howh.classList.remove('toets');
        hearth.classList.remove('toets');
    }
}

var checkbox2 = document.querySelector('#checkbox2');

function checkboxtwee() {
    if (checkbox2.checked == true) {
        howo.classList.add('toets');
        too.classList.add('toets');
        brokeno.classList.add('toets');
    } else {
        howo.classList.remove('toets');
        too.classList.remove('toets');
        brokeno.classList.remove('toets');
    }
}

var checkbox3 = document.querySelector('#checkbox3');

function checkboxdrie() {
    if (checkbox3.checked == true) {
        howw.classList.add('toets');
    } else {
        howw.classList.remove('toets');
    }
}

var checkbox4 = document.querySelector('#checkbox4');

function checkboxvier() {
    if (checkbox4.checked == true) {
        tot.classList.add('toets');
        tret.classList.add('toets');
        heartt.classList.add('toets');
    } else {
        tot.classList.remove('toets');
        tret.classList.remove('toets');
        heartt.classList.remove('toets');
    }
}

var checkbox5 = document.querySelector('#checkbox5');

function checkboxvijf() {
    if (checkbox5.checked == true) {
        fixf.classList.add('toets');
    } else {
        fixf.classList.remove('toets');
    }
}

var checkbox6 = document.querySelector('#checkbox6');

function checkboxzes() {
    if (checkbox6.checked == true) {
        fixi.classList.add('toets');
    } else {
        fixi.classList.remove('toets');
    }
}

var checkbox7 = document.querySelector('#checkbox7');

function checkboxzeven() {
    if (checkbox7.checked == true) {
        fixx.classList.add('toets');
    } else {
        fixx.classList.remove('toets');
    }
}

var checkbox8 = document.querySelector('#checkbox8');

function checkboxacht() {
    if (checkbox8.checked == true) {
        a.classList.add('toets');
        hearta.classList.add('toets');
        anda.classList.add('toets');
        makea.classList.add('toets');
        atwee.classList.add('toets');
        sparea.classList.add('toets');
        sealsa.classList.add('toets');
    } else {
        a.classList.remove('toets');
        hearta.classList.remove('toets');
        anda.classList.remove('toets');
        makea.classList.remove('toets');
        atwee.classList.remove('toets');
        sparea.classList.remove('toets');
        sealsa.classList.remove('toets');
    }
}

var checkbox9 = document.querySelector('#checkbox9');

function checkboxnegen() {
    if (checkbox9.checked == true) {
        brokenb.classList.add('toets');
        byb.classList.add('toets');
    } else {
        brokenb.classList.remove('toets');
        byb.classList.remove('toets');
    }
}

var checkbox10 = document.querySelector('#checkbox10');

function checkboxtien() {
    if (checkbox10.checked == true) {
        brokenr.classList.add('toets');
        heartr.classList.add('toets');
        sparer.classList.add('toets');
        trer.classList.add('toets');
    } else {
        brokenr.classList.remove('toets');
        heartr.classList.remove('toets');
        sparer.classList.remove('toets');
        trer.classList.remove('toets');
    }
}

var checkbox11 = document.querySelector('#checkbox11');

function checkboxelf() {
    if (checkbox11.checked == true) {
        brokenk.classList.add('toets');
        makek.classList.add('toets');
    } else {
        brokenk.classList.remove('toets');
        makek.classList.remove('toets');
    }
}

var checkbox12 = document.querySelector('#checkbox12');

function checkboxtwaalf() {
    if (checkbox12.checked == true) {
        brokene.classList.add('toets');
        hearte.classList.add('toets');
        makee.classList.add('toets');
        sparee.classList.add('toets');
        tree.classList.add('toets');
        sealse.classList.add('toets');
    } else {
        brokene.classList.remove('toets');
        hearte.classList.remove('toets');
        makee.classList.remove('toets');
        sparee.classList.remove('toets');
        tree.classList.remove('toets');
        sealse.classList.remove('toets');
    }
}

var checkbox13 = document.querySelector('#checkbox13');

function checkboxdertien() {
    if (checkbox13.checked == true) {
        brokenn.classList.add('toets');
        andn.classList.add('toets');
    } else {
        brokenn.classList.remove('toets');
        andn.classList.remove('toets');
    }
}

var checkbox14 = document.querySelector('#checkbox14');

function checkboxveertien() {
    if (checkbox14.checked == true) {
        andd.classList.add('toets');
    } else {
        andd.classList.remove('toets');
    }
}

var checkbox15 = document.querySelector('#checkbox15');

function checkboxvijftien() {
    if (checkbox15.checked == true) {
        makem.classList.add('toets');
    } else {
        makem.classList.remove('toets');
    }
}

var checkbox16 = document.querySelector('#checkbox16');

function checkboxzestien() {
    if (checkbox16.checked == true) {
        spares.classList.add('toets');
        sealss1.classList.add('toets');
        sealss2.classList.add('toets');
    } else {
        spares.classList.remove('toets');
        sealss1.classList.remove('toets');
        sealss2.classList.remove('toets');
    }
}

var checkbox17 = document.querySelector('#checkbox17');

function checkboxzeventien() {
    if (checkbox17.checked == true) {
        sparep.classList.add('toets');
    } else {
        sparep.classList.remove('toets');
    }
}

var checkbox18 = document.querySelector('#checkbox18');

function checkboxachtien() {
    if (checkbox18.checked == true) {
        byy.classList.add('toets');
    } else {
        byy.classList.remove('toets');
    }
}

var checkbox19 = document.querySelector('#checkbox19');

function checkboxnegentien() {
    if (checkbox19.checked == true) {
        sealsl.classList.add('toets');
    } else {
        sealsl.classList.remove('toets');
    }
}