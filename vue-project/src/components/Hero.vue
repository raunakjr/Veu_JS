<template>
  <main class="max-w-screen overflow-hidden">
    <div
      id="hero"
      class="bg-gradient-to-b from-purple-100 via-orange-100 to-transparent p-5 md: flex md:justify-center"
    >
      <div class="m-auto max-w-4xl md:max-w-3xl md:flex md:flex-col">
        <div class="md:flex md: justify-center">
          <button
            class="bg-yellow-200 color:brown px-4 py-1 !mb-10 rounded-lg md:max-w-[350px] cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out"
          >
            v0.21.1:
            <span class="text-lg font-[350px] text-gray-700"
              >Find in-page bug fixes</span
            >
            <span
              class="hover:translate-x-10 transform transition duration-300"
            >
              ➡</span
            >
          </button>
        </div>
        <div
          class="hidden text-gray-700 md:flex justify-center gap-4 items-center !mb-8"
        >
          <div>
            <font-awesome-icon :icon="['fas', 'code']" />
            <span class="pl-2">Code Optional</span>
          </div>
          <div>
            <font-awesome-icon :icon="['fas', 'hand']" />
            <span class="pl-2">Drag & Drop builder</span>
          </div>
          <div>
            <font-awesome-icon :icon="['fas', 'laptop']" />
            <span class="pl-2">Windows, Mac, Linux</span>
          </div>
        </div>
        <h1 class="text-5xl font-bold md:text-7xl text-center">
          Web app to desktop app in minutes
        </h1>
        <p class="text-lg pt-5 md:text-2xl text-center">
          Take your Web app codebase and transform it into a cross platform
          desktop app with native functionality
        </p>
        <div class="flex flex-col gap-2 !mt-5 md:flex-row md:justify-center">
          <button
            class="bg-blue-500 w-full rounded-lg block mb-10 p-2 md:max-w-[200px] cursor-pointer hover:bg-blue-700 text-white"
          >
            Download Now
          </button>
          <button
            class="bg-white border-2 border-gray-200 w-full rounded-lg p-2 md:max-w-[200px] cursor-pointer hover:bg-gray-400"
          >
            Read Docs
          </button>
        </div>
      </div>
    </div>
    <div class="pt-15 pb-15">
      <div id="companies-container " class="flex gap-2 justify-center pb-5">
        <img class="translate-y-3" src="../assets/images/asset 2.svg" alt="" />
        <span class="font-bold text-lg">APP POWERED BY TODESKTOP</span>
        <img
          class="translate-y-3 -scale-x-100"
          src="../assets/images/asset 2.svg"
          alt=""
        />
      </div>
      <div class="flex flex-col gap-5">
        <div class="line1 flex gap-3">
          <div
            class="p-5 flex flex-col justify-center bg-gray-100 border-gray-300 rounded-lg"
          >
            <img
              class="w-12 h-12"
              src="../assets/images/asset 3.png"
              alt=""
              srcset=""
            />
            <span class="text-[12px] md:text-[16px]">Unbounce</span>
          </div>
          <div
            class="p-5 flex flex-col justify-center bg-gray-100 border-gray-300 rounded-lg"
          >
            <img
              class="w-12 h-12"
              src="../assets/images/asset 5.png"
              alt=""
              srcset=""
            />
            <span class="text-[12px] md:text-[16px]">Unbounce</span>
          </div>
          <div
            class="p-5 flex flex-col justify-center bg-gray-100 border-gray-300 rounded-lg"
          >
            <img
              class="w-12 h-12"
              src="../assets/images/asset 4.png"
              alt=""
              srcset=""
            />
            <span class="text-[12px] md:text-[16px]">Unbounce</span>
          </div>
          <div
            class="p-5 flex flex-col justify-center bg-gray-100 border-gray-300 rounded-lg"
          >
            <img
              class="w-12 h-12"
              src="../assets/images/asset 6.png"
              alt=""
              srcset=""
            />
            <span class="text-[12px] md:text-[16px]">Unbounce</span>
          </div>
          <div
            class="p-5 flex flex-col justify-center bg-gray-100 border-gray-300 rounded-lg"
          >
            <img
              class="w-12 h-12"
              src="../assets/images/asset 7.png"
              alt=""
              srcset=""
            />
            <span class="text-[12px] md:text-[16px]">Unbounce</span>
          </div>
          <div
            class="p-5 flex flex-col justify-center bg-gray-100 border-gray-300 rounded-lg"
          >
            <img
              class="w-12 h-12"
              src="../assets/images/asset 20.png"
              alt=""
              srcset=""
            />
            <span class="text-[12px] md:text-[16px]">Unbounce</span>
          </div>
          <div
            class="p-5 flex flex-col justify-center bg-gray-100 border-gray-300 rounded-lg"
          >
            <img
              class="w-12 h-12"
              src="../assets/images/asset 21.png"
              alt=""
              srcset=""
            />
            <span class="text-[12px] md:text-[16px]">Unbounce</span>
          </div>
          <div
            class="p-5 flex flex-col justify-center bg-gray-100 border-gray-300 rounded-lg"
          >
            <img
              class="w-12 h-12"
              src="../assets/images/asset 18.png"
              alt=""
              srcset=""
            />
            <span class="text-[12px] md:text-[16px]">Unbounce</span>
          </div>
          <div
            class="p-5 flex flex-col justify-center bg-gray-100 border-gray-300 rounded-lg"
          >
            <img
              class="w-12 h-12"
              src="../assets/images/asset 17.png"
              alt=""
              srcset=""
            />
            <span class="text-[12px] md:text-[16px]">Unbounce</span>
          </div>
          <div
            class="p-5 flex flex-col justify-center bg-gray-100 border-gray-300 rounded-lg"
          >
            <img
              class="w-12 h-12"
              src="../assets/images/asset 16.png"
              alt=""
              srcset=""
            />
            <span class="text-[12px] md:text-[16px]">Unbounce</span>
          </div>
          <div
            class="p-5 flex flex-col justify-center bg-gray-100 border-gray-300 rounded-lg"
          >
            <img
              class="w-12 h-12"
              src="../assets/images/asset 15.png"
              alt=""
              srcset=""
            />
            <span class="text-[12px] md:text-[16px]">Unbounce</span>
          </div>
          <div
            class="p-5 flex flex-col justify-center bg-gray-100 border-gray-300 rounded-lg"
          >
            <img
              class="w-12 h-12"
              src="../assets/images/asset 13.png"
              alt=""
              srcset=""
            />
            <span class="text-[12px] md:text-[16px]">Unbounce</span>
          </div>
          <div
            class="p-5 flex flex-col justify-center bg-gray-100 border-gray-300 rounded-lg"
          >
            <img
              class="w-12 h-12"
              src="../assets/images/asset 12.png"
              alt=""
              srcset=""
            />
            <span class="text-[12px] md:text-[16px]">Unbounce</span>
          </div>
        </div>
        <div class="line2 flex gap-3">
          <div
            class="p-5 flex flex-col justify-center bg-gray-100 border-gray-300 rounded-lg"
          >
            <img
              class="w-12 h-12"
              src="../assets/images/asset 3.png"
              alt=""
              srcset=""
            />
            <span class="text-[12px] md:text-[16px]">Unbounce</span>
          </div>
          <div
            class="p-5 flex flex-col justify-center bg-gray-100 border-gray-300 rounded-lg"
          >
            <img
              class="w-12 h-12"
              src="../assets/images/asset 5.png"
              alt=""
              srcset=""
            />
            <span class="text-[12px] md:text-[16px]">Unbounce</span>
          </div>
          <div
            class="p-5 flex flex-col justify-center bg-gray-100 border-gray-300 rounded-lg"
          >
            <img
              class="w-12 h-12"
              src="../assets/images/asset 4.png"
              alt=""
              srcset=""
            />
            <span class="text-[12px] md:text-[16px]">Unbounce</span>
          </div>
          <div
            class="p-5 flex flex-col justify-center bg-gray-100 border-gray-300 rounded-lg"
          >
            <img
              class="w-12 h-12"
              src="../assets/images/asset 6.png"
              alt=""
              srcset=""
            />
            <span class="text-[12px] md:text-[16px]">Unbounce</span>
          </div>
          <div
            class="p-5 flex flex-col justify-center bg-gray-100 border-gray-300 rounded-lg"
          >
            <img
              class="w-12 h-12"
              src="../assets/images/asset 7.png"
              alt=""
              srcset=""
            />
            <span class="text-[12px] md:text-[16px]">Unbounce</span>
          </div>
          <div
            class="p-5 flex flex-col justify-center bg-gray-100 border-gray-300 rounded-lg"
          >
            <img
              class="w-12 h-12"
              src="../assets/images/asset 20.png"
              alt=""
              srcset=""
            />
            <span class="text-[12px] md:text-[16px]">Unbounce</span>
          </div>
          <div
            class="p-5 flex flex-col justify-center bg-gray-100 border-gray-300 rounded-lg"
          >
            <img
              class="w-12 h-12"
              src="../assets/images/asset 21.png"
              alt=""
              srcset=""
            />
            <span class="text-[12px] md:text-[16px]">Unbounce</span>
          </div>
          <div
            class="p-5 flex flex-col justify-center bg-gray-100 border-gray-300 rounded-lg"
          >
            <img
              class="w-12 h-12"
              src="../assets/images/asset 18.png"
              alt=""
              srcset=""
            />
            <span class="text-[12px] md:text-[16px]">Unbounce</span>
          </div>
          <div
            class="p-5 flex flex-col justify-center bg-gray-100 border-gray-300 rounded-lg"
          >
            <img
              class="w-12 h-12"
              src="../assets/images/asset 17.png"
              alt=""
              srcset=""
            />
            <span class="text-[12px] md:text-[16px]">Unbounce</span>
          </div>
          <div
            class="p-5 flex flex-col justify-center bg-gray-100 border-gray-300 rounded-lg"
          >
            <img
              class="w-12 h-12"
              src="../assets/images/asset 16.png"
              alt=""
              srcset=""
            />
            <span class="text-[12px] md:text-[16px]">Unbounce</span>
          </div>
          <div
            class="p-5 flex flex-col justify-center bg-gray-100 border-gray-300 rounded-lg"
          >
            <img
              class="w-12 h-12"
              src="../assets/images/asset 15.png"
              alt=""
              srcset=""
            />
            <span class="text-[12px] md:text-[16px]">Unbounce</span>
          </div>
          <div
            class="p-5 flex flex-col justify-center bg-gray-100 border-gray-300 rounded-lg"
          >
            <img
              class="w-12 h-12"
              src="../assets/images/asset 13.png"
              alt=""
              srcset=""
            />
            <span class="text-[12px] md:text-[16px]">Unbounce</span>
          </div>
          <div
            class="p-5 flex flex-col justify-center bg-gray-100 border-gray-300 rounded-lg"
          >
            <img
              class="w-12 h-12"
              src="../assets/images/asset 12.png"
              alt=""
              srcset=""
            />
            <span class="text-[12px] md:text-[16px]">Unbounce</span>
          </div>
        </div>
        <div class="line3 flex gap-3">
          <div
            class="p-5 flex flex-col justify-center bg-gray-100 border-gray-300 rounded-lg"
          >
            <img
              class="w-12 h-12"
              src="../assets/images/asset 3.png"
              alt=""
              srcset=""
            />
            <span class="text-[12px] md:text-[16px]">Unbounce</span>
          </div>
          <div
            class="p-5 flex flex-col justify-center bg-gray-100 border-gray-300 rounded-lg"
          >
            <img
              class="w-12 h-12"
              src="../assets/images/asset 5.png"
              alt=""
              srcset=""
            />
            <span class="text-[12px] md:text-[16px]">Unbounce</span>
          </div>
          <div
            class="p-5 flex flex-col justify-center bg-gray-100 border-gray-300 rounded-lg"
          >
            <img
              class="w-12 h-12"
              src="../assets/images/asset 4.png"
              alt=""
              srcset=""
            />
            <span class="text-[12px] md:text-[16px]">Unbounce</span>
          </div>
          <div
            class="p-5 flex flex-col justify-center bg-gray-100 border-gray-300 rounded-lg"
          >
            <img
              class="w-12 h-12"
              src="../assets/images/asset 6.png"
              alt=""
              srcset=""
            />
            <span class="text-[12px] md:text-[16px]">Unbounce</span>
          </div>
          <div
            class="p-5 flex flex-col justify-center bg-gray-100 border-gray-300 rounded-lg"
          >
            <img
              class="w-12 h-12"
              src="../assets/images/asset 7.png"
              alt=""
              srcset=""
            />
            <span class="text-[12px] md:text-[16px]">Unbounce</span>
          </div>
          <div
            class="p-5 flex flex-col justify-center bg-gray-100 border-gray-300 rounded-lg"
          >
            <img
              class="w-12 h-12"
              src="../assets/images/asset 20.png"
              alt=""
              srcset=""
            />
            <span class="text-[12px] md:text-[16px]">Unbounce</span>
          </div>
          <div
            class="p-5 flex flex-col justify-center bg-gray-100 border-gray-300 rounded-lg"
          >
            <img
              class="w-12 h-12"
              src="../assets/images/asset 21.png"
              alt=""
              srcset=""
            />
            <span class="text-[12px] md:text-[16px]">Unbounce</span>
          </div>
          <div
            class="p-5 flex flex-col justify-center bg-gray-100 border-gray-300 rounded-lg"
          >
            <img
              class="w-12 h-12"
              src="../assets/images/asset 18.png"
              alt=""
              srcset=""
            />
            <span class="text-[12px] md:text-[16px]">Unbounce</span>
          </div>
          <div
            class="p-5 flex flex-col justify-center bg-gray-100 border-gray-300 rounded-lg"
          >
            <img
              class="w-12 h-12"
              src="../assets/images/asset 17.png"
              alt=""
              srcset=""
            />
            <span class="text-[12px] md:text-[16px]">Unbounce</span>
          </div>
          <div
            class="p-5 flex flex-col justify-center bg-gray-100 border-gray-300 rounded-lg"
          >
            <img
              class="w-12 h-12"
              src="../assets/images/asset 16.png"
              alt=""
              srcset=""
            />
            <span class="text-[12px] md:text-[16px]">Unbounce</span>
          </div>
          <div
            class="p-5 flex flex-col justify-center bg-gray-100 border-gray-300 rounded-lg"
          >
            <img
              class="w-12 h-12"
              src="../assets/images/asset 15.png"
              alt=""
              srcset=""
            />
            <span class="text-[12px] md:text-[16px]">Unbounce</span>
          </div>
          <div
            class="p-5 flex flex-col justify-center bg-gray-100 border-gray-300 rounded-lg"
          >
            <img
              class="w-12 h-12"
              src="../assets/images/asset 13.png"
              alt=""
              srcset=""
            />
            <span class="text-[12px] md:text-[16px]">Unbounce</span>
          </div>
          <div
            class="p-5 flex flex-col justify-center bg-gray-100 border-gray-300 rounded-lg"
          >
            <img
              class="w-12 h-12"
              src="../assets/images/asset 12.png"
              alt=""
              srcset=""
            />
            <span class="text-[12px] md:text-[16px]">Unbounce</span>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  setup() {
    const scrollPosition = ref(0);

    const handleScroll = () => {
      scrollPosition.value = window.scrollY * 0.2; // Adjust factor for effect
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    return {
      scrollPosition,
    };
  },
};
</script>
