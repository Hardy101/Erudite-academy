var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";

  setTimeout(showSlides, 10000); // Change image every 2 seconds
}

function openNav(){
  let sideBar = document.getElementById("sidebar");
  sideBar.style.width = "250px";
}
function closeNav(){
  let sideBar = document.getElementById("sidebar");
  sideBar.style.width = "0px";
}

function openNav(){
let sdb = document.getElementById("sidebar")
sdb.style.width = "300px";
}
function closeNav(){
document.getElementById("sidebar").style.width = "0px";
}
function msg(){
document.getElementById("msg").style.display = "block";
}
function msgClose(){
document.getElementById("msg").style.display = "none";
}

var acc =
document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++)
{
  acc[i].addEventListener("click",function(){
    this.classList.toggle("active");
    var panel =
  this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    }
    else{panel.style.maxHeight = panel.scrollHeight + "px";}
  });
}