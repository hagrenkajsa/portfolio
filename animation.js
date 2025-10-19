//======Toggle-menue=====
const menu = document.querySelector(".menu");
const menuTogle = document.querySelector(".menu-toggle");

menuTogle.addEventListener("click", () => {
  menu.classList.toggle("active");
  menuTogle.classList.toggle("open");
});
