<script setup>
defineProps({
  title: {
    type: String,
    default: "The Footer",
  },
});
</script>

<template>
  <footer class="footer">
    <h1>{{ title }}</h1>
    <p>This is awesome footer</p>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #424242;
  color: white;
  padding: 4px;
}
</style>
