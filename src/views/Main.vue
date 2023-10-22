<script setup>
import Navbar from "../components/Navbar.vue";
import BigVideo from "../components/BigVideo.vue";
import GreySection from "../components/GreySection.vue";
import PromoLeft from "../components/PromoLeft.vue";
import PromoRight from "../components/PromoRight.vue";
import Footer from "../components/Footer.vue";
import MainGalery from "../components/MainGalery.vue";

const infoForPromoLeft = {
  titleSpa: "ESPECTÁCULOS",
  titleEng: "SHOWS",
  textSpa:
    "<p>La magia es un arte efímero que debes visitar en directo.</p><p>¡Descubre los espectáculos de los que vas a disfrutar!</p>",
  textEng:
    "<p>Magic is an ephemeral art that you must visit live.</p><p>Discover the shows you're going to enjoy!</p>",
  imgUrl: "/pro_images/David_Navarro_06.jpg",
};

const infoForPromoRight = {
  titleSpa: "CONTÁCTAME",
  titleEng: "CONTACT ME",
  textSpa:"<p>¡No dudes en preguntarme!</p><p>Aquí tienes mi teléfono, whatsapp o e-mail.</p>",
  textEng:"<p>Don't hesitate to ask me!</p><p>Take my phone number, whatsapp or e-mail if you want.</p>",
  imgUrl: "/pro_images/David_Navarro_52.jpg",
};

</script>

<template>
  <section class="overflow-cap">
    <MainGalery />
    <PromoLeft :info="infoForPromoLeft" />
    <PromoRight :info="infoForPromoRight" />
  </section>
</template>

<style scoped>
.full-page {
  width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
  background: rgb(73, 71, 71);
  background: linear-gradient(
    225deg,
    rgba(73, 71, 71, 1) 0%,
    rgba(121, 97, 97, 1) 100%
  );
}

.full-frame {
  width: 100vw;
  height: 90vh;
  margin-top: 5vh;
}

.main-title {
  color: white;
}
</style>
