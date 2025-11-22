<template>
    <header class="header" :class="{ 'hidden': isScrollingDown, 'visible': isScrollingUp }">
        <nav class="navs">
            <RouterLink to="/" class="logo">
                <img src="../assets/images/Logo.png" alt="KEHEM IT Logo">
                <p>KEHEM IT</p>
            </RouterLink>

            <div class="nav-items">
                <!-- Services Dropdown -->
                <div class="nav-item">
                    <RouterLink class="menu shimmer" to="/services">
                        SERVICES <i class="fa-regular fa-chevron-down"></i>
                    </RouterLink>
                    <ul class="sub-menus">
                        <li>
                            <RouterLink to="/services/web-development">
                                <i class="fa-solid fa-code"></i>
                                <span>Website Development</span>
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/services/custom-software">
                                <i class="fa-solid fa-laptop-code"></i>
                                <span>Custom Software Development</span>
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/services/ai-ml">
                                <i class="fa-solid fa-brain"></i>
                                <span>AI & Machine Learning</span>
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/services/ui-ux">
                                <i class="fa-solid fa-palette"></i>
                                <span>UI/UX Design</span>
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/services/digital-marketing">
                                <i class="fa-solid fa-chart-line"></i>
                                <span>Digital Marketing & Analysis</span>
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/services/maintenance">
                                <i class="fa-solid fa-wrench"></i>
                                <span>Service Maintenance</span>
                            </RouterLink>
                        </li>
                    </ul>
                </div>

                <RouterLink class="menu" to="/case-studies">CASE STUDIES</RouterLink>
                <RouterLink class="menu" to="/portfolio">PORTFOLIO</RouterLink>
                <RouterLink class="menu" to="/about">ABOUT US</RouterLink>

                <!-- Language Dropdown -->
                <div class="nav-item language-selector">
                    <div class="menu">
                        <img :src="currentLanguage === 'en' ? usaFlag : banglaFlag"
                            :alt="currentLanguage === 'en' ? 'English' : 'Bangla'" class="flag-img">
                        {{ currentLanguage.toUpperCase() }}
                        <i class="fa-regular fa-chevron-down"></i>
                    </div>
                    <ul class="sub-menus lang-menu">
                        <li>
                            <a @click.prevent="changeLanguage('en')" href="#">
                                <img :src="usaFlag" alt="English" class="flag-img">
                                <span>English</span>
                            </a>
                        </li>
                        <li>
                            <a @click.prevent="changeLanguage('bn')" href="#">
                                <img :src="banglaFlag" alt="Bangla" class="flag-img">
                                <span>বাংলা</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <button class="cta-button">GET STARTED</button>
            </div>

            <button class="mobile-toggle" @click="toggleMobileMenu" aria-label="Toggle menu">
                <i :class="mobileMenuOpen ? 'fa-solid fa-times' : 'fa-solid fa-bars'"></i>
            </button>
        </nav>

        <!-- Mobile Menu -->
        <div class="mobile-menu" :class="{ 'active': mobileMenuOpen }">
            <!-- Services Mobile -->
            <div class="mobile-nav-item">
                <button class="mobile-menu-header" @click="toggleServicesMenu">
                    SERVICES <i :class="servicesOpen ? 'fa-regular fa-chevron-up' : 'fa-regular fa-chevron-down'"></i>
                </button>
                <ul class="mobile-sub-menus" :class="{ 'active': servicesOpen }">
                    <li>
                        <RouterLink to="/services/web-development" @click="closeMobileMenu">
                            <i class="fa-solid fa-code"></i>
                            <span>Website Development</span>
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/services/custom-software" @click="closeMobileMenu">
                            <i class="fa-solid fa-laptop-code"></i>
                            <span>Custom Software Development</span>
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/services/ai-ml" @click="closeMobileMenu">
                            <i class="fa-solid fa-brain"></i>
                            <span>AI & Machine Learning</span>
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/services/ui-ux" @click="closeMobileMenu">
                            <i class="fa-solid fa-palette"></i>
                            <span>UI/UX Design</span>
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/services/digital-marketing" @click="closeMobileMenu">
                            <i class="fa-solid fa-chart-line"></i>
                            <span>Digital Marketing & Analysis</span>
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/services/maintenance" @click="closeMobileMenu">
                            <i class="fa-solid fa-wrench"></i>
                            <span>Service Maintenance</span>
                        </RouterLink>
                    </li>
                </ul>
            </div>

            <RouterLink class="mobile-menu-item" to="/case-studies" @click="closeMobileMenu">CASE STUDIES</RouterLink>
            <RouterLink class="mobile-menu-item" to="/portfolio" @click="closeMobileMenu">PORTFOLIO</RouterLink>
            <RouterLink class="mobile-menu-item" to="/about" @click="closeMobileMenu">ABOUT US</RouterLink>

            <!-- Language Mobile -->
            <div class="mobile-nav-item">
                <button class="mobile-menu-header" @click="toggleLanguageMenu">
                    <span>
                        <img :src="currentLanguage === 'en' ? usaFlag : banglaFlag"
                            :alt="currentLanguage === 'en' ? 'English' : 'Bangla'" class="flag-img">
                        {{ currentLanguage.toUpperCase() }}
                    </span>
                    <i :class="languageOpen ? 'fa-regular fa-chevron-up' : 'fa-regular fa-chevron-down'"></i>
                </button>
                <ul class="mobile-sub-menus" :class="{ 'active': languageOpen }">
                    <li>
                        <a @click.prevent="changeLanguage('en'); closeMobileMenu();" href="#">
                            <img :src="usaFlag" alt="English" class="flag-img">
                            <span>English</span>
                        </a>
                    </li>
                    <li>
                        <a @click.prevent="changeLanguage('bn'); closeMobileMenu();" href="#">
                            <img :src="banglaFlag" alt="Bangla" class="flag-img">
                            <span>বাংলা</span>
                        </a>
                    </li>
                </ul>
            </div>

            <button class="cta-button mobile" @click="closeMobileMenu">GET STARTED</button>
        </div>
    </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

// Import flag images
import usaFlag from '../assets/images/flag_USA.svg';
import banglaFlag from '../assets/images/bangla_flag.svg';

// Mobile menu state
const mobileMenuOpen = ref(false);
const servicesOpen = ref(false);
const languageOpen = ref(false);

// Language state
const currentLanguage = ref('en');

// Scroll behavior state
const isScrollingDown = ref(false);
const isScrollingUp = ref(false);
let lastScrollTop = 0;
const scrollThreshold = 100; // Start hiding after 100px scroll

const handleScroll = () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // If at the top of the page
    if (currentScroll <= scrollThreshold) {
        isScrollingDown.value = false;
        isScrollingUp.value = false;
    }
    // Scrolling down
    else if (currentScroll > lastScrollTop && currentScroll > scrollThreshold) {
        isScrollingDown.value = true;
        isScrollingUp.value = false;
    }
    // Scrolling up
    else if (currentScroll < lastScrollTop) {
        isScrollingDown.value = false;
        isScrollingUp.value = true;
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
};

const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value;
    if (!mobileMenuOpen.value) {
        servicesOpen.value = false;
        languageOpen.value = false;
    }
};

const toggleServicesMenu = () => {
    servicesOpen.value = !servicesOpen.value;
};

const toggleLanguageMenu = () => {
    languageOpen.value = !languageOpen.value;
};

const closeMobileMenu = () => {
    mobileMenuOpen.value = false;
    servicesOpen.value = false;
    languageOpen.value = false;
};

const changeLanguage = (lang: string) => {
    currentLanguage.value = lang;
    // Here you would typically integrate with your i18n solution
    console.log('Language changed to:', lang);
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>