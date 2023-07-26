
function openSlideMenu(){
  document.getElementById('side-menu').style.width = '250px';
}

function closeSlideMenu(){
  document.getElementById('side-menu').style.width = '0';
}

var i = 0;  // start point
var images = []

/*
images[0] = "img/2020TShirtJoe.png";
images[1] = "img/2020TShirtLinda.png";
images[2] = "img/2020TShirtJan.png";
images[3] = "img/2020TShirtDenny.png";
images[4] = "img/2020TShirtGolf.png";
images[5] = "img/2020TShirt.png";
*/
/*
images[0] = "img/2021TShirtJoe.png";
images[1] = "img/2021TShirtBevJan_Monica.png";
images[2] = "img/2021TShirtLisa.png";
images[3] = "img/2021TShirtMicheal.png";
*/
images[0] = "img/Sweatshirt_A_300x300.png";
images[1] = "img/Sweatshirt_B_300x300.png";
images[2] = "img/Sweatshirt_C_300x300.png";
images[3] = "img/YourName_300x300.png";


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

function showSelect () {

    var chosenSize = document.getElementById('SizeOption');
    var chosenName = document.getElementById('NameInput');
    var ShowPrice = document.getElementById('PriceOption');
    var PIndex = -1;

    
    var nameChosen = chosenName.value

    console.log('You have chosen size ['+ chosenSize.value + ']');

    console.log('You have chosen Name [' + nameChosen + '] length ' + nameChosen.length);


     //nameChosen = chosenName.options[chosenName.selectedIndex].text;

    //console.log ('The price index is ' + PriceIndex);

      // show selected value 
    //console.log('You have chosen ' + chosenName[0].value)
    
    //console.log('You have chosen Name [' + nameChosen + '] length ' + nameChosen.length);
    //for (var k in chosenSize){
      // console.log('You have chosen '+ chosenSize[k].value);
      //console.log('You have chosen size ['+ chosenSize.value + ']');
   // }
    //for (const option of ShowPrice.options) {
      //console.log ('The price option value is ' + option.value);
     
     if (document.getElementById('SizeOption').value == 'Small $35.00 USD') {
    //      block of code to be executed if condition1 is true

        PIndex = 0;
    
      
      } else if (document.getElementById('SizeOption').value == 'Medium $35.00 USD') {
        //  block of code to be executed if the condition1 is false and condition2 is true
        PIndex = 0;
      } else if (document.getElementById('SizeOption').value == 'Large $35.00 USD') {
        PIndex = 0;
      } else if (document.getElementById('SizeOption').value == 'X Large $40.00 USD') {
        PIndex = 1;
      } else if (document.getElementById('SizeOption').value =='2X Large $40.00 USD') {
        PIndex = 1;
      } else if (document.getElementById('SizeOption').value == '3X Large $40.00 USD') {
        PIndex = 1;
      } else if (document.getElementById('SizeOption').value == '4X Large $45.00 USD') {
        PIndex = 2;
      }

    
    
  
    if (document.getElementById('NameInput').value.length > 0) {
        PIndex = PIndex + 3;
        //  block of code to be executed if the condition1 is false and condition2 is false
    }

    document.getElementById("PriceOption").selectedIndex = PIndex

    //  for (const option of document.getElementById("PriceOption").options. {
    //    console.log('price length' + option.value.length)
    //  }

    
    console.log ('The price index is ' + PIndex);
  };

