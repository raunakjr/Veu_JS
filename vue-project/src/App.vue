<script>
import Navbar from "@/components/Header.vue";
import Hero from "@/components/Hero.vue";
import Company from "@/components/Company.vue";
import Notification from "./components/Notification.vue";
import Customer from "./components/Customer.vue";
import FAQ from "./components/FAQ.vue";
import Footer from "./components/Footer.vue";
export default {
  components: { Navbar, Hero, Company, Notification, Customer, FAQ, Footer },
};
</script>

<template>
  <Navbar />
  <Hero />
  <Company />
  <Notification />
  <Customer />
  <FAQ />
  <Footer />
</template>

<style scoped></style>
