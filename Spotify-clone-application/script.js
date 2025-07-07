"use strict";
const songs = [
    {
        title: "Hanuman_Chalisa",
        artist: "Krishna",
        src: "assets/songs/hanuman_chalisa.mp3",
        cover: "assets/songs/hanuman.jpg",
    },
    {
        title: "Theme_Of_Kalki",
        artist: "Narayanan",
        src: "assets/songs/theme_of_kalki.mp3",
        cover: "assets/songs/kalki.jpg",
    },
    {
        title: "Mawaa_Enthaina",
        artist: "Thaman",
        src: "assets/songs/mawaa_enthaina.mp3",
        cover: "assets/songs/gk.jpg",
    },
    {
        title: "Samayama",
        artist: "Narayanan",
        src: "assets/songs/samayama.mp3",
        cover: "assets/songs/hn.jpg",
    },
    {
        title: "Ta_Takkara",
        artist: "Narayanan",
        src: "assets/songs/ta_takkara_takka_takkara.mp3",
        cover: "assets/songs/kalki.jpg",
    },
    {
        title: "Ramana_Aei",
        artist: "Thaman",
        src: "assets/songs/ramana_aei.mp3",
        cover: "assets/songs/gk.jpg",
    },
    {
        title: "Odiyamma",
        artist: "Santhosh",
        src: "assets/songs/odiyamma.mp3",
        cover: "assets/songs/hn.jpg",
    },
    {
        title: "Raghunandana",
        artist: "GowraHari",
        src: "assets/songs/raghunandana.mp3",
        cover: "assets/songs/hanuman.jpg",
    },
    {
        title: "Dum_Masala",
        artist: "Thaman",
        src: "assets/songs/dum_masala.mp3",
        cover: "assets/songs/gk.jpg",
    },
    {
        title: "Glimpse",
        artist: "Santhosh",
        src: "assets/songs/glimpse_song.mp3",
        cover: "assets/songs/hn.jpg",
    },
    {
        title: "Hanuman_Chalisa",
        artist: "Krishna",
        src: "assets/songs/hanuman_chalisa.mp3",
        cover: "assets/songs/hanuman.jpg",
    },
    {
        title: "Theme_Of_Kalki",
        artist: "Narayanan",
        src: "assets/songs/theme_of_kalki.mp3",
        cover: "assets/songs/kalki.jpg",
    },
    {
        title: "Mawaa_Enthaina",
        artist: "Thaman",
        src: "assets/songs/mawaa_enthaina.mp3",
        cover: "assets/songs/gk.jpg",
    },
    {
        title: "Samayama",
        artist: "Narayanan",
        src: "assets/songs/samayama.mp3",
        cover: "assets/songs/hn.jpg",
    },
    {
        title: "Hanuman_Chalisa",
        artist: "Krishna",
        src: "assets/songs/hanuman_chalisa.mp3",
        cover: "assets/songs/hanuman.jpg",
    },
    {
        title: "Theme_Of_Kalki",
        artist: "Narayanan",
        src: "assets/songs/theme_of_kalki.mp3",
        cover: "assets/songs/kalki.jpg",
    },
];
// Toggle theme
function themechange() {
    document.body.classList.toggle("dark-theme");
}
// DOM elements with type assertions
const albumGrid = document.getElementById("albumGrid");
const audio = new Audio();
let currentSongIndex = 0;
const playerCover = document.getElementById("playercover");
const playerTitle = document.getElementById("playertitle");
const playerArtist = document.getElementById("playerartist");
const playBtn = document.getElementById("playBtn");
const progressBar = document.getElementById("progressBar");
const volumeBar = document.getElementById("volumeBar");
// Render each song card
songs.forEach((song, index) => {
    const card = document.createElement("div");
    card.className = "album-card";
    card.innerHTML = `
    <img src="${song.cover}" alt="${song.title}">
    <h4>${song.title}</h4>
    <p>${song.artist}</p>
    <button onclick="playSong(${index})"> ▶ Play</button>
  `;
    albumGrid.appendChild(card);
});
// Load & play song
function playSong(index) {
    currentSongIndex = index;
    const song = songs[index];
    audio.src = song.src;
    audio.play();
    playerCover.src = song.cover;
    playerTitle.textContent = song.title;
    playerArtist.textContent = song.artist;
    playBtn.textContent = "⏸️";
}
// Play and pause song
function PlayandPause() {
    if (audio.paused) {
        audio.play();
        playBtn.textContent = "⏸️";
    }
    else {
        audio.pause();
        playBtn.textContent = "▶️";
    }
}
// Next song
function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playSong(currentSongIndex);
}
// Previous song
function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    playSong(currentSongIndex);
}
// Progress bar update
audio.addEventListener("timeupdate", () => {
    progressBar.value = ((audio.currentTime / audio.duration) * 100 || 0).toString();
});
progressBar.addEventListener("input", () => {
    audio.currentTime = (parseFloat(progressBar.value) / 100) * audio.duration;
});
// Volume control
volumeBar.addEventListener("input", () => {
    audio.volume = parseFloat(volumeBar.value);
});
