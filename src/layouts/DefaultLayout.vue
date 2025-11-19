<template>
    <div>
        <Navs />

        <main class="p-6">
            <slot />
        </main>

        <footer class="text-center text-gray-500 py-4 border-t">
            © 2025 My Company
        </footer>
    </div>
</template>

<script setup lang="ts">
import Navs from './Navs.vue';
</script>
