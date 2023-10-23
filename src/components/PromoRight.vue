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
  <section class="orderer orderer-inv overflow-cap">
    <article class="texts">
      <div v-if="props.info?.titleEng" class="standar-text main-text">
        <h2>{{ props.info.titleEng }}</h2>
        <p v-html="props.info.textEng"></p>
      </div>
      <div v-if="props.info?.titleSpa" class="standar-text main-text">
        <h2>{{ props.info.titleSpa }}</h2>
        <p v-html="props.info.textSpa"></p>
      </div>
    </article>

    <div v-if="props.info?.imgUrl" class="big-img-rgt">
      <img
        class="img-david-navarro-right"
        :src="props.info.imgUrl"
        alt="mago David Navarro"
      />
    </div>
    <div v-if="props?.info?.youUrl" v-html="props?.info?.youUrl"></div>
  </section>
</template>

<style scoped>
.orderer {
  margin: 100px 100px 100px 0;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  gap: 50px;
}
.img-david-navarro-right {
  width: 500px;
  height: 550px;
  object-fit: cover;
  background-color: blue;
}
/* .img-david-navarro-right:hover {
  transition: all 0.5s ease-out;
  height: 600px;
  right: 0;
} */

.standar-text {
  width: 25vw;
  min-width: 200px;
  font-size: 20px;
}

.texts {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
}

@media screen and (max-width: 1300px) {
  .standar-text {
    font-size: 18px;
  }

  .orderer {
    margin: 100px 0;
  }

  .img-david-navarro-right {
    width: 350px;
    height: 500px;
    object-fit: cover;
    transition: all 0.5s ease-in;
  }
}

@media screen and (max-width: 905px) {
  .texts {
    align-items: flex-start;
  }
  .standar-text {
    font-size: 16px;
    text-align: center;
  }

  .orderer {
    flex-direction: column-reverse;
  }
}

@media screen and (max-width: 500px) {
  .texts {
    align-items: flex-start;
  }

  .main-text {
    font-size: 18px;
  }
  .standar-text {
    font-size: 14px;
    text-align: center;
  }

  .orderer {
    flex-direction: column-reverse;
  }

  .img-david-navarro-right {
    width: 250px;
    height: 350px;
    object-fit: cover;
    transition: all 0.5s ease-in;
  }
}

@media screen and (max-width: 450px) {
  .texts {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 30px;
  }
}
</style>
