<template>
  <div id="contact">
    <!-- <client-only> -->
    <form
      @submit.prevent="submitForm"
      class="contact-form"
      netlify
      name="contactus"
      data-netlify="true"
    >
      <input type="hidden" name="form-name" value="contactus" />
      <h3 style="text-align: center">お問い合わせ</h3>
      <label for="ご用件">ご用件</label>
      <select v-model="form.ご用件" name="ご用件" id="ご用件">
        <option value="選択してください" disabled selected>
          選択してください
        </option>
        <option value="予約希望日選択">予約希望日選択</option>
        <option value="ご質問・お問い合わせ">ご質問・お問い合わせ</option>
      </select>
      <label for="name">お名前※</label>
      <input
        v-model="form.名前"
        required
        type="text"
        name="名前"
        placeholder="名前"
      />
      <label for="phone_number">電話番号※</label>
      <input
        required
        v-model="form.携帯番号"
        type="text"
        name="携帯番号"
        placeholder="07012345678"
      />
      <label for="email">Eメール</label>
      <input
        v-model="form.Eメール"
        type="email"
        name="email"
        placeholder="sample@sample.com"
      />
      <label for="コンテンツ">ご予約希望日時（ご質問・お問い合わせ内容）</label>
      <textarea
        name="コンテンツ"
        v-model="form.コンテンツ"
        placeholder="ご予約希望日時（ご質問・お問い合わせ内容）"
        cols="30"
        rows="10"
      ></textarea>
      <vue-recaptcha
        sitekey="6Lch9GYaAAAAAOZZUlcT_ErBuxLIFy-rtcOdmoW5"
        @verify="onVerify"
        @expired="onExpired"
      ></vue-recaptcha>
      <button type="submit">確認</button>
    </form>
    <!-- </client-only> -->
  </div>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha'
export default {
  components: {
    VueRecaptcha,
  },
  data: () => ({
    form: {
      email: '',
      携帯番号: '',
      コンテンツ: '',
      ご用件: '選択してください',
      名前: '',
    },
    gcaptcha: '',
    disabled: true,
  }),
  methods: {
    onVerify(response) {
      this.gcaptcha = response //レスポンスのトークンをセット
      this.disabled = false
    },
    onExpired() {
      this.gcaptcha = '' //レスポンスのトークンを空に戻す
      // this.recaptcha.setflag = false //フラグを下す
      this.disabled = true //submitボタンをdisabledに
    },
    async submitForm() {
      if (this.disabled) return alert('キャプチャ認証をしてください。')
      await fetch('https://submit-form.com/qIqvkwiC', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          ...this.form,
          // 'g-recaptcha-response': this.gcaptcha,
        }),
      })
        .then(() => {
          alert('お問い合わせありがとうございます。')
          this.form = {
            email: '',
            携帯番号: '',
            コンテンツ: '',
            ご用件: '',
          }
        })
        .catch(function (error) {
          console.error(error)
        })
    },
  },
}
</script>

<style >
#contact {
  display: flex;
  justify-content: center;
  --contact-color: rgb(247, 247, 247);
  /* background: #040a11; */
}
@media screen and (min-width: 750px) {
  .contact-form {
    padding: 2rem 4rem;
  }
}
.contact-form {
  margin-top: 2rem;
  /* background: white; */
  color: var(--contact-color);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
label {
  font-size: 2rem;
}

input,
textarea {
  font-size: 2rem;
  background-color: var(--contact-color);
  color: black;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.16) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px;
  border: none;
  box-sizing: border-box;
  margin-bottom: 2.5rem;
  margin-top: 1rem;

  /* font-size: 1.5rem; */
  width: 100%;
  padding: 1rem 2rem;
  /* border-radius: 0.5rem; */
}

input:active,
input:focus {
  outline: 0;
}
textarea {
}
select {
  background-color: var(--contact-color);
  color: black;
  margin-bottom: 2.5rem;
  margin-top: 1rem;
  font-size: 2rem;
  padding: 1rem 2rem;
  border: none;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.16) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px;
  box-sizing: border-box;
  /* margin-bottom: 1rem;
  margin-top: 0.5rem; */
  /* height: 4rem; */
  /* font-size: 1.5rem; */
  width: 100%;
  /* border-radius: 0.5rem; */
}
</style>
