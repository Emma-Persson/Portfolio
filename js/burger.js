const burger = document.querySelector(".burger");
const nav = document.querySelector(".navtop");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});
