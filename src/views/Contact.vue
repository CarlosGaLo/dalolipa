<script setup>
import Navbar from '../components/Navbar.vue';
import ContactForm from '../components/ContactForm.vue'

</script>

<template>
    <section class="contact-section">
        <Navbar></Navbar>
        <ContactForm></ContactForm>
    </section>
</template>


<style scoped>
.contact-section {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-image: url("../assets/fotos_web/mirando_cartas_byn.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 -700px;
}
</style>