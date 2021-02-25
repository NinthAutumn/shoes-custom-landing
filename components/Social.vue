<template>
  <div class="social-card">
    <a href="https://instagram.com" class="social-item" style="color: white">
      <f-a
        :icon="{
          prefix: 'fab',
          iconName: 'instagram',
        }"
      ></f-a>
    </a>
    <a href="https://line.com" class="social-item" style="color: white">
      <f-a
        :icon="{
          prefix: 'fab',
          iconName: 'line',
        }"
      ></f-a>
    </a>
    <a
      href="mailto:someone@yoursite.com"
      class="social-item"
      style="margin-right: 0rem; color: white"
    >
      <f-a
        :icon="{
          prefix: 'far',
          iconName: 'envelope',
        }"
      ></f-a>
    </a>
  </div>
</template>

<script>
export default {}
</script>

<style >
.social-card {
  width: 100%;
  margin-top: 50px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.social-item {
  height: 5rem;
  width: 5rem;
  border-radius: 10rem;
  background: rgb(4, 33, 56);
  background: linear-gradient(
    90deg,
    rgb(4, 25, 43) 22%,
    rgba(2, 12, 20, 1) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--primary-color);
  font-size: 2.5rem;
  /* background: #c9c9c9; */
  margin-right: 4rem;
  cursor: pointer;
}
</style>
