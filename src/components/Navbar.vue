<script setup>
import { ref } from "vue";
import RRSS from "../components/RRSS.vue";

const fadeBlackBox = ref(true);
const isBurger = ref(false);

function showBurgerMenu() {
  isBurger.value = !isBurger.value;
}
</script>

<template>
  <section
    @click="showBurgerMenu()"
    :class="{ 'filter-show': isBurger, 'filter-hidden': !isBurger }"
  />
  <section
    :class="{ navbar: true, 'fixed-color': fadeBlackBox, 'overflow-cap': true }"
  >
    <div class="navbar-left">
      <a href="/">
        <img
          class="logo-img"
          src="../assets/fotos_web/imagen_corporativa/RGB/PNG/DN-long-rojo.png"
          alt="Logo David Navarro"
      /></a>
    </div>
    <div @click="showBurgerMenu" class="burger-menu">
      <hr :class="{ 'cross-up': isBurger, static: !isBurger }" />
      <hr :class="{ 'cross-down': isBurger, static: !isBurger }" />
      <hr v-if="!isBurger" />
    </div>
    <section class="floating-menu">
      <div :class="{ 'menu-show': isBurger, 'menu-hidden': !isBurger }">
        <RRSS class="rrss"></RRSS>
        <ul>
          <li>
            <router-link @click="showBurgerMenu()" to="/">Portada</router-link>
          </li>
          <li>
            <router-link @click="showBurgerMenu()" to="/shows"
              >Espectáculos</router-link
            >
          </li>
          <li>
            <router-link @click="showBurgerMenu()" to="/Galery"
              >Galería</router-link
            >
          </li>
          <li>
            <router-link @click="showBurgerMenu()" to="/magician"
              >El Mago</router-link
            >
          </li>
          <li>
            <router-link @click="showBurgerMenu()" to="/">Contacto</router-link>
          </li>
        </ul>
      </div>
    </section>
  </section>
</template>

<style>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 200;
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
.burger-menu:hover {
  cursor: pointer;
  border-style: unset;
}

.burger-menu:active {
  cursor: pointer;
  border-style: unset;
}

.burger-menu hr {
  width: 25px;
  height: 4px;
  border-radius: 1px;
  border: none;
  background-color: red;
  margin-bottom: 4px;
}

.menu-show {
  position: fixed;
  right: 0%;
  top: 116px;
  background: rgba(255, 186, 186, 0.35);
  width: 300px;
  height: 400px;
  transition: all 0.25s ease-in-out;
}

.menu-hidden {
  position: fixed;
  right: -300px;
  top: 116px;
  background: rgba(255, 186, 186, 0.35);
  width: 300px;
  height: 0;
  transition: all 0.25s ease-in-out;
}

.filter-show {
  background-color: rgba(0, 0, 0, 0.64);
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 100;
  transition: background-color 0.2s ease-in-out;
}

.filter-hidden {
  background-color: rgba(0, 0, 0, 0);
  position: fixed;
  width: 0;
  height: 0;
  top: 0;
  left: 0;
  z-index: 100;
  transition: background-color 0.2s ease-in-out;
}

.floating-menu {
  position: absolute;
}

ul {
  list-style-type: none;
}

li {
  text-align: center;
  font-size: 24px;
  margin: 16px;
}

ul li * {
  color: white;
}

ul li *:hover {
  color: blue;
}

.rrss {
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.rrss * {
  width: 80%;
  height: 20%;
}

.static {
  transition: all 0.3s ease-in-out;
}

.cross-up {
  transform: rotate(-45deg) translate(5px, -6px);
  transition: all 0.3s ease-in-out;
}

.cross-down {
  transform: rotate(-135deg);
  transition: all 0.3s ease-in-out;
}



@media screen and (max-width: 500px) {
  .logo-img{
    width: 200px;
  }
}
</style>
