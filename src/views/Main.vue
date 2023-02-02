<script setup>
import Navbar from "../components/Navbar.vue";
import BigVideo from "../components/BigVideo.vue";
import GreySection from "../components/GreySection.vue";
import PromoLeft from "../components/PromoLeft.vue";
import PromoRight from "../components/PromoRight.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <section class="overflow-cap">
    <Navbar />
    <BigVideo />
    <GreySection
      person="Odín Padredetodos"
      quote="Grande David, desde aquí a Madrid"
    />
    <promo-left />
    <promo-right />
    <Footer />
  </section>
</template>

<style>
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