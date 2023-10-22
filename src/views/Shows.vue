<script setup>
import MainGalery from "../components/MainGalery.vue";
import PromoLeft from "../components/PromoLeft.vue";
import PromoRight from "../components/PromoRight.vue";

const infoForForPromoRight = {
  titleSpa: "Magic on stage",
  textSpa: "<p>Magia en escenario que te cagas de buena.</p>",
  youUrl:
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/ndGVoyM4QJM?si=C_Rw5tK5eWRp0N5Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
};

const infoForPromoLeft = {
  titleSpa: "Close Up",
  textSpa:
    "<p>Te destruyo la mente con mi magia poderosa que te mata y te mueres.</p>",
  imgUrl: "/pro_images/David_Navarro_12.jpg",
};

const infoForForPromoRight2 = {
  titleSpa: "Close Up Arround",
  textSpa: "<p>Más muerte y destrucción</p>",
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
