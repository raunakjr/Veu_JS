<template>
  <section class="p-5">
    <h1 class="text-5xl !font-bold !mt-10 !mb-5">FAQ</h1>
    <div
      class="border-gray-200 rounded-lg p-10 flex flex-col gap-5 md:grid md:grid-cols-2"
    >
      <div v-for="(item, index) in 6" :key="index">
        <!-- Header -->
        <div>
          <div
            @click="toggleItem(index)"
            :class="[
              isOpen[index] ? 'rounded-t-lg' : 'rounded-lg',
              'flex justify-between px-5 py-5 bg-slate-200 cursor-pointer ',
            ]"
          >
            <span class="text-xl font-medium">Is ToDesktop For Me?</span>
            <span
              class="border bg-white flex w-5 h-5 items-center justify-center"
            >
              {{ isOpen[index] ? "⬆" : "⬇" }}
            </span>
          </div>

          <!-- Content -->
          <div
            :class="[
              isOpen[index] ? 'block' : 'hidden',
              'rounded-b-lg px-5 py-5 bg-slate-200',
            ]"
          >
            <p class="text-lg !font-light">
              That depends! If you would like to distribute your web app to your
              users as a downloadable desktop app then ToDesktop is for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isOpen: Array(6).fill(false), // Initialize an array of false values for each FAQ item
    };
  },
  methods: {
    toggleItem(index) {
      this.isOpen[index] = !this.isOpen[index]; // Toggle only the clicked item
    },
  },
};
</script>
