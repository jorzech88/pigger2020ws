
// Set the date we're counting down to
var countDownDate = new Date("Sep 25, 2021 15:00 GMT -5").getTime();

//var countDownDate = new Date("Sep 26, 2020 15:00 GMT -5").getTime();
//var countDownDate = new Date("December 5, 2019 11:40 GMT -6").getTime();
( function calcCountDown() {


  var now = new Date().getTime();

  var toEvent = countDownDate - now;

 
  if (toEvent > 0) {

    // Time calculations for days, hours, minutes and seconds

    var days = Math.floor(toEvent / (1000 * 60 * 60 * 24));
    var hours = Math.floor((toEvent % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((toEvent % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((toEvent % (1000 * 60)) / 1000);

    if (days == 1) {
    var txtdays = " day ";
    } else {
    var txtdays = " days ";
    }
 
    if (hours == 1) {
    var txthours = " hour ";
    } else {
    var txthours = " hours ";
    }
    if (minutes == 1) {
    var txtminutes = " minute ";
    } else {;
    var txtminutes = " minutes "
    }
    if (seconds == 1) {
    var txtseconds = " second ";
    } else {
    var txtseconds = " seconds ";
    }
  
    
    // Output the result in an element with id="countdownjs"
   
    
   document.getElementById("countdownjs").innerHTML = "Count Down to Pigger 2021! <br>"
     + days + txtdays + hours + txthours + minutes + txtminutes + seconds + txtseconds;

    // set timeout to 15 seconds - it's just minutes now but make sure to change this if it goes back to seconds
    setTimeout(calcCountDown, 1000);

  } else {
    document.getElementById("countdownjs").innerHTML = ""
  
  }
  
  }) ();



