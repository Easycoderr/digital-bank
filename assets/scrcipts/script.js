const menuBtn = document.getElementById("hamburger-menu-btn");
const menuNavEl = document.getElementById("mobile-menu-nav");

menuBtn.addEventListener("click", (e) => {
  menuNavEl.classList.toggle("hidden");
  if (menuNavEl.classList.contains("hidden")) {
    e.target.setAttribute("src", "assets/images/icon-hamburger.svg");
  } else {
    e.target.setAttribute("src", "assets/images/icon-close.svg");
  }
});
menuNavEl.addEventListener("click", () => {
  menuNavEl.classList.add("hidden");
});
