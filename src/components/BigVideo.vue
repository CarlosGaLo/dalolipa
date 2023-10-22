<script setup>
function activateAudio() {
  const video = document.querySelector(".header-video");
  video.muted = !video.muted;
  const speaker = document.querySelector(".audio");
  speaker.classList.toggle("muted");
}
</script>

<template>
  <section class="big-video overflow-cap">
    <video class="header-video" autoplay muted loop>
      <source src="http://www.cosmosrol.com/david-navarro/chaman_trailer.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div class="audio" @click="activateAudio">
      <img class="audio-img" src="https://svgsilh.com/svg/304749.svg" alt="audio activado" />
    </div>
  </section>
</template>

<style>
.big-video {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: grey;
}

.header-video {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  object-fit: cover;
}

.audio {
  background-color: rgb(255, 0, 0);
  border-radius: 50%;
  position: absolute;
  top: 90vh;
  right: 3vw;
  z-index: 1;
  width: 50px;
  height: 50px;
  transition: background-color 0.5s ease;
}

.audio:hover {
  background-color: rgb(255, 255, 255);
  cursor: pointer;
  transition: background-color 0.5s ease;
}

.audio-img {
  z-index: 2;
  position: relative;
  top: 6px;
  left: 6px;
  width: 35px;
  height: 35px;
}

.muted {
  transition: background-color 0.5s ease;
  background-color: rgb(43, 43, 43);
}

.muted:hover {
  transition: background-color 0.5s ease;
  background-color: rgb(43, 43, 43);
}
</style>