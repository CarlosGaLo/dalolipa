<script setup>
import { ref } from "vue";

const fadeBlackBox = ref(true);

// window.addEventListener("scroll", function () {
//   if (window.pageYOffset != 0) {
//     fadeBlackBox.value = true;
//   } else {
//     fadeBlackBox.value = false;
//   }
// });
</script>

<template>
  <section :class="{ navbar: true, 'fixed-color': fadeBlackBox, 'overflow-cap': true }">
    <div class="navbar-left">
      <a href="/">
        <img class="logo-img" src="../assets/fotos_web/imagen_corporativa/RGB/PNG/DN-long-rojo.png"
          alt="Logo David Navarro" /></a>
      <a href="" class="magic-button">PRÓXIMOS EVENTOS</a>
      <a href="" class="magic-button">CONTRATACIÓN</a>
    </div>
    <div class="burger-menu">
      <hr />
      <hr />
      <hr />
    </div>
  </section>
</template>

<style>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
}

.fixed-color {
  background-color: rgba(255, 186, 186, 0.35);
  transition: background-color 0.5s ease-in;
}

.logo-img {
  width: calc(1080px / 3.5);
  height: calc(358px / 3.5);
  margin: 8px 24px 0px 16px;
  object-fit: contain;
}

.magic-button {
  margin: 4px;
  background-color: rgba(0, 0, 0, 0.37);
  color: white;
  padding: 8px 24px;
  border-radius: 24px;
  text-decoration: none;
}

.magic-button:visited {
  margin: 4px;
  background-color: rgba(0, 0, 0, 0.37);
  color: white;
  padding: 8px 24px;
  border-radius: 24px;
  text-decoration: none;
}

.navbar-left {
  display: flex;
  align-items: center;
  background-color: transparent;
}

.burger-menu {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin-right: 64px;
  background-color: transparent;
}

.burger-menu hr {
  width: 34px;
  height: 6px;
  border-radius: 10px;
  border: none;
  background-color: red;
  margin-bottom: 4px;
}
</style>