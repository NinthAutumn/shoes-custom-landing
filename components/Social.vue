<template>
  <div class="social-card">
    <div class="social-item" style="color: #dd2a7c">
      <f-a
        :icon="{
          prefix: 'fab',
          iconName: 'instagram',
        }"
      ></f-a>
    </div>
    <div class="social-item" style="color: #01b302">
      <f-a
        :icon="{
          prefix: 'fab',
          iconName: 'line',
        }"
      ></f-a>
    </div>
    <div class="social-item" style="margin-right: 0rem">
      <f-a
        :icon="{
          prefix: 'far',
          iconName: 'envelope',
        }"
      ></f-a>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style >
.social-card {
  width: 100%;
  background: #040a10;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.social-item {
  height: 5rem;
  width: 5rem;
  border-radius: 10rem;
  background: white;
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
