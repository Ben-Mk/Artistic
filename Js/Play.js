//Header Transition
console.log("hello world");
const navigationBar = document.querySelector(".nav");
const scrollWatcher = document.createElement("div");

scrollWatcher.setAttribute("data-scroll-watcher", "");
navigationBar.before(scrollWatcher);

const navObserver = new IntersectionObserver((entries) => {
  navigationBar.classList.toggle("sticking", !entries[0].isIntersecting);
});

navObserver.observe(scrollWatcher);

//Varibles
const playerContainer = document.querySelector(".player");
const playerSong = document.querySelector(".player-info-track-name");
const playerName = document.querySelector(".player-info-track-artist");
const progressBarContainer = document.querySelector(
  ".player-deck-progress-container"
);
const progressBar = document.querySelector(".player-deck-progress-bar");
const playBtn = document.querySelector(".master");
const previousBtn = document.querySelector(".previous");
const nextBtn = document.querySelector(".next");
const audio = document.querySelector("#player-audio");
const playlistCard = document.querySelectorAll(".playlist-card");
const humbergerBtn = document.querySelector(".nav-bar-humberger-btn");
const humbergerMenu = document.querySelector(".nav-bar-links");
let songContainers = Array.from(playlistCard);
let cards = Array.from(document.getElementsByClassName("play-icon"));
console.log(cards);
const gif = document.querySelector(".player-gif");

//Humbager Menu

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

//Search bar
function search() {
  let filter = document.getElementById("search-bar").value.toUpperCase();

  let item = document.querySelectorAll(".playlist-card");

  let l = document.getElementsByTagName("h3");

  for (let i = 0; i <= l.length; i++) {
    let a = "";
    a = item[i].getElementsByTagName("h3")[0];
    let value = a.innerHTML || a.innerText || a.textContent;

    if (value.toUpperCase().indexOf(filter) > -1) {
      item[i].style.display = "";
    } else {
      item[i].style.display = "none";
    }
  }
}

//Song Titles and Artists
const songs = [
  "I Feel Everything",
  "Ijo Laba Laba",
  "Mind Your Business",
  "Mona Lisa",
  "Jail House Rock",
  "Soup",
  "Jeans",
  "Mount Everest",
  "Ready Teddy",
  "Gorilla",
  "Homicide",
  "Views",
  "Night School",
  "Your Love",
  "Rhumba",
  "Seconds",
  "Squid Game",
  "Sungba",
  "Diner Cover",
  "No Woman No Cry",
];
const names = [
  "Cara Delevingne",
  "Crayon",
  "Darassa",
  "Dominic Fike",
  "Elvis Presley",
  "Marioo",
  "Jessie Reyez",
  "Labrinth",
  "Little Richard",
  "Little Simz",
  "Logic",
  "Noga Erez",
  "Nyashinski",
  "Pj Morton",
  "TT",
  "Rihanna",
  "Ameno",
  "Asake",
  "Giant Rooks",
  "Wizkid",
];

songContainers.forEach((element, i) => {
  element.getElementsByClassName("playlist-card-name")[0].innerText = songs[i];
  element.getElementsByClassName("playlist-card-artist")[0].innerText =
    names[i];
});
//Keep track of songs and names
let songIndex = 0;
let nameIndex = 0;

//Initially load song info to DOM
loadSong(songs[songIndex], names[nameIndex]);

//Update song details
function loadSong(song, name) {
  playerSong.innerText = song;
  playerName.innerText = name;
  audio.src = `Songs/${song}.mp3`;
}

//Play the song
function playSong() {
  playerContainer.classList.add("play");
  playBtn.querySelector("i.fa-solid").classList.remove("fa-play");
  playBtn.querySelector("i.fa-solid").classList.add("fa-pause");
  audio.play();
  cards[songIndex].classList.remove("fa-play");
  cards[songIndex].classList.add("fa-pause");
  gif.style.visibility = "visible";
}

//Pause the song
function pauseSong() {
  playerContainer.classList.remove("play");
  playBtn.querySelector("i.fa-solid").classList.add("fa-play");
  playBtn.querySelector("i.fa-solid").classList.remove("fa-pause");
  audio.pause();
  cards[songIndex].classList.remove("fa-pause");
  cards[songIndex].classList.add("fa-play");
  gif.style.visibility = "hidden";
}

function playAudio() {
  cards.forEach((element) => {
    element.classList.remove("fa-play");
    element.classList.add("fa-pause");
  });
}

function pauseAudio() {
  cards.forEach((element) => {
    element.classList.add("fa-play");
    element.classList.remove("fa-pause");
  });
}

//Playlist songs
cards.forEach((element) => {
  element.addEventListener("click", (e) => {
    const icon = e.target;
    console.log(icon);
    if (element.classList.contains("fa-play")) {
      pauseAudio();
      gif.style.visibility = "visible";
      element.classList.remove("fa-play");
      element.classList.add("fa-pause");
      songIndex = parseInt(icon.id);
      nameIndex = parseInt(icon.id);
      songIndex--;
      nameIndex--;
      console.log(songIndex, nameIndex);
      loadSong(songs[songIndex], names[nameIndex]);

      playBtn.querySelector("i.fa-solid").classList.remove("fa-play");
      playBtn.querySelector("i.fa-solid").classList.add("fa-pause");
      audio.play();
    } else {
      gif.style.visibility = "hidden";
      element.classList.remove("fa-pause");
      element.classList.add("fa-play");
      songIndex = parseInt(icon.id);
      nameIndex = parseInt(icon.id);
      songIndex--;
      nameIndex--;
      console.log(songIndex, nameIndex);
      loadSong(songs[songIndex], names[nameIndex]);

      playBtn.querySelector("i.fa-solid").classList.remove("fa-pause");
      playBtn.querySelector("i.fa-solid").classList.add("fa-play");
      audio.pause();
    }
  });
});

//Previous song
function prevSong() {
  songIndex--;
  nameIndex--;

  if (songIndex < 0 && nameIndex < 0) {
    songIndex = songs.length - 1;
    nameIndex = names.length - 1;
  }
  loadSong(songs[songIndex], names[nameIndex]);
  playSong();

  pauseAudio();
  cards[songIndex].classList.remove("fa-play");
  cards[songIndex].classList.add("fa-pause");
}

//Next song
function nextSong() {
  songIndex++;
  nameIndex++;

  if (songIndex > songs.length - 1 && nameIndex > songs.length - 1) {
    songIndex = 0;
    nameIndex = 0;
  }
  loadSong(songs[songIndex], names[nameIndex]);
  playSong();

  pauseAudio();
  cards[songIndex].classList.remove("fa-play");
  cards[songIndex].classList.add("fa-pause");
}

//Update Progress Bar
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progessPercent = (currentTime / duration) * 100;
  progressBar.style.width = `${progessPercent}%`;
}

//Update Progress Bar Time
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
}
//EVENT LISTENERS
//Play and Pause
playBtn.addEventListener("click", () => {
  const isPlaying = playerContainer.classList.contains("play");

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

//Previous and Next
previousBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);

//Audio time update
audio.addEventListener("timeupdate", updateProgress);

//Progress time update
progressBarContainer.addEventListener("click", setProgress);
//Audio end
audio.addEventListener("ended", nextSong);
