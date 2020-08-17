<template>
    <v-app-bar app elevation="4">
        <v-spacer></v-spacer>
        <v-btn text @click="$router.push('/')">Home</v-btn>
        <v-btn text @click="$router.push('/about')">About</v-btn>
    </v-app-bar>
</template>

<script>
    export default {
        name: "AppBar"
    }
</script>

<style scoped>

</style>