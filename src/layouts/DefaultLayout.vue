<template>
    <div>
        <Navs />
        <main class="main">
            <slot />
        </main>
        <Footer />
    </div>
</template>

<script setup lang="ts">
import Hero from './Hero.vue';
import Navs from './Navs.vue';
import Footer from './Footer.vue'
</script>
