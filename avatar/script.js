/*-- Function to store ID "value" on localStorage --*/

function storeAv1(imageID) { // Value "av1".
    var id = imageID["av1"];
    localStorage.setItem("av1", id.value);
    console.log("Avatar 1 saved.");
    return true;
}

function storeAv2(imageID) { // Value "av2".
    var id = imageID["av2"];
    localStorage.setItem("av2", id.value);
    console.log("Avatar 2 saved.");
    return true;
}

function storeAv3(imageID) { // Value "av3".
    var id = imageID["av3"];
    localStorage.setItem("av3", id.value);
    console.log("Avatar 3 saved.");
    return true;
}

function storeAv4(imageID) { // Value "av4".
    var id = imageID["av4"];
    localStorage.setItem("av4", id.value);
    console.log("Avatar 4 saved.");
    return true;
}

function storeAv5(imageID) { // Value "av5".
    var id = imageID["av5"];
    localStorage.setItem("av5", id.value);
    console.log("Avatar 5 saved.");
    return true;
}

function storeAv6(imageID) { // Value "av6'.
    var id = imageID["av6"];
    localStorage.setItem("av6", id.value);
    console.log("Avatar 6 saved.");
    return true;
}

function storeAv7(imageID) { // Value "av7".
    var id = imageID["av7"];
    localStorage.setItem("av7", id.value);
    console.log("Avatar 7 saved.");
    return true;
}

function storeAv8(imageID) { // Value "av8".
    var id = imageID["av8"];
    localStorage.setItem("av8", id.value);
    console.log("Avatar 8 saved.");
    return true;
}

function storeAv9(imageID) { // Value "av9".
    var id = imageID["av9"];
    localStorage.setItem("av9", id.value);
    console.log("Avatar 9 saved.");
    return true;
}

function storeAv10(imageID) { // Value "av10".
    var id = imageID["av10"];
    localStorage.setItem("av10", id.value);
    console.log("Avatar 10 saved.");
    return true;
}

function storeAv11(imageID) { // Value "av11".
    var id = imageID["av11"];
    localStorage.setItem("av11", id.value);
    console.log("Avatar 11 saved.");
    return true;
}

function storeAv12(imageID) { // Value "av12".
    var id = imageID["av12"];
    localStorage.setItem("av12", id.value);
    console.log("Avatar 12 saved.");
    return true;
}

/*-- Get ID from localStorage and show that image (Avatar) --*/

const av1 = localStorage.getItem('av1');
if (av1) {
    document.getElementById("imageAvatar").src = "image/avatar/av1.png";
    document.getElementById('Message').innerHTML = "This is your Avatar!";
    document.getElementById("Message2").innerHTML = "Delete first before changing Avatar";
    console.log("Avatar ID: av1");
}
const av2 = localStorage.getItem('av2');
if (av2) {
    document.getElementById("imageAvatar").src = "image/avatar/av2.png";
    document.getElementById('Message').innerHTML = "This is your Avatar!";
    document.getElementById("Message2").innerHTML = "Delete first before changing Avatar";
    console.log("Avatar ID: av2");
}
const av3 = localStorage.getItem('av3');
if (av3) {
    document.getElementById("imageAvatar").src = "image/avatar/av3.png";
    document.getElementById('Message').innerHTML = "This is your Avatar!";
    document.getElementById("Message2").innerHTML = "Delete first before changing Avatar";
    console.log("Avatar ID: av3");
}
const av4 = localStorage.getItem('av4');
if (av4) {
    document.getElementById("imageAvatar").src = "image/avatar/av4.png";
    document.getElementById('Message').innerHTML = "This is your Avatar!";
    document.getElementById("Message2").innerHTML = "Delete first before changing Avatar";
    console.log("Avatar ID: av4");
}
const av5 = localStorage.getItem('av5');
if (av5) {
    document.getElementById("imageAvatar").src = "image/avatar/av5.png";
    document.getElementById('Message').innerHTML = "This is your Avatar!";
    document.getElementById("Message2").innerHTML = "Delete first before changing Avatar";
    console.log("Avatar ID: av5");
}
const av6 = localStorage.getItem('av6');
if (av6) {
    document.getElementById("imageAvatar").src = "image/avatar/av6.png";
    document.getElementById('Message').innerHTML = "This is your Avatar!";
    document.getElementById("Message2").innerHTML = "Delete first before changing Avatar";
    console.log("Avatar ID: av6");
}
const av7 = localStorage.getItem('av7');
if (av7) {
    document.getElementById("imageAvatar").src = "image/avatar/av7.png";
    document.getElementById('Message').innerHTML = "This is your Avatar!";
    document.getElementById("Message2").innerHTML = "Delete first before changing Avatar";
    console.log("Avatar ID: av7");
}
const av8 = localStorage.getItem('av8');
if (av8) {
    document.getElementById("imageAvatar").src = "image/avatar/av8.png";
    document.getElementById('Message').innerHTML = "This is your Avatar!";
    document.getElementById("Message2").innerHTML = "Delete first before changing Avatar";
    console.log("Avatar ID: av8");
}
const av9 = localStorage.getItem('av9');
if (av9) {
    document.getElementById("imageAvatar").src = "image/avatar/av9.png";
    document.getElementById('Message').innerHTML = "This is your Avatar!";
    document.getElementById("Message2").innerHTML = "Delete first before changing Avatar";
    console.log("Avatar ID: av9");
}
const av10 = localStorage.getItem('av10');
if (av10) {
    document.getElementById("imageAvatar").src = "image/avatar/av10.png";
    document.getElementById('Message').innerHTML = "This is your Avatar!";
    document.getElementById("Message2").innerHTML = "Delete first before changing Avatar";
    console.log("Avatar ID: av10");
}
const av11 = localStorage.getItem('av11');
if (av11) {
    document.getElementById("imageAvatar").src = "image/avatar/av11.png";
    document.getElementById('Message').innerHTML = "This is your Avatar!";
    document.getElementById("Message2").innerHTML = "Delete first before changing Avatar";
    console.log("Avatar ID: av11");
}
const av12 = localStorage.getItem('av12');
if (av12) {
    document.getElementById("imageAvatar").src = "image/avatar/av12.png";
    document.getElementById('Message').innerHTML = "This is your Avatar!";
    document.getElementById("Message2").innerHTML = "Delete first before changing Avatar";
    console.log("Avatar ID: av12");
}

/*-- Remove ID from localStorage + Refresh button --*/

function deleteItem() {
    localStorage.removeItem("av1");
    localStorage.removeItem('av2');
    localStorage.removeItem('av3');
    localStorage.removeItem('av4');
    localStorage.removeItem('av5');
    localStorage.removeItem('av6');
    localStorage.removeItem('av7');
    localStorage.removeItem('av8');
    localStorage.removeItem('av9');
    localStorage.removeItem('av10');
    localStorage.removeItem('av11');
    localStorage.removeItem('av12');
    document.getElementById("imageAvatar").src = "image/blank-avatar.png";
    console.log("Avatar has been removed.");
}

/*-- Refresh button --*/

$(document).ready(function() {
    $("button").click(function() {
        window.location = window.location.pathname;
    });
});
