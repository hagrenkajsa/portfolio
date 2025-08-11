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

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("nav a[href^='#']");
  const homeLink = document.querySelector('nav a[href="#home"]');
  const projectsSection = document.querySelector('#projects');

  function activateMenuLink() {
    let scrollY = window.scrollY;
    let projectsTop = projectsSection.offsetTop - 150;

    // Om vi är ovanför Projects → markera Home
    if (scrollY < projectsTop) {
      navLinks.forEach(link => link.classList.remove("active"));
      homeLink.classList.add("active");
      return;
    }

    // Annars → kör vanliga logiken
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 150;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", activateMenuLink);
  activateMenuLink(); // Kör direkt vid laddning
});
