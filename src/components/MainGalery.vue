<script setup>
import { ref, computed } from "vue";

const MAIN_URL = "/pro_images/David_Navarro_";
const imageNumber = ref(29);
let hasTime = false;

const currentImage = computed(() => MAIN_URL + imageNumber.value + ".jpg");

function nextImg() {
  console.log(imageNumber.value);
  if (imageNumber.value == 29) {
    imageNumber.value = 65;
  } else if (imageNumber.value == 65) {
    imageNumber.value = 48;
  } else if (imageNumber.value == 48) {
    imageNumber.value = 71;
  } else if (imageNumber.value == 71) {
    imageNumber.value = 16;
  } else if (imageNumber.value == 16) {
    imageNumber.value = 29;
  } else {
    imageNumber.value = 29;
  }
}

function prevImg() {
  if (imageNumber.value == 29) {
    imageNumber.value = 16;
  } else if (imageNumber.value == 65) {
    imageNumber.value = 29;
  } else if (imageNumber.value == 48) {
    imageNumber.value = 65;
  } else if (imageNumber.value == 71) {
    imageNumber.value = 48;
  } else if (imageNumber.value == 16) {
    imageNumber.value = 71;
  } else {
    imageNumber.value = 29;
  }
}

function autoNextImg() {
  setTimeout(() => {
    nextImg();
    autoNextImg();
  }, 5000);
}
// autoNextImg();
</script>

<template>
  <article class="all-page">
    <img
      class="main-image"
      :src="currentImage"
      alt="Imagen principal de la cabecera"
    />
    <button class="functional-button-left" @click="prevImg" />
    <button class="functional-button-right" @click="nextImg" />
  </article>
</template>

<style scoped>
.all-page {
  height: 100vh;
  width: 100vw;
}
.main-image {
  height: 100vh;
  width: 100vw;
  object-fit: cover;
  opacity: 100;
}

.functional-button-left {
  position: absolute;
  top: 60%;
  left: 3%;
  width: 20px;
  height: 20px;
  background-color: transparent;
  transform: rotate(45deg);
  border: none;
  border-left: 8px solid rgba(185, 185, 185, 0.678);
  border-bottom: 8px solid rgba(185, 185, 185, 0.678);
  border-radius: 0 0 0 20%;
}

.functional-button-right {
  position: absolute;
  top: 60%;
  right: 3%;
  width: 20px;
  height: 20px;
  background-color: transparent;
  transform: rotate(225deg);
  border: none;
  border-left: 8px solid rgba(185, 185, 185, 0.678);
  border-bottom: 8px solid rgba(185, 185, 185, 0.678);
  border-radius: 0 0 0 20%;
}

.functional-button-left:hover,
.functional-button-right:hover {
  cursor: pointer;
  border-left: 8px solid rgba(233, 157, 241, 0.926);
  border-bottom: 8px solid rgba(233, 157, 241, 0.926);
}

.functional-button-left:active,
.functional-button-right:active {
  border-left: 8px solid rgba(160, 114, 219, 0.926);
  border-bottom: 8px solid rgba(160, 114, 219, 0.926);
}

</style>
