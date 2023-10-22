<script setup></script>

<template>
    <section class="box-position">
        <form class="flex-form">
            <div class="left-side">
                <label for="">Nombre</label>
                <input type="text" class="input">
                <label for="">E-mail</label>
                <input type="email" class="input">
            </div>
            <label for="">¿Qué me quieres decir, cacho mierda?</label>
            <textarea name="body" rows="20" cols="100" class="extended input"/>
        </form>
    </section>
</template>

<style scoped>
.box-position {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.flex-form {
    width: 400px;
    height: 450px;
    margin-right: 8%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: flex-start;
    padding: 0 20px;
    border-radius: 5%;
}

.extended {
    height: 200px;
    resize: none;
}

.left-side {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.input{
    width: 100%;
    margin-bottom: 20px;
    border-radius: 5px;
    border: 1px solid rgb(88, 12, 12);
}
</style>