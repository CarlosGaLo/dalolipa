<script setup></script>

<template>
  <section class="footer overflow-cap">
    <div class="footer-texts">
      <p>newsletter</p>
      <p>política de privacidad</p>
      <p>política de cookies</p>
      <p>términos y condiciones</p>
      <p>devoluciones y anulaciones</p>
    </div>
    <div class="footer-logos">
      <a href=""
        ><img
          src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png"
          alt="loyo youtube"
      /></a>
      <a href=""
        ><img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
          alt="logo instagram"
      /></a>
      <a href=""
        ><img
          src="https://assets.stickpng.com/images/5cb78678a7c7755bf004c14c.png"
          alt="logo tiktok"
      /></a>
    </div>
  </section>
</template>

<style>
.footer {
  background-color: #f5f5f5;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
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
</style>