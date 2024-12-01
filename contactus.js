offerClose = document.querySelector(".offer-close");
offerClose.addEventListener('click',function(){
    offerClose.parentElement.style.display="none"
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











