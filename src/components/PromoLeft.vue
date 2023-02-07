<script setup></script>

<template>
  <section class="orderer">
    <div class="big-img-lft">
      <img
        class="img-david-navarro-left"
        src="../assets/fotos_web/recorte_1.png"
        alt="mago David Navarro"
      />
    </div>
    <div class="standar-text">
      <h2>Experiencia inolvidable</h2>
      <p>
        La gracia de la magia es que esté pasando algo que hace cinco minutos
        parecía imposible.
      </p>
      <a
        class="a-btn"
        href="https://es.wikipedia.org/wiki/Magia"
        target="_blank"
        >Saber más</a
      >
    </div>
    <div class="standar-text">
      <p>
        The magic in magic is to see something that looks impossible five
        minutes before.
      </p>
    </div>
  </section>
</template>

<style>
.orderer {
  height: 40vh;
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  overflow: hidden;
}

.big-img-lft {
  width: 30%;
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
  height: 550px;
  object-fit: cover;
  transition: all 0.5s ease-in;
}

.img-david-navarro-left:hover {
  transition: all 0.5s ease-in;
  height: 600px;
  right: 0;
}

.standar-text {
  width: 25vw;
  min-width: 200px;
}

.a-btn {
  margin-top: 260px;
}

@media screen and (max-width: 1350px) {
  .orderer {
    height: auto;
    margin: 64px 0;
    flex-direction: column;
  }

  .img-david-navarro-left{
    right: 0;
  }

  .img-david-navarro-left:hover {
    transition: all 0.5s ease-in;
    height: 600px;
    right: 0;
  }
}
</style>