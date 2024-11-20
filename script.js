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




