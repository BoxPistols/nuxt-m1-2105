<template>
  <div>
    <h1>Posts</h1>
    <nuxt-link to="/posts/1">Post 1</nuxt-link>
    <nuxt-link to="/posts/2">Post 2</nuxt-link>
  </div>
</template>

<script>
export default {
  name: "TestPage",
  data() {},
};
</script>

<style scoped>
a {
  color: blue;
}
</style>
