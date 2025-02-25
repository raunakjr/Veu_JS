<template>
  <div class="text-center p-10">
    <h1 class="text-3xl font-bold text-red-500">Hello Vue with Tailwind! 🚀</h1>
  </div>

  <div>
    <button @click="increment">INC</button>
    <h3 :class="counterStyle">{{ count }}</h3>
    <button @click="decrement">DEC</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counterStyle: "danger",
      count: 2,
    };
  },
  methods: {
    increment() {
      this.count++;
      if (this.count > 5) {
        this.counterStyle = "normal";
      }
    },
    decrement() {
      this.count--;
    },
  },
};
</script>
<style>
.normal {
  color: blue;
}
.danger {
  color: red;
}
</style>
