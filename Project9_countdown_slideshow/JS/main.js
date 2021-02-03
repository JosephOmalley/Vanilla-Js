var slideIndex = 1;                                                         //declare global variable "slideindex" 
showSlides(slideIndex);                                                     //create global function "showSlides" 

function plusSlides(n) {                                                    //attach nav arrows to main.js      
  showSlides(slideIndex += n);
}

function currentSlide(n) {                                                  //attach dots to main.js
  showSlides(slideIndex = n);
}

function showSlides(n) {                                                    //this function connects arrows and dots                                               
  var i;                                                                    //declare varible "i" local to function showslides 
  var slides = document.getElementsByClassName("mySlides");                 //declare local varible to HTML class "myslides"
  var dots = document.getElementsByClassName("dot");                        //declare local varible to HTML class "dot"
  if (n > slides.length) {slideIndex = 1}                                   //if statement slide dots 
  if (n < 1) {slideIndex = slides.length}                                   //if n is less than 1 make slide index = to slide length 
  for (i = 0; i < slides.length; i++) {                                     //this ++ slides that are less than 0
      slides[i].style.display = "none";                                     //displays slide
  }
  for (i = 0; i < dots.length; i++) {                                       //controls slide arrows 
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
function countdown() {                                                          //function to control countdown
    var seconds = 10;                                                           //set seconds to 10
    function tick() {                                                           //tick seconds            
        seconds = seconds -1;                                                   //decrements seconds by 1 
        timer.innerHTML = seconds;                                              //inserts seconds to the inner html id "timer"
        setTimeout(tick, 1000);                                                 // sets tick to = 1000 milliseconds
    if(seconds == -1){                                                          //loop to check if time is complete
        alert("Time's up!");                                                    //pop up alert if time is up

    }
    }
    tick()                                                                      //starts tick function again
    
}