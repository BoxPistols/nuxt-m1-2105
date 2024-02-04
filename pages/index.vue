<template>
  <div>
    <div class="bg-gray-100">Hello</div>
    <div>{{ envVariable }}</div>
  </div>
</template>

<script>
export default {
  name: "default-layout",
  // layout: "custom-layout",
  data() {
    return {
      envVariable: process.env.API_KEY || "デフォルト値",
    };
  },
};
</script>

<style scoped>
/* @import "../assets/style.scss"; */
</style>
