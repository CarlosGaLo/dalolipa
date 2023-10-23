<script setup>
import MainGalery from "../components/MainGalery.vue";
import PromoLeft from "../components/PromoLeft.vue";
import PromoRight from "../components/PromoRight.vue";

const infoForForPromoRight = {
  titleSpa: "Magic on stage",
  textSpa:
    "<p>Un show de magia musical para el disfrute de todo tipo de público, se mezcla magia clásica con magia moderna y fresca.</p><p>Podrán ver apariciones de palomas, manipulación de cartas, como se puede retroceder en el tiempo, una bonita historia de amor contada en forma de sombras chinescas y levitaciones sorprendentes, todo esto y mucho más. ¡No puedes perdértelo!</p>",
  youUrl:
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/ndGVoyM4QJM?si=C_Rw5tK5eWRp0N5Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
};

const infoForPromoLeft = {
  titleSpa: "Close Up",
  textSpa:
    "<p>Casi una hora y 20 mnts de magia de cerca, show divertido para un grupo reducido de personas ( 60 max)  en el que el mago divierte y fascina a su público con tan solo una baraja y unas pocas monedas. El show es hablado y muy participativo (se puede hacer tanto en inglés como en español)</p>",
  imgUrl: "/pro_images/David_Navarro_12.jpg",
};

const infoForForPromoRight2 = {
  titleSpa: "Close Up Arround",
  textSpa:
    "<p>La magia, a centímetros del espectador, el mago se moverá entre las personas del local, acercándose a los grupos y haciendo que participen en sus efectos, una magia muy improntum con objetos cotidianos. </p>",
  imgUrl: "/pro_images/David_Navarro_67.jpg",
};
</script>

<template>
  <section class="overflow-cap">
    <MainGalery class="main-galery" />
    <PromoRight :info="infoForForPromoRight"></PromoRight>
    <PromoLeft :info="infoForPromoLeft"></PromoLeft>
    <PromoRight :info="infoForForPromoRight2"></PromoRight>
  </section>
</template>

<style scoped>
.main-galery {
  overflow: hidden;
}
</style>
