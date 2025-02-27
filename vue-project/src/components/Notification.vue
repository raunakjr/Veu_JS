<template>
  <section class="p-5">
    <h1 class="text-5xl !font-semibold !mb-10 !mt-20 md:!ml-20">
      ToDesktop handles the details
    </h1>
    <div
      class="cursor-pointer flex flex-col gap-5 md:grid md:grid-cols-3 md:gap-3"
    >
      <!-- Item 1 (Row 1-3 on md screens) -->
      <div
        class="md:row-start-1 md:row-end-3 flex flex-col justify-center items-center border border-gray-600 p-5 rounded-lg hover:bg-gradient-to-b from-pink-200 via-yellow-100 to-white hover:border-2 bg-slate-50"
      >
        <h2 class="text-2xl font-medium !mb-5">Native Notification</h2>
        <img src="../assets/images/asset 37.png" alt="" />
      </div>

      <!-- Item 2 (Row 1-4 on md screens) -->
      <div
        class="md:row-start-1 md:row-end-4 flex flex-col justify-center items-center border border-gray-600 p-5 rounded-lg hover:bg-gradient-to-b from-pink-200 via-yellow-100 to-white hover:border-2 bg-slate-50"
      >
        <h2 class="text-2xl font-medium">Native Notification</h2>
        <p class="text-center !mt-5 !mb-3">
          We’ll ensure the underlying browser is up to date and deliver
          performance improvements, security patches, & additional features.
        </p>
        <img src="../assets/images/asset 38.png" alt="" />
      </div>

      <!-- Item 3 (Row 1-3 on md screens) -->
      <div
        class="md:row-start-1 md:row-end-3 flex flex-col justify-center items-center border border-gray-600 p-5 rounded-lg hover:bg-gradient-to-b from-pink-200 via-yellow-100 to-white hover:border-2 bg-slate-50"
      >
        <h2 class="text-2xl font-medium !mb-5">Native Notification</h2>
        <img src="../assets/images/asset 39.png" alt="" />
      </div>

      <!-- Item 4 (Row 3-6 on md screens) -->
      <div
        class="md:row-start-3 md:row-end-6 flex flex-col justify-center items-center border border-gray-600 p-5 rounded-lg hover:bg-gradient-to-b from-pink-200 via-yellow-100 to-white hover:border-2 bg-slate-50"
      >
        <h2 class="text-2xl font-medium">Native Notification</h2>
        <p class="text-center !mt-5 !mb-3">
          We’ll ensure the underlying browser is up to date and deliver
          performance improvements, security patches, & additional features.
        </p>
        <img src="../assets/images/asset 40.png" alt="" />
      </div>

      <!-- Item 6 (Row 3-6 on md screens) -->
      <div
        class="md:row-start-3 md:row-end-6 flex flex-col justify-center items-center border border-gray-600 p-5 rounded-lg hover:bg-gradient-to-b from-pink-200 via-yellow-100 to-white hover:border-2 bg-slate-50"
      >
        <h2 class="text-2xl font-medium !mb-5">Native Notification</h2>
        <img src="../assets/images/asset 39.png" alt="" />
      </div>
      <!-- Item 5 (Row 4-6 on md screens) -->
      <div
        class="md:row-start-4 md:row-end-6 flex flex-col justify-center items-center border border-gray-600 p-5 rounded-lg hover:bg-gradient-to-b from-pink-200 via-yellow-100 to-white hover:border-2 bg-slate-50"
      >
        <h2 class="text-2xl font-medium">Native Notification</h2>
        <p class="text-center !mt-5 !mb-3">
          We’ll ensure the underlying browser is up to date and deliver
          performance improvements, security patches, & additional features.
        </p>
        <img src="../assets/images/asset 40.png" alt="" />
      </div>
    </div>
    <div class="!mt-15">
      <div class="border rounded-lg overflow-hidden flex justify-center p-4">
        <div
          id="line-5"
          class="flex gap-8 p-6 transition-transform duration-500 ease-out"
          :style="{ transform: `translateX(${scrollSpeed}px)` }"
        >
          <h3
            v-for="(text, index) in [
              'Download Analytics •',
              'Deep Linking •',
              'Trays •',
              'Support •',
              'Analytics •',
              'Search •',
              'Deep Linking •',
              'Download Analytics •',
            ]"
            :key="index"
            class="whitespace-nowrap mx-2 text-2xl font-semibold"
          >
            {{ text }}
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const scrollSpeed = ref(0);
const lastScrollY = ref(window.scrollY);
const isVisible = ref(false);
const speedFactor = 0.5; // Adjust speed factor
const isLTR = true; // Change to false for right-to-left scrolling

const handleScroll = () => {
  if (!isVisible.value) return;

  const currentScrollY = window.scrollY;
  const translateX =
    (window.innerHeight -
      document.getElementById("line-5").getBoundingClientRect().top) *
    speedFactor;

  scrollSpeed.value = isLTR ? translateX : -translateX;
  lastScrollY.value = currentScrollY;
};

const setupObserver = () => {
  const observer = new IntersectionObserver(([entry]) => {
    isVisible.value = entry.isIntersecting;
    if (isVisible.value) {
      window.addEventListener("scroll", handleScroll);
    } else {
      window.removeEventListener("scroll", handleScroll);
    }
  });

  observer.observe(document.getElementById("line-5"));
};

onMounted(() => {
  setupObserver();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
