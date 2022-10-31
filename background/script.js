/*-- Function to store ID "value" on localStorage --*/

function storeCo1(imageID) { // Value "c1".
    var id = imageID["c1"];
    localStorage.setItem("c1", id.value);
    console.log("Cover 1 saved.");
    return true;
}

function storeCo2(imageID) { // Value "c2".
    var id = imageID["c2"];
    localStorage.setItem("c2", id.value);
    console.log("Cover 2 saved.");
    return true;
}

function storeCo3(imageID) { // Value "c3".
    var id = imageID["c3"];
    localStorage.setItem("c3", id.value);
    console.log("Cover 3 saved.");
    return true;
}

function storeCo4(imageID) { // Value "c4".
    var id = imageID["c4"];
    localStorage.setItem("c4", id.value);
    console.log("Cover 4 saved.");
    return true;
}

function storeCo5(imageID) { // Value "c5".
    var id = imageID["c5"];
    localStorage.setItem("c5", id.value);
    console.log("Cover 5 saved.");
    return true;
}

function storeCo6(imageID) { // Value "c6'.
    var id = imageID["c6"];
    localStorage.setItem("c6", id.value);
    console.log("Cover 6 saved.");
    return true;
}

function storeCo7(imageID) { // Value "c7".
    var id = imageID["c7"];
    localStorage.setItem("c7", id.value);
    console.log("Cover 7 saved.");
    return true;
}

function storeCo8(imageID) { // Value "c8".
    var id = imageID["c8"];
    localStorage.setItem("c8", id.value);
    console.log("Cover 8 saved.");
    return true;
}

function storeCo9(imageID) { // Value "c9".
    var id = imageID["c9"];
    localStorage.setItem("c9", id.value);
    console.log("Cover 9 saved.");
    return true;
}

function storeCo10(imageID) { // Value "c10".
    var id = imageID["c10"];
    localStorage.setItem("c10", id.value);
    console.log("Cover 10 saved.");
    return true;
}

function storeCo11(imageID) { // Value "c11".
    var id = imageID["c11"];
    localStorage.setItem("c11", id.value);
    console.log("Cover 11 saved.");
    return true;
}

function storeCo12(imageID) { // Value "c12".
    var id = imageID["c12"];
    localStorage.setItem("c12", id.value);
    console.log("Cover 12 saved.");
    return true;
}

/*-- Get ID from localStorage and show that image (Background) --*/

const c1 = localStorage.getItem('c1');
if (c1) {
    document.getElementById("backCover").src = "image/background/c1.jpg";
    document.getElementById("Message").innerHTML = "Background C1";
    console.log("Background ID: c1");
}
const c2 = localStorage.getItem('c2');
if (c2) {
    document.getElementById("backCover").src = "image/background/c2.jpg";
    document.getElementById("Message").innerHTML = "Background C2";
    console.log("Background ID: c2");
}
const c3 = localStorage.getItem('c3');
if (c3) {
    document.getElementById("backCover").src = "image/background/c3.jpg";
    document.getElementById("Message").innerHTML = "Background C3";
    console.log("Background ID: c3");
}
const c4 = localStorage.getItem('c4');
if (c4) {
    document.getElementById("backCover").src = "image/background/c4.jpg";
    document.getElementById("Message").innerHTML = "Background C4";
    console.log("Background ID: c4");
}
const c5 = localStorage.getItem('c5');
if (c5) {
    document.getElementById("backCover").src = "image/background/c5.jpg";
    document.getElementById("Message").innerHTML = "Background C5";
    console.log("Background ID: c5");
}
const c6 = localStorage.getItem('c6');
if (c6) {
    document.getElementById("backCover").src = "image/background/c6.jpg";
    document.getElementById("Message").innerHTML = "Background C6";
    console.log("Background ID: c6");
}
const c7 = localStorage.getItem('c7');
if (c7) {
    document.getElementById("backCover").src = "image/background/c7.jpg";
    document.getElementById("Message").innerHTML = "Background C7";
    console.log("Background ID: c7");
}
const c8 = localStorage.getItem('c8');
if (c8) {
    document.getElementById("backCover").src = "image/background/c8.jpg";
    document.getElementById("Message").innerHTML = "Background C8";
    console.log("Background ID: c8");
}
const c9 = localStorage.getItem('c9');
if (c9) {
    document.getElementById("backCover").src = "image/background/c9.jpg";
    document.getElementById("Message").innerHTML = "Background C9";
    console.log("Background ID: c9");
}
const c10 = localStorage.getItem('c10');
if (c10) {
    document.getElementById("backCover").src = "image/background/c10.jpg";
    document.getElementById("Message").innerHTML = "Background C10";
    console.log("Background ID: c10");
}
const c11 = localStorage.getItem('c11');
if (c11) {
    document.getElementById("backCover").src = "image/background/c11.jpg";
    document.getElementById("Message").innerHTML = "Background C11";
    console.log("Background ID: c11");
}
const c12 = localStorage.getItem('c12');
if (c12) {
    document.getElementById("backCover").src = "image/background/c12.jpg";
    document.getElementById("Message").innerHTML = "Background C12";
    console.log("Background ID: c12");
}

/*-- Remove ID from localStorage + Refresh button --*/

function deleteItem() {
    localStorage.removeItem("c1");
    localStorage.removeItem('c2');
    localStorage.removeItem('c3');
    localStorage.removeItem('c4');
    localStorage.removeItem('c5');
    localStorage.removeItem('c6');
    localStorage.removeItem('c7');
    localStorage.removeItem('c8');
    localStorage.removeItem('c9');
    localStorage.removeItem('c10');
    localStorage.removeItem('c11');
    localStorage.removeItem('c12');
    console.log("Background has been removed.");
}

/*-- Refresh button --*/

$(document).ready(function() {
    $("button").click(function() {
        window.location = window.location.pathname;
    });
});
