<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div
        v-if="$route.name !== 'auth'"
        class="links">
        <RouterLink :to="{ name: 'home' }">Home</RouterLink>
        |
        <RouterLink :to="{ name: 'about' }">About</RouterLink>
    </div>

    <RouterView></RouterView>
</template>

<style lang="scss">
.links {
    display: flex;
    justify-content: center;
}
</style>
