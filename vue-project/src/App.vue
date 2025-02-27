<script>
import Navbar from "@/components/Header.vue";
import Hero from "@/components/Hero.vue";
import Company from "@/components/Company.vue";
import Notification from "./components/Notification.vue";
export default { components: { Navbar, Hero, Company, Notification } };
</script>

<template>
  <Navbar />
  <Hero />
  <Company />
  <Notification />
</template>

<style scoped></style>
