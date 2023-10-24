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
  imgUrl: "/pro_images/David_Navarro_6.jpg",
  nameURL: "/shows"
};

const infoForPromoRight = {
  titleSpa: "CONTÁCTAME",
  titleEng: "CONTACT ME",
  textSpa:"<p>¡No dudes en preguntarme!</p><p>Aquí tienes mi teléfono, whatsapp o e-mail.</p>",
  textEng:"<p>Don't hesitate to ask me!</p><p>Take my phone number, whatsapp or e-mail if you want.</p>",
  imgUrl: "/pro_images/David_Navarro_52.jpg",
  nameURL: "/contact",
};

</script>

<template>
  <section class="overflow-cap">
    <MainGalery />
    <PromoLeft class="separator" :info="infoForPromoLeft" />
    <PromoRight :info="infoForPromoRight" />
  </section>
</template>

<style scoped>
.separator{
  margin-top: 180px;
}
</style>
