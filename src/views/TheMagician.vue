<script setup></script>

<template>
  <article class="background">
    <section class="top-margin"></section>
    <section class="two-columns">
      <div>
        <img class="image" src="/David_Navarro_26_transparent.png" alt="" />
      </div>
      <div>
        <h1 class="center-text">David Navarro, ilusión y pasión</h1>
        <p>
          Nacido en Málaga, desde pequeño empieza su carrera artística, más de
          15 años en el mundo de la magia y trabajado en todos los hoteles de la
          costa del sol. Su don es la constancia, perseverancia Y una
          impresionante capacidad que tiene para ejercer la magia. Es un gran
          luchador. Una persona fuerte con ideales y principios. Tiene gran
          hambre de futuro y muchas ganas de salir adelante.
        </p>
        <p>
          Reconocido como mago por el C.I.M (círculo de ilusionistas malagueños)
          y por la S.E.I (sociedad española de ilusionismo).
        </p>
        <p>
          Proviene de un linaje político de grandes magos internacionales.
          Discípulos del mago de reconocimiento mundial Dani Daortiz que a su
          vez es discípulo de Juan Tamariz.
        </p>
        <p>Ganador de varios premios mágicos nacionales:</p>
        <p>1º premio quedada mágica andaluza 2014</p>
        <p>1º premio festival de magia en Albolote 2014</p>
        <p>2º premio de escena en el festival de cabra 2015</p>
        <p>1º premio nacional galapagar 2013</p>
        <p>
          Con sus diferentes estilos de espectáculos, encaja en cualquier tipo
          de situación.
        </p>
        <p>Tiene disponibilidad para moverse donde sea y coche propio</p>
        <p>Un nivel de inglés b2 (se comunica bastante bien)</p>
        <p>Está abierto a cualquier tipo de preguntas.</p>
      </div>
    </section>
  </article>
</template>

<style scoped>
.background {
  background-color: #fafafa;
}
.center-text {
  text-align: center;
  font-size: 30px;
}
.top-margin {
  width: 100vw;
  height: 160px;
}

.two-columns {
  width: 100vw;
  height: 755px;
  display: flex;
  justify-content: space-evenly;
}

.two-columns div {
  overflow: hidden;
  width: 35%;
}

.image {
  position: absolute;
  object-fit: cover;
  width: 100%;
}
</style>
