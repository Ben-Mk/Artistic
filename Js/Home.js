const humbergerMenu = document.querySelector(".nav-bar-links");
const humbergerBtn = document.querySelector(".nav-bar-humberger-btn");
const humbergerIcon = document.getElementsByTagName("i");

const navigationBar = document.querySelector(".nav");
const scrollWatcher = document.createElement("div");

scrollWatcher.setAttribute("data-scroll-watcher", "");
navigationBar.before(scrollWatcher);

const navObserver = new IntersectionObserver((entries) => {
  navigationBar.classList.toggle("sticking", !entries[0].isIntersecting);
});

navObserver.observe(scrollWatcher);

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
