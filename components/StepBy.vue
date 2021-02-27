<template>
  <div class="step-by">
    <div class="step-container">
      <div class="step-item">
        <div class="step-index">Step 1</div>
        <p>
          問い合わせ <br />
          LINE追加<span style="margin: 0 1rem">・</span>フォーム入力
        </p>
        <button
          @click="$emit('contact')"
          style="margin: 0 auto; display: block"
        >
          始める
        </button>
        <!-- <img
          class="step-one"
          width="800"
          :src="require('~/assets/step-one.jpeg')"
          alt=""
        /> -->
      </div>
      <!-- <div class="step-arrow step-left"></div>
      <div class="step-arrow step-right"></div> -->

      <div class="step-item">
        <div class="step-index">Step 2</div>
        <p>必要事項のご入力、 御来店日の決定</p>
      </div>
      <div class="step-item" style="margin-right: 0">
        <div class="step-index">Step 3</div>

        <p>サロンへ御来店 出張へお伺い</p>
      </div>
      <div class="step-item">
        <div class="step-index">Step 4</div>
        <p>デザインの選択 <span style="margin: 0 1rem">&</span> サイズ測定</p>
      </div>
      <div class="step-item">
        <div class="step-index">完成</div>
        <p>3週〜1ヶ月半でお渡し</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style >
.step-by {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.step-container {
  position: relative;
  display: grid;
}

.step-item {
  background: var(--contact-color);
  color: var(--primary-color);
  /* margin-bottom: 10rem; */
  width: 100%;
  /* max-width: 80rem; */
  /* border-radius: 0.5rem; */
  padding: 2rem;
  /* margin-bottom: 10rem; */
  /* grid-area: main; */
}
@media screen and (min-width: 850px) {
  .step-container {
    grid-template-columns: repeat(1, 800px);
    /* grid-template-areas: 'main main main'; */
  }
  @supports (gap: 20px) {
    .step-container {
      gap: 20px;
    }
  }
  @supports not (gap: 20px) {
    .step-item {
      margin-right: 20px;
      margin-bottom: 20px;
    }
  }
}

@media screen and (max-width: 900px) {
  .step-container {
    grid-template-columns: repeat(1, 1fr);
    /* grid-template-areas: 'main'; */
  }
  @supports (gap: 20px) {
    .step-container {
      gap: 20px;
    }
  }
  @supports not (gap: 20px) {
    .step-item {
      margin-right: 20px;
      margin-bottom: 20px;
    }
  }
}

.step-item .step-one {
  /* position: absolute; */
  width: 15rem;
  margin: 0 auto;
  display: block;
}
.step-item .step-index {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  background: var(--primary-color);
  color: var(--contact-color);
  padding: 1rem 2rem;
  /* border-radius: 0.5rem; */
}
.step-left {
  left: 10px;
  top: 0;
}
.step-right {
  top: 0;
  right: 10px;
}
.step-arrow {
  position: absolute;
  content: '';
  height: 100%;
  width: 2px;
  background: var(--contact-color);
  z-index: -1;
}
.step-item p {
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  word-break: keep-all;
}
</style>
