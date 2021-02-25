<template>
  <footer class="footer">
    <img height="200" :src="require('~/assets/logo.png')" alt="" />
  </footer>
</template>

<script>
export default {}
</script>

<style >
.footer {
  height: 20rem;
  background: rgb(4, 33, 56);
  background: linear-gradient(
    90deg,
    rgb(4, 28, 48) 22%,
    rgba(2, 12, 20, 1) 100%
  );
}
.footer img {
  height: 20rem;
}
</style>
