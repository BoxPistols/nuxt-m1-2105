<template>
  <div class="post-details">
    <h1>Post Details</h1>
    <p>Post ID: {{ postId }}</p>
    <!-- Add your post details here -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      postId: null,
    };
  },
  mounted() {
    // Fetch post details using the postId from the route params
    this.postId = this.$route.params.id;
    // Call an API or perform any necessary logic to fetch the post details
  },
};
</script>
