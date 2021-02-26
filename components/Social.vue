<template>
  <div class="social-card">
    <a href="https://www.instagram.com/ordershoes_rio/" class="social-item" style="color: white">
      <f-a
        :icon="{
          prefix: 'fab',
          iconName: 'instagram',
        }"
      ></f-a>
    </a>
    <a href="https://lin.ee/TCqyNKa" class="social-item" style="color: white">
      <f-a
        :icon="{
          prefix: 'fab',
          iconName: 'line',
        }"
      ></f-a>
    </a>
    <a
      href="mailto:info@a-starone.com"
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
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 750px) {
  .social-item {
  }
}
.social-item {
  height: 10rem;
  width: 10rem;
  font-size: 5rem;
  border-radius: 10rem;
  background: rgb(4, 33, 56);
  background: linear-gradient(90deg, rgb(0, 0, 0) 22%, rgb(4, 22, 37) 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--primary-color);
  /* font-size: 2.5rem; */
  /* background: #c9c9c9; */
  margin-right: 4rem;
  cursor: pointer;
}
</style>
