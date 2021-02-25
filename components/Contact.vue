<template>
  <div id="contact">
    <!-- <client-only> -->
    <form
      method="POST"
      action=""
      class="contact-form"
      netlify
      name="contactus"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      data-netlify-recaptcha="true"
    >
      <input type="hidden" name="form-name" value="contactus" />
      <h3 style="text-align: center">お問い合わせ</h3>
      <label for="reason">ご用件</label>
      <select name="ご用件" id="ご用件">
        <option>選択してください</option>
        <option value="予約希望日選択">予約希望日選択</option>
        <option value="ご質問・お問い合わせ">ご質問・お問い合わせ</option>
      </select>
      <label for="name">お名前※</label>
      <input required type="text" name="name" placeholder="お名前" />
      <label for="phone_number">電話番号※</label>
      <input
        required
        type="text"
        name="phone_number"
        placeholder="07012345678"
      />
      <label for="email">Eメール</label>
      <input type="email" name="email" placeholder="sample@sample.com" />
      <label for="content">ご予約希望日時（ご質問・お問い合わせ内容）</label>
      <textarea
        name="content"
        placeholder="ご予約希望日時（ご質問・お問い合わせ内容）"
        cols="30"
        rows="10"
      ></textarea>
      <button type="submit">確認</button>
    </form>
    <!-- </client-only> -->
  </div>
</template>

<script>
export default {}
</script>

<style >
#contact {
  display: flex;
  justify-content: center;
  --contact-color: rgb(201, 201, 201);
  background: #040a11;
}

.contact-form {
  padding: 2rem 4rem;
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
