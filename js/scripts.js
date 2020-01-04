
function openSlideMenu(){
  document.getElementById('side-menu').style.width = '250px';
}

function closeSlideMenu(){
  document.getElementById('side-menu').style.width = '0';
}

var i = 0;  // start point
var images = []

images[0] = "img/2020TShirtJoe.png";
images[1] = "img/2020TShirtLinda.png";
images[2] = "img/2020TShirtJan.png";
images[3] = "img/2020TShirtDenny.png";
images[4] = "img/2020TShirtGolf.png";
images[5] = "img/2020TShirt.png";

window.onload = changeImg
//
function changeImg(){

    document.slide.src = images[i];

}
//
window.onload = changeImg;
function prev(){
    if (i > 0)  {
        document.slide.src = images[i - 1];
        i--;
    } else {
        document.slide.src = images[images.length - 1];
        i = images.length - 1;
    }   
}

function next(){
    if (i < images.length - 1)  {
        document.slide.src = images[i + 1];
        i++;
    } else {
        document.slide.src = images[0];
        i = 0;
    }   
}
