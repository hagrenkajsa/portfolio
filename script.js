const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const closeButton = document.querySelector('.closeButton');



//Back to top button function

window.onscroll = function() {
    const backToTopButton = document.getElementById("backToTop");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

document.getElementById("backToTop").onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
};


// script.js
document.addEventListener("DOMContentLoaded", () => {
    fetch("about.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("about-section").innerHTML = data;
      });
  
    fetch("projects.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("projects-section").innerHTML = data;
      });
  });



//Home - back to top

document.getElementById("scrollToTop").addEventListener("click", function(e) {
    e.preventDefault(); // stoppar vanlig länk-navigation
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
