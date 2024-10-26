
let slideIndex = 0;
let autoSlideTimeout;

function closeModal() {
  document.getElementById("benimModelim").style.display = "none"; 
  document.querySelector(".slideshow-container").style.display = "block"; 
  showSlides(); 
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("resimslayt");

 
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }

  slideIndex++;

  if (slideIndex > slides.length) { slideIndex = 1; } 
  slides[slideIndex - 1].style.display = "block"; 

  autoSlideTimeout = setTimeout(showSlides, 10000); 
}


function plusSlides(n) {
  clearTimeout(autoSlideTimeout); 
  slideIndex += n;

  let slides = document.getElementsByClassName("resimslayt");


  if (slideIndex > slides.length) { slideIndex = 1; }
  if (slideIndex < 1) { slideIndex = slides.length; }
  
  showSlides(); 
}

function prevSlide() {
  plusSlides(-1); 
}

function nextSlide() {
  plusSlides(1); 
}

window.onload = function() {
  document.querySelector(".slideshow-container").style.display = "none"; 

}; 
