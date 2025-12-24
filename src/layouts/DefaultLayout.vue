<template>
    <div>
        <Navs />
        <Hero />

        <main class="main">
            <slot />
        </main>

    </div>
</template>

<script setup lang="ts">
import Hero from './Hero.vue';
import Navs from './Navs.vue';
</script>
