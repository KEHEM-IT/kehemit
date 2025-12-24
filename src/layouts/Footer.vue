<!-- layouts/Footer.vue -->
<template>
    <footer class="footer">
        <!-- FOOTER MAIN FLEX CONTAINER -->
        <section class="footer-container">

            <!-- BRAND / ABOUT SECTION -->
            <div class="footer-col footer-about">
                <!-- LOGO AND BRAND NAME -->
                <router-link to="/" class="footer-logo" aria-label="Kehem IT Home">
                    <img src="../assets/images/Logo.png" alt="KEHEM IT Logo">
                    <h3>KEHEM IT</h3>
                </router-link>

                <!-- COMPANY DESCRIPTION -->
                <p>
                    Kehem IT is a digital innovation company delivering tailored web, software,
                    and automation solutions. We empower businesses with modern technologies,
                    seamless design, and reliable performance.
                </p>

                <!-- SOCIAL MEDIA LINKS (EXTERNAL) -->
                <nav class="footer-social" aria-label="Social media links">
                    <a href="#" target="_blank" rel="noopener" aria-label="Facebook">
                        <i class="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="#" target="_blank" rel="noopener" aria-label="LinkedIn">
                        <i class="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a href="#" target="_blank" rel="noopener" aria-label="YouTube">
                        <i class="fa-brands fa-youtube"></i>
                    </a>
                    <a href="#" target="_blank" rel="noopener" aria-label="WhatsApp">
                        <i class="fa-brands fa-whatsapp"></i>
                    </a>
                </nav>
            </div>

            <!-- COMPANY NAVIGATION -->
            <nav class="footer-col" aria-labelledby="footer-company">
                <h4 id="footer-company">COMPANY</h4>
                <ul>
                    <li><router-link to="/about">Who We Are</router-link></li>
                    <li><router-link to="/mission">Our Mission</router-link></li>
                    <li><router-link to="/careers">Careers</router-link></li>
                    <li><router-link to="/blog">Blog</router-link></li>
                    <li><router-link to="/support">Supports</router-link></li>
                </ul>
            </nav>

            <!-- CONTACT INFORMATION -->
            <address class="footer-col">
                <h4>GET IN TOUCH</h4>
                <ul class="footer-contact">
                    <li>
                        <i class="fa-solid fa-location-dot"></i>
                        <span>
                            Shop-6, Nehar Market, Zindabazar,<br />
                            Sadar-3100, Sylhet
                        </span>
                    </li>
                    <li>
                        <i class="fa-solid fa-phone"></i>
                        <a href="tel:+8809522654654">+8809522-654654</a>
                    </li>
                    <li>
                        <i class="fa-solid fa-phone"></i>
                        <a href="tel:+8801700905268">+8801700-905268</a>
                    </li>
                    <li>
                        <i class="fa-solid fa-envelope"></i>
                        <a href="mailto:support@kehem.com">support@kehem.com</a>
                    </li>
                </ul>
            </address>

            <!-- FEATURED LINKS -->
            <nav class="footer-col" aria-labelledby="footer-featured">
                <h4 id="footer-featured">FEATURED</h4>
                <ul>
                    <li><router-link to="/case-studies">Case Studies</router-link></li>
                    <li><router-link to="/dedicated-team">Dedicated Software Team</router-link></li>
                    <li><router-link to="/portfolio">Portfolios</router-link></li>
                    <li><router-link to="/startup-development">Development for Startups</router-link></li>
                    <li><router-link to="/onuman">Onuman Software</router-link></li>
                    <li><router-link to="/sau-ai">SAU AI</router-link></li>
                </ul>
            </nav>

            <!-- SHORTCUT LINKS -->
            <nav class="footer-col" aria-labelledby="footer-shortcuts">
                <h4 id="footer-shortcuts">SHORTCUTS</h4>
                <ul>
                    <li><router-link to="/services">Services</router-link></li>
                    <li><router-link to="/news">News & Insights</router-link></li>
                    <li><router-link to="/free-assets">Free Assets</router-link></li>
                    <li><router-link to="/fraud-warning">Fraud Warning Disclaimer</router-link></li>
                    <li><router-link to="/client-area">Client Area</router-link></li>
                </ul>

                <!-- DMCA BADGE (EXTERNAL RESOURCE) -->
                <div class="footer-dmca">
                    <a href="#" target="_blank" rel="noopener" aria-label="DMCA Protected">
                        <img src="../assets/images/dmca-protected.png" alt="DMCA Protected" />
                    </a>
                </div>
            </nav>

        </section>

        <!-- FOOTER BOTTOM BAR -->
        <section class="footer-bottom">

            <!-- COPYRIGHT TEXT -->
            <div>
                © KEHEM IT 2025, All rights reserved
            </div>

            <!-- LEGAL NAVIGATION -->
            <nav class="footer-legal" aria-label="Legal links">
                <router-link to="/privacy-policy">Privacy Policy</router-link>
                <router-link to="/cookie-policy">Cookie Policy</router-link>
                <router-link to="/terms-and-conditions">Terms & Conditions</router-link>
            </nav>

        </section>
    </footer>
</template>

<script setup lang="ts">

</script>