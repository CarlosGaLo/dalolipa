<script setup>
import { ref } from "vue";
const allGalery = ref([]);
const actualPhoto = ref("");
let initial = 0;
let final = 9;
let isShowing = ref(false);

function setupGallery(photoNumber, init) {
  for (let i = init; i < photoNumber; i++) {
    allGalery.value[i] = "/pro_images/David_Navarro_" + i + ".jpg";
  }
}
setupGallery(final, initial);

function showMore() {
  initial += 10;
  final += 10;
  setupGallery(final, initial);
  console.log(final);
}

function showImage(image) {
  actualPhoto.value = image;
  isShowing.value = true;
  console.log(isShowing.value);
}

function hideImage(){
  isShowing.value = false;
}
</script>

<template>
  <article>
    <section class="top-margin"></section>

    <section @click="hideImage()" class="black-background" v-if="isShowing">
      <img class="fullscreen-img" :src="actualPhoto" alt="" />
    </section>

    <section class="galery-margin" v-if="allGalery">
      <img
        @click="showImage(image)"
        v-for="(image, index) in allGalery"
        :src="allGalery[index]"
        alt=""
      />
    </section>

    <div class="change-pag">
      <button @click="showMore()">showMore</button>
    </div>
  </article>
</template>

<style scoped>
.top-margin {
  width: 100vw;
  height: 160px;
}

.black-background{
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.850);
  z-index: 950;
}

.fullscreen-img{
  position: fixed;
  top: 20px;
  height: 90vh;
  z-index: 1000;
}
.galery-margin {
  width: 90vw;
  margin-left: 5vw;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  align-items: center;
  justify-content: space-evenly;
}

.galery-margin img {
  height: 300px;
  object-fit: cover;
}

.change-pag {
  text-align: center;
  margin: 10px 100px;
}

.change-pag button {
  text-transform: uppercase;
  width: 100px;
  text-align: center;
  margin: 100px;
}
</style>
