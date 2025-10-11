<template>
    <div>
        <header class="p-4 bg-gray-800 text-white flex justify-between">
            <h1 class="font-bold text-lg">My Vue App</h1>
            <nav>
                <RouterLink to="/" class="mr-4">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
            </nav>
        </header>

        <main class="p-6">
            <slot />
        </main>

        <footer class="text-center text-gray-500 py-4 border-t">
            © 2025 My Company
        </footer>
    </div>
</template>

<script setup lang="ts"></script>
