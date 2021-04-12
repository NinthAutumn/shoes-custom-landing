<template>
  <div id="contact">
    <!-- <client-only> -->
    <!-- @submit.prevent="submitForm" -->
    <form class="contact-form" @submit.prevent="submitForm" name="contactus">
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

      <label for="Eメール">Eメール</label>
      <input
        v-model="form.Eメール"
        type="email"
        name="Eメール"
        placeholder="sample@sample.com"
      />
      <label for="住所">住所</label>
      <textarea
        v-model="form.住所"
        type="text"
        name="住所"
        :placeholder="'例）\n〒000-0000\n東京都血千代田区五番町目6-2 ooビル301'"
        cols="30"
        rows="3"
      />
      <label for="内容">ご予約希望日時（ご質問・お問い合わせ内容）</label>
      <textarea
        name="内容"
        v-model="form.内容"
        placeholder="ご予約希望日時（ご質問・お問い合わせ内容）"
        cols="30"
        rows="10"
      ></textarea>
      <vue-recaptcha
        sitekey="6LfsVGsaAAAAAGzUwA1KeS0jv8eQh_u0yjqxqEau"
        @verify="onVerify"
        @expired="onExpired"
      ></vue-recaptcha>
      <!-- <div data-netlify-recaptcha="true"></div> -->
      <button type="submit" class="button-large">
        {{ loading ? '投稿中...' : '確認' }}
      </button>
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
      ご用件: '選択してください',
      携帯番号: '',
      Eメール: '',
      名前: '',
      住所: '',
      内容: '',
    },
    gcaptcha: '',
    disabled: true,
    loading: false,
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
      if (this.loading) return alert('投稿中...')
      if (this.disabled) return alert('キャプチャ認証をしてください。')
      this.loading = true
      // await this.$ga.event({
      //   eventCategory: 'お問い合わせ投稿',
      //   eventAction: 'click',
      //   eventLabel: 'お問い合わせ投稿',
      //   eventValue: 1,
      // })
      await fetch('/.netlify/functions/contact-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          ...this.form,
          'g-recaptcha-response': this.gcaptcha,
        }),
      })
        .then((response) => response.json())
        .then((res) => {
          if (res.error) {
            return alert(res.error)
          }
          this.$router.push('/contact')
          this.form = {
            ご用件: '選択してください',
            携帯番号: '',
            Eメール: '',
            名前: '',
            住所: '',
            内容: '',
          }
        })
        .catch(function (error) {
          console.error(error)
          alert('お問い合わせに失敗しました。')
        })
        .finally(() => {
          this.loading = false
        })
    },
  },
}
</script>

<style >
#contact {
  display: flex;
  justify-content: center;

  background: var(--primary-color);
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

@media screen and (min-width: 850px) {
  .contact-form {
    width: 80rem;
  }
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
