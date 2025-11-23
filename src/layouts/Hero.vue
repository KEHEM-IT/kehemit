<!-- src/layouts/Hero.vue -->
<template>
    <section class="hero-section-container">
        <aside class="hero-section">
            <!-- SHAPE-1 -->
            <span class="shape shape-1">
                <img src="../assets/svgs/Shape-1.svg" alt=""></img>
            </span>
            <!-- SHAPE-2 -->
            <span class="shape shape-2">
                <img src="../assets/svgs/Shape-2.svg" alt=""></img>
            </span>
            <!-- SHAPE-3 -->
            <span class="shape shape-3">
                <img src="../assets/svgs/Shape-3.svg" alt=""></img>
            </span>
            <!-- SHAPE-4 -->
            <span class="shape shape-4">
                <img src="../assets/svgs/Shape-4.svg" alt=""></img>
            </span>
            <!-- Elipsis -->
            <span class="shape elipsis">
                <img src="../assets/svgs/Elipsis.svg" alt=""></img>
            </span>

            <!-- Elipsis -->
            <span class="shape elipsis-2">
                <img src="../assets/svgs/Elipsis.svg" alt=""></img>
            </span>
        </aside>
        <aside class="cta-section">
            <div class="swiper" ref="swiperContainer">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <h1>Your Reliable Technology Partner</h1>
                        <h3>
                            We design and deliver software solutions and web solutions that turn your vision into
                            reality — with quality you can trust.
                        </h3>
                    </div>
                    <div class="swiper-slide">
                        <h1>Innovation at Every Step</h1>
                        <h3>
                            From concept to deployment, we build cutting-edge solutions tailored to your business
                            needs.
                        </h3>
                    </div>
                    <div class="swiper-slide">
                        <h1>Quality That Exceeds Expectations</h1>
                        <h3>
                            Our commitment to excellence ensures your project is delivered on time and beyond
                            standards.
                        </h3>
                    </div>
                </div>
            </div>
        </aside>

    </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Swiper from 'swiper';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const swiperContainer = ref<HTMLDivElement | null>(null);

onMounted(() => {
    if (swiperContainer.value) {
        new Swiper(swiperContainer.value, {
            modules: [Pagination, Navigation, Autoplay],
            loop: true,
            speed: 800,

            autoplay: {
                delay: 3500,
                disableOnInteraction: false,
            },

            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            // Optional (recommended for text sliders)
            effect: 'slide',
        });
    }
});
</script>
