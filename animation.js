//======Toggle-menue=====
const menu = document.querySelector(".menu");
const menuTogle = document.querySelector(".menu-toggle");

menuTogle.addEventListener("click", () => {
  menu.classList.toggle("active");
  menuTogle.classList.toggle("open");
});

// ====== Scroll-reveal ======
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => revealObserver.observe(el));
