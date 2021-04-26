const burger = document.querySelector(".burger");
const nav = document.querySelector("#nav");
const navLinks = document.querySelectorAll(".li");
const bo = document.querySelector(".b");
const overlay = document.querySelector(".overlay");

const navSlide = () => {
  console.log(nav);

  burger.addEventListener("click", () => {
    overlay.classList.toggle("over");
    nav.classList.toggle("nav-active");
  });

  overlay.addEventListener("click", () => {
    overlay.classList.remove("over");
    nav.classList.remove("nav-active");
  });
};

navSlide();
