// const MenuBtn = document.querySelector("#menu-img");
// const CloseBtn = document.querySelector("#close-img");
// const NavList = document.querySelector("#nav-list");

const MenuBtn = document.getElementById("menu-img");
const CloseBtn = document.getElementById("close-img");
const NavList = document.getElementById("nav-list");

MenuBtn.addEventListener("click", () => {
  NavList.classList.toggle("show-sidebar");
});

CloseBtn.addEventListener("click", () => {
  NavList.classList.remove("show-sidebar");
});
