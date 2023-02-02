<script setup></script>

<template>
  <section class="orderer">
    <div class="big-img">
      <img
        class="img-david-navarro-left"
        src="../assets/fotos_web/recorte_1.png"
        alt="mago David Navarro"
      />
    </div>
    <div class="standar-text main-text">
      <h2>Espectáculos y shows</h2>
      <p>
        Vive la magia de vivir la magia mientras vives la magia viviendo la
        magia de vivir, porque para vivir hace falta magia y para maguear hace
        falta vivir la magia de la magia de vivir.
      </p>
    </div>
    <div class="standar-text">
      <p>
        Con diez cañones por banda, viento a popa a toda vela, no corta el mar,
        sino vuela, un velero VERGAntín.
      </p>
    </div>
  </section>
</template>

<style>
.orderer {
  height: 40vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  overflow: hidden;
}
.orderer div {
  width: 30%;
}

.big-img {
  width: 30vw;
  max-width: 500px;
  min-width: 300px;
  display: inline;
}

.img-david-navarro-left {
  transform-origin: 100% 100%;
  position: relative;
  max-width: 500px;
  min-width: 300px;
  right: 100px;
  width: 90%;
  object-fit: cover;
  transition: width 0.5s ease-in 0.2s;
}

.img-david-navarro-left:hover {
  transition: width 0.5s ease-in;
  width: 100%;
}

.standar-text {
  width: 25vw;
  min-width: 200px;
}
</style>