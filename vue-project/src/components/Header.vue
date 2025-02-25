<template>
  <nav
    class="bg-white p-2 flex justify-between items-center border-b border-gray-300 z-50 text-lg"
  >
    <a href="#" class="flex gap-4 items-center">
      <img
        class="object-cover max-w-12 max-h-12"
        src="../assets/images/asset 0.png"
        alt=""
        srcset=""
      />
      <span class="text-[20px] font-medium">ToDesktop</span>
    </a>
    <div class="hidden md:flex items-center gap-5">
      <a href="" class="hover:text-green-700">Pricing</a>
      <a href="" class="hover:text-green-700">Docs</a>
      <a href="" class="hover:text-green-700">Changing</a>
      <a href="" class="hover:text-green-700">Blog</a>
      <a href="" class="hover:text-green-700">Login</a>
    </div>
    <a
      href=""
      class="hidden md:flex border border-gray-400 rounded-lg px-4 py-2 gap-2 hover:border-gray-600"
    >
      <img src="../assets/images/asset 1.svg" alt="" srcset="" />
      <span>Electron Developers</span>
      <span>➡</span>
    </a>
    <button @click="HandleClick" class="text-3xl cursor-pointer pr-4 md:hidden">
      ☰
    </button>
  </nav>

  <nav
    v-if="isopen"
    class="lg:hidden w-full z-10 fixed left-0 top-0 bg-white p-2 justify-between items-center shadow-2xl border-b border-gray-300"
  >
    <div class="flex justify-between">
      <a href="#" class="flex gap-4 items-center">
        <img
          class="object-cover max-w-12 max-h-12"
          src="../assets/images/asset 0.png"
          alt=""
          srcset=""
        />
        <span class="text-[20px] font-medium">ToDesktop</span>
      </a>

      <button
        @click="HandleClick"
        class="text-3xl cursor-pointer pr-4 md:hidden"
      >
        X
      </button>
    </div>
    <div class="flex flex-col bg-white p-2">
      <a href="" class="font-medium p-3 m-3 hover:bg-blue-200 block rounded-lg"
        >Pricing</a
      >
      <a href="" class="font-medium p-3 m-3 hover:bg-blue-200 block rounded-lg"
        >Docs</a
      >
      <a href="" class="font-medium p-3 m-3 hover:bg-blue-200 block rounded-lg"
        >Changing</a
      >
      <a href="" class="font-medium p-3 m-3 hover:bg-blue-200 block rounded-lg"
        >Blog</a
      >
      <a href="" class="font-medium p-3 m-3 hover:bg-blue-200 block rounded-lg"
        >Login</a
      >
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      isopen: false,
    };
  },
  methods: {
    HandleClick() {
      this.isopen = !this.isopen;
    },
    checkScreenSize() {
      if (window.innerWidth >= 768) {
        this.isopen = false;
      }
    },
  },
  mounted() {
    window.addEventListener("resize", this.checkScreenSize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.checkScreenSize);
  },
};
</script>
