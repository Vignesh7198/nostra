// slider = document.getElementById("slider");

// slides = document.querySelectorAll('.slide');

// next = document.getElementById("next");

// slideNumber = 0;

slides = document.querySelectorAll(".slide")
rightButton = document.getElementById("rightButton")
leftButton = document.getElementById("leftButton")

slideNumber = 0

offerClose = document.querySelector(".offer-close");
offerClose.addEventListener('click',function(){
    offerClose.parentElement.style.display="none"
})

rightButton.addEventListener('click', function () {

   if (slideNumber == 0) {
      console.log("inside SlideNumber0")
      slides[0].style.transform = "translateX(-100%)"
      slides[1].style.transform = "translateX(-100%)"
      slides[2].style.transform = "translateX(-100%)"
      slideNumber++
   }

   else if (slideNumber == 1) {
      console.log("inside SlideNumber1")

      slides[0].style.transform = "translateX(-200%)"
      slides[1].style.transform = "translateX(-200%)"
      slides[2].style.transform = "translateX(-200%)"
      slideNumber++
   }

   else if (slideNumber == 2) {
      console.log("inside SlideNumber2")
      slides[2].style.transform = "translateX(0%)"
      slides[1].style.transform = "translateX(0%)"
      slides[0].style.transform = "translateX(0%)"
      slideNumber = 0
   }
})

leftButton.addEventListener('click', function () {
   if (slideNumber == 0) {
      console.log("inside SlideNumber0")
      slides[0].style.transform = "translateX(-200%)"
      slides[1].style.transform = "translateX(-200%)"
      slides[2].style.transform = "translateX(-200%)"
      slideNumber++
   }

   else if (slideNumber == 1) {
      console.log("inside SlideNumber1")

      slides[0].style.transform = "translateX(-100%)"
      slides[1].style.transform = "translateX(-100%)"
      slides[2].style.transform = "translateX(-100%)"
      slideNumber++
   }

   else if (slideNumber == 2) {
      console.log("inside SlideNumber2")
      slides[2].style.transform = "translateX(0%)"
      slides[1].style.transform = "translateX(0%)"
      slides[0].style.transform = "translateX(0%)"
      slideNumber = 0
   }
})


menuIcon = document.getElementById('menuicon')
sideBar = document.getElementById('sidebar')
closeIcon = document.getElementById('close-icon')
menuIcon.addEventListener('click', function () {
   sideBar.style.right = 0

})

closeIcon.addEventListener('click', function () {
   sideBar.style.right = "-50%";

})

hearts = document.querySelectorAll(".heart")

hearts.forEach((heart)=>{
   heart.addEventListener('click',
   
      function(event){
         console.log('test');
         if( event.target.classList.contains('love')){
            event.target.classList.remove('love')
            event.target.src='./Images/heart.png'
         }
         else{
         event.target.classList.add('love')
         event.target.src='./Images/love.png'
      }
      
      
      }
   )
})












