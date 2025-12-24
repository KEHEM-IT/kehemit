<!-- components/CustomCursor.vue -->
<template>
    <div class="custom-cursor-wrapper" v-if="!isHidden && !isTouchDevice">
        <!-- Tail segments -->
        <div 
            v-for="(segment, index) in tailSegments" 
            :key="index"
            class="cursor-tail"
            :style="{
                left: `${segment.x}px`,
                top: `${segment.y}px`,
                opacity: segment.opacity,
                transform: `translate(-50%, -50%) scale(${segment.scale})`
            }"
        />

        <!-- Main cursor ring -->
        <div class="cursor-ring" :class="{ 'cursor-hover': isPointer }" :style="{
            left: `${cursorX}px`,
            top: `${cursorY}px`
        }" />
        
        <!-- Cursor dot -->
        <div class="cursor-dot" :style="{
            left: `${cursorDotX}px`,
            top: `${cursorDotY}px`
        }" />
        
    </div>
</template>

<script setup lang="ts">
import { useCursor } from '../composables/useCursor'

const { cursorX, cursorY, cursorDotX, cursorDotY, isPointer, isHidden, tailSegments, isTouchDevice } = useCursor()
</script>

<style scoped lang="scss">
.custom-cursor-wrapper {
    pointer-events: none;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
}

.cursor-tail {
    position: fixed;
    width: 6px;
    height: 6px;
    background: radial-gradient(circle, rgba(147, 197, 253, 0.9), rgba(96, 165, 250, 0.3));
    border-radius: 50%;
    transition: opacity 0.3s ease;
}

.cursor-ring {
    position: fixed;
    width: 40px;
    height: 40px;
    border: 2px solid rgba(147, 197, 253, 0.9);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    backdrop-filter: blur(1px) brightness(1.2);
    transition: width 0.3s ease, height 0.3s ease;
}

.cursor-ring.cursor-hover {
    width: 60px;
    height: 60px;
    border-color: rgba(147, 197, 253, 0.9);
}

.cursor-dot {
    position: fixed;
    width: 8px;
    height: 8px;
    background: linear-gradient(135deg, #93c5fd, #60a5fa);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 10px rgba(147, 197, 253, 0.5);
}
</style>