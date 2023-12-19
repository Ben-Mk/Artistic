const humbergerMenu = document.querySelector(".nav-bar-links");
const humbergerBtn = document.querySelector(".nav-bar-humberger-btn");
const humbergerIcon = document.getElementsByTagName("i");

humbergerBtn.addEventListener("click", () => {
  if (humbergerMenu.classList.contains("appear")) {
    humbergerMenu.classList.remove("appear");
    humbergerMenu.classList.add("disappear");
    humbergerBtn.querySelector("i.fa-solid").classList.remove("fa-xmark");
    humbergerBtn.querySelector("i.fa-solid").classList.add("fa-bars");
  } else {
    humbergerMenu.classList.remove("disappear");
    humbergerMenu.classList.add("appear");
    humbergerBtn.querySelector("i.fa-solid").classList.add("fa-xmark");
    humbergerBtn.querySelector("i.fa-solid").classList.remove("fa-bars");
  }
});
