<script setup>
defineProps(["person", "quote"]);
</script>

<template>
  <section class="grey-box">
    <div class="grey-center-box">
      <h3>{{ person }}</h3>
      <blockquote>
        <h2 class="quote">{{ quote }}</h2>
      </blockquote>
    </div>
  </section>
</template>


<style>
.grey-box {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 20vh;
  overflow-x: hidden;
  background: #f5f5f5;
}

.grey-center-box {
  width: 40vw;
  height: 10vh;
  margin: auto;
  margin-top: 5vh;
}

.grey-center-box * {
  margin: auto;
}

.quote {
  font-style: italic;
  border-left: 5px solid #ddd;
  padding: 0 15px;
  font-size: 32px;
}
</style>