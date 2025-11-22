<template>
    <div>
        <Navs />
        <Hero />

        <main class="main">
            <slot />
        </main>

        <footer class="text-center text-gray-500 py-4 my-53 border-t">
            © 2025 My Company
        </footer>
    </div>
</template>

<script setup lang="ts">
import Hero from './Hero.vue';
import Navs from './Navs.vue';
</script>
