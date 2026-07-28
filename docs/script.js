
//  let buttons = document.querySelectorAll(".destination");
let images = document.querySelectorAll(".imagesOfAbout");
let cards = document.querySelectorAll(".destination-card");


images[0].style.opacity = "1";


setTimeout(function () {
    images[1].style.opacity="1";
    
}, 2000);
setTimeout(function () {
    images[2].style.opacity="1";
}, 3000);
setTimeout(function () {
    images[3].style.opacity="1";
}, 4000);



// starting me sirf pehla card show
setTimeout(function () {
   cards[0].style.opacity = "1";
}, 2000);



// 2 second baad card 2 show
setTimeout(function () {

    cards[0].style.opacity = "0";
    cards[1].style.opacity = "1";

}, 4000);


// 4 second baad card 3 show
setTimeout(function () {

    cards[1].style.opacity = "0";
    cards[2].style.opacity = "1";

}, 6000);


// 6 second baad card 4 show
setTimeout(function () {

    cards[2].style.opacity = "0";
    cards[3].style.opacity = "1";

}, 8000);

