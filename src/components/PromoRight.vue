<script setup></script>

<template>
  <section class="orderer orderer-inv overflow-cap">
    <div class="standar-text">
      <p>
        If you have a dinner gale, you can call Christian Bale or to a magician.
        The advantaje to call a magician is there will be magic, the advantaje
        of call Christian Bale is to have a Batman. But if you call Batman,
        Gotham will be un protected. Think about it and choose freely.
      </p>
    </div>
    <div class="standar-text main-text">
      <h2>Espectáculos y shows a medida</h2>
      <p>
        Si tiene una cena de gala se puede llevar una cigala o un mago. La
        ventaja del mago es que sorprende más que la cigala y que es más
        memorable. La ventaja de la cigala es que se come. Decida por usted
        mismo.
      </p>
      <a
        class="a-btn"
        href="https://es.wikipedia.org/wiki/Magia"
        target="_blank"
        >Saber más</a
      >
    </div>
    <div class="big-img-rgt">
      <img
        class="img-david-navarro-right"
        src="../assets/fotos_web/recorte_2.png"
        alt="mago David Navarro"
      />
    </div>
  </section>
</template>

<style>
.img-david-navarro-right {
  position: relative;
  right: -100px;
  max-width: 500px;
  min-width: 300px;
  height: 550px;
  object-fit: cover;
  transition: all 0.5s ease-out 0.2s;
  transition: all 0.5s ease-in;
}
.img-david-navarro-right:hover {
  transition: all 0.5s ease-out;
  height: 600px;
  right: 0;
}

.big-img-rgt {
  width: 30%;
  max-width: 500px;
  min-width: 300px;
}

@media screen and (max-width: 1350px) {
  .img-david-navarro-right {
    position: relative;
    right: 0;
    max-width: 500px;
    min-width: 300px;
    height: 550px;
    object-fit: cover;
    transition: all 0.5s ease-out 0.2s;
    transition: all 0.5s ease-in;
  }
  .img-david-navarro-right:hover {
    transition: all 0.5s ease-out;
    height: 600px;
  }

  .orderer-inv {
    flex-direction: column-reverse;
  }
}
</style>