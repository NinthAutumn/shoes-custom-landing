<template>
  <div class="contact-page">
    <div class="us-container">
      <h1>お問い合わせありがとうございます。</h1>
      <button
        class="button button--normal button--primary"
        @click="$router.push('/')"
      >
        戻る
      </button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.contact-page h1 {
  font-size: 3rem;
  z-index: 2;
}
.contact-page {
  width: 100%;
  display: flex;
  justify-content: center;
}
.us-container {
  /* width: 20rem; */
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 50rem;
}
.us-container button {
  align-self: center !important;
}
</style>
