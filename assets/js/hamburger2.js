const navBtn = document.querySelector(".hamburger-button");
const navBox = document.querySelector(".menu-mobile-nav-menu-container");

navBtn.addEventListener("click", () => {
  navBox.classList.toggle("toggle-nav-box");
});
