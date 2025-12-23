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
                            <h1>Let's&nbsp;<span class="innerHighlights">Talk</span> &nbsp;Ideas</h1>
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
                                <span class="innerHighlights">Explore</span> &nbsp;Our Work
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
                    <span class="outline-text">5+</span>
                    <span class="exd-title">Years Experience</span>
                    <span class="exd-details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
                        quas.
                        Quam maxime quo
                    </span>
                </div>
                <!-- BUTTON -->
                <div class="exd-button">
                    <span class="outline-text">50+</span>
                    <span class="exd-title">Completed Projects</span>
                    <span class="exd-details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
                        quas.
                        Quam maxime quo
                    </span>
                </div>
                <!-- BUTTON -->
                <div class="exd-button">
                    <span class="outline-text">99+</span>
                    <span class="exd-title">Years Experience</span>
                    <span class="exd-details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
                        quas.
                        Quam maxime quo
                    </span>
                </div>
            </section>
        </section>
        <br><br><br>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import Swiper from 'swiper';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';

const swiperContainer = ref<HTMLDivElement | null>(null);
const isExdVisible = ref(false);

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