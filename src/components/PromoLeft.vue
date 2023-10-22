<script setup>
const props = defineProps({
  info: {
    titleSpa: String,
    titleEng: String,
    textSpa: String,
    textEng: String,
    imgUrl: String,
    youUrl: String,
  },
});
</script>

<template>
  <section class="orderer">
    <div v-if="props.info?.imgUrl" class="big-img-lft">
      <img
        class="img-david-navarro-left"
        :src="props.info.imgUrl"
        alt="mago David Navarro"
      />
    </div>
    <div v-if="props.info?.youUrl"></div>
    <section class="texts">
      <div v-if="props.info?.titleSpa" class="standar-text">
        <h2>{{ props.info.titleSpa }}</h2>
        <p v-html="props.info.textSpa"></p>
      </div>
      <div v-if="props.info?.titleEng" class="standar-text">
        <h2>{{ props.info.titleEng }}</h2>
        <p v-html="props.info.textEng"></p>
      </div>
    </section>
  </section>
</template>

<style scoped>
.orderer {
  margin: 100px 25px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  gap: 50px;
}

.img-david-navarro-left {
  width: 500px;
  height: 550px;
  object-fit: cover;
  transition: all 0.5s ease-in;
}

/* .img-david-navarro-left:hover {
  transition: all 0.5s ease-in;
  height: 600px;
  right: 0;
} */

.standar-text {
  width: 25vw;
  min-width: 200px;
  font-size: 20px;
}

.a-btn {
  margin-top: 260px;
}

.texts {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: row;
  gap: 20px;
}

@media screen and (max-width: 1300px) {
  .standar-text {
    font-size: 18px;
  }

  .img-david-navarro-left {
    width: 350px;
    height: 500px;
    object-fit: cover;
    transition: all 0.5s ease-in;
  }
}

@media screen and (max-width: 905px) {
  .standar-text {
    font-size: 16px;
    text-align: center;
  }
  .orderer {
  margin: 100px 0;
}

  .orderer {
    flex-direction: column;
  }

  .texts {
    align-items: flex-start;
  }
}

@media screen and (max-width: 500px) {
  .main-text {
    font-size: 18px;
  }
  .standar-text {
    font-size: 14px;
    text-align: center;
  }

  .img-david-navarro-left {
    width: 250px;
    height: 350px;
    object-fit: cover;
    transition: all 0.5s ease-in;
  }
}
</style>
