<template>
    <v-app-bar app elevation="4" height="60">
        <v-spacer></v-spacer>
        <v-btn text @click="$router.push('/')">Home</v-btn>
        <v-btn text @click="$router.push('/projects')">Projects</v-btn>
        <v-btn text @click="$router.push('/about')">About</v-btn>
    </v-app-bar>
</template>

<script>
    export default {
        name: "AppBar"
    };
</script>

<style scoped></style>



body: "<p>teste pedro 04/09 após edição</p><p></p><p>#contato</p><p>Nome: Marcela Camardella</p><p>Email:
    marcela@teste.com</p><p>Telefone: 21 99999-9289 / (21) 99999-9282 / 55 21 99999-9289</p><p>Observações: teste teste
    teste teste</p><p>#fim</p>"
