<script setup>
import RRSS from "../components/RRSS.vue";
</script>

<template>
  <section class="footer overflow-cap">
    <!-- <div class="footer-texts">
      <p>newsletter</p>
      <p>política de privacidad</p>
      <p>política de cookies</p>
      <p>términos y condiciones</p>
      <p>devoluciones y anulaciones</p>
    </div> -->
    <RRSS></RRSS>
    <p class="sign">Created by Jarko</p>
  </section>
</template>

<style>
.footer {
  background-color: #f5f5f5;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 300px;
}

.footer-texts {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}

.footer div a img {
  width: 64px;
  height: 64px;
  object-fit: contain;
}

.footer-logos {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  gap: 40px;
}

.sign{
  font-size: 14px;
}
</style>