<!-- src/layouts/Hero.vue -->
<template>
    <div>
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
            <!-- CTA -->
            <aside class="cta-section">
                <div class="swiper" ref="swiperContainer">
                    <div class="swiper-wrapper hero-text-breakpoints">
                        <div class="swiper-slide">
                            <h1>Let's Talk<p class="innerHighlights">Ideas</p>
                            </h1>
                            <h3>
                                Connect with our team and start turning your vision into a powerful digital solution.
                            </h3><br>
                            <RouterLink to="/">
                                <button type="button" class="btn-primary btn-lg btn-rounded">
                                    Contact Us
                                </button>
                            </RouterLink>
                        </div>

                        <div class="swiper-slide">
                            <h1>
                                <p class="innerHighlights">Explore</p> &nbsp;Our Work
                            </h1>
                            <h3>
                                Discover the innovative services and solutions we build to accelerate your business.
                            </h3><br>
                            <RouterLink to="/">
                                <button type="button" class="btn-primary btn-lg btn-rounded">
                                    Explore !
                                </button>
                            </RouterLink>
                        </div>

                        <div class="swiper-slide">
                            <h1>Get&nbsp;<span class="innerHighlights">Expert</span> &nbsp;Help</h1>
                            <h3>
                                Receive professional guidance to choose the right technology and strategy for your
                                project.
                            </h3><br>
                            <RouterLink to="/">
                                <button type="button" class="btn-primary btn-lg btn-rounded">
                                    Get Consultation
                                </button>
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </aside>
            <!-- EXPERIENCE DETAILS -->
            <section class="exd" :class="{ 'exd-visible': isExdVisible }">
                <!-- BUTTON -->
                <div class="exd-button">
                    <span class="outline-text">{{ count1 }}+</span>
                    <span class="exd-title">Years Experience</span>
                    <span class="exd-details">
                        Delivering innovative IT solutions with a proven track record of excellence and reliability.
                    </span>
                </div>
                <!-- BUTTON -->
                <div class="exd-button">
                    <span class="outline-text">{{ count2 }}+</span>
                    <span class="exd-title">Completed Projects</span>
                    <span class="exd-details">
                        Successfully completed diverse projects across industries — from startups to enterprises.
                    </span>
                </div>
                <!-- BUTTON -->
                <div class="exd-button">
                    <span class="outline-text">{{ count3 }}+</span>
                    <span class="exd-title">Happy Clients</span>
                    <span class="exd-details">
                        Building lasting partnerships through quality, trust and exceptional IT support.
                    </span>
                </div>
            </section>
        </section>
        <br><br><br>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';
import Swiper from 'swiper';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';

const swiperContainer = ref<HTMLDivElement | null>(null);
const isExdVisible = ref(false);
const hasCounted = ref(false);

// Counter values
const count1 = ref(0);
const count2 = ref(0);
const count3 = ref(0);

// Target values
const target1 = 5;
const target2 = 50;
const target3 = 99;

// Animate counter function
const animateCounter = (
    counterRef: any,
    target: number,
    duration: number = 2000
) => {
    const startTime = Date.now();
    const startValue = 0;

    const updateCounter = () => {
        const currentTime = Date.now();
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);

        counterRef.value = Math.floor(startValue + (target - startValue) * easeOutQuart);

        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            counterRef.value = target;
        }
    };

    updateCounter();
};

// Watch for visibility changes to trigger counting
watch(isExdVisible, (newValue) => {
    if (newValue && !hasCounted.value) {
        hasCounted.value = true;

        // Start counting animations with slight delays for stagger effect
        setTimeout(() => animateCounter(count1, target1, 1500), 100);
        setTimeout(() => animateCounter(count2, target2, 2000), 200);
        setTimeout(() => animateCounter(count3, target3, 2000), 300);
    } else if (!newValue) {
        // Reset counters when scrolling back to top
        hasCounted.value = false;
        count1.value = 0;
        count2.value = 0;
        count3.value = 0;
    }
});

const handleScroll = () => {
    const scrollPosition = window.scrollY || window.pageYOffset;

    // Show .exd when user scrolls down (more than 50px from top)
    // Hide .exd when user returns to the top (less than 50px)
    if (scrollPosition > 50) {
        isExdVisible.value = true;
    } else {
        isExdVisible.value = false;
    }
};

onMounted(() => {
    // Initialize Swiper
    if (swiperContainer.value) {
        new Swiper(swiperContainer.value, {
            modules: [Pagination, Navigation, Autoplay],
            loop: true,
            speed: 1000,

            autoplay: {
                delay: 5000,
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

            effect: 'slide',
        });
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    // Clean up scroll event listener
    window.removeEventListener('scroll', handleScroll);
});
</script>