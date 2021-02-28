<template>
  <div class="page">
    <div class="header-container">
      <div class="header-banner container" style="min-height: 445.59px">
        <div class="black-back"></div>
        <img
          class="logo"
          width="320"
          :src="require('~/assets/logo.png')"
          alt="Rio　カンパニーロゴ"
        />

        <div class="header-content">
          <!-- <img
            class="banner"
            lazy
            :src="require('~/assets/banner.jpg')"
            alt=""
          /> -->
          <!-- <img :src="require('~/assets/banner2.jpg')" alt="" class="banner2" /> -->
          <h1>
            世界が認めた日本初の <br />
            ラグジュアリーオーダーシューズブランド
            <span style="font-weight: bold; font-size: 4.5rem; color: #b8ab78"
              >Rio</span
            >
          </h1>
          <h2>『世界で一番の靴をあなたが創る』</h2>
          <button style="margin-bottom: 0rem" @click="scrollToContact">
            ご購入へ
          </button>
        </div>
      </div>
    </div>

    <main class="main-content">
      <div class="line"></div>
      <div class="container">
        <div class="title">
          <h3 style="padding-left: 0.5rem">
            <span style="color: var(--secondary-color); font-style: italic"
              >Rio Shoes</span
            >
            7つの特徴
          </h3>
          <div class="line-horizontal" style="width: 40rem"></div>
        </div>

        <ol class="feature-list">
          <li class="feature-item" v-for="(item, index) of list" :key="index">
            <h4 class="feature-title">{{ index + 1 }}, {{ item.title }}</h4>
            <p class="feature-desc" v-html="item.desc"></p>
          </li>
        </ol>
        <img
          class="product-log"
          lazy
          :src="require('~/assets/logo.png')"
          alt="Rio　カンパニーロゴ"
        />
        <!-- <div class="feature-product feature-product--3">
          <div class="feature-container">
            <img :src="require('~/assets/banner.jpg')" />
            <p>商品説明ーー型</p>
          </div>
        </div> -->
        <!-- <div class="feature-product feature-product--1">
          <div class="feature-container">
            <img :src="require('~/assets/product-2.jpg')" />

            <p>商品説明ーー型</p>
          </div>
        </div> -->
        <!-- <div class="feature-product feature-product--2">
          <div class="feature-container">
            <p>商品説明ーー型</p>
            <img :src="require('~/assets/product-1.jpg')" />
          </div>
        </div> -->
      </div>
      <div class="container">
        <div class="title">
          <h3 style="padding-left: 0.5rem">実績</h3>
          <div class="line-horizontal" style="width: 15rem"></div>
        </div>
        <jisseki-card></jisseki-card>
        <!-- <h4></h4> -->
        <!-- <h4 style="padding-left: 0.5rem"></h4> -->
      </div>
      <div class="container">
        <div class="title">
          <h3 style="padding-left: 0.5rem">お客様の声</h3>
          <div class="line-horizontal" style="width: 25rem"></div>
        </div>
        <testimonial-card></testimonial-card>
      </div>
      <div class="container">
        <div class="title">
          <h3 style="padding-left: 0.5rem">商品の一覧</h3>
          <div class="line-horizontal" style="width: 25rem"></div>
        </div>
        <product-list></product-list>
      </div>
      <div class="container">
        <div class="title">
          <h3 style="padding-left: 0.5rem">
            <span style="color: var(--secondary-color); font-style: italic"
              >Rio's </span
            >Story
          </h3>
          <div class="line-horizontal" style="width: 24rem"></div>
        </div>
        <rio-story></rio-story>
      </div>
      <div class="container">
        <div class="title">
          <h3 style="padding-left: 0.5rem">購入の流れ</h3>
          <div class="line-horizontal" style="width: 25rem"></div>
        </div>
        <step-list @contact="scrollToContact"> </step-list>
      </div>
      <contact-form></contact-form>
    </main>
    <social-card></social-card>
    <!-- <hr style="border-color: var(--secondary-color)" /> -->
    <FooterCard></FooterCard>
  </div>
</template>

<script>
import ContactForm from '~/components/Contact'
import RioStory from '~/components/RioStory'
import ProductList from '~/components/ProductList'
import SocialCard from '~/components/Social'
import FooterCard from '~/components/Footer'
import StepList from '~/components/StepBy'
import JissekiCard from '~/components/Jisseki'
import TestimonialCard from '~/components/Testimonial'

export default {
  data: () => ({
    list: [
      {
        title: 'Japanese Form',
        desc: '至高ヨーロッパモデルを日本人の足に合わせ、こだわりの形を実現',
      },
      {
        title: 'Patine',
        desc:
          '職人が5年の歳月をかけ完成させた、油剤にもこだわり抜いた世界最高峰の染色技術',
      },
      {
        title: 'Design',
        desc:
          '本場ヨーロッパの高級感レザーが織りなす美しいデザインは、海外デザイナーも絶賛',
      },
      {
        title: 'Size',
        desc: 'アスリートも認めた豊富なサイズ展開、最大31cm対応',
      },
      {
        title: 'Color Variation',
        desc:
          'レザーカラーや靴底のカラー、こだわりのカスタマイズで世界に一足のシューズを',
      },
      {
        title: 'Functionality',
        desc:
          '特別なフィット感はシューズを長持ちさせ、足や身体への負担を軽減。履き心地も一流に',
      },
      {
        title: 'Low price',
        desc:
          '独自の生産工程により、オーダーメイドの常識を覆す衝撃の低価格&短納期を実現 <br/>オーダーシューズが¥39,800~',
      },
    ],
  }),
  mounted() {
    // const
    if (
      !('IntersectionObserver' in window) ||
      !('IntersectionObserverEntry' in window) ||
      !('intersectionRatio' in window.IntersectionObserverEntry.prototype)
    ) {
      const list = document.querySelectorAll('.line-horizontal')
      list.forEach((item) => {
        item.classList.add('line-in')
      })
    } else {
      this.observeLines()
    }
  },
  methods: {
    scrollToContact() {
      document
        .getElementById('contact')
        .scrollIntoView({ behavior: 'smooth', block: 'start' })
    },
    observeLines() {
      const observe = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('line-in')
            observe.unobserve(entry.target)
          }
        })
      })
      const list = document.querySelectorAll('.line-horizontal')
      list.forEach((item) => {
        observe.observe(item)
      })
    },
  },
  components: {
    ContactForm,
    RioStory,
    ProductList,
    SocialCard,
    FooterCard,
    StepList,
    JissekiCard,
    TestimonialCard,
  },
}
</script>

<style>
.title {
  position: relative;
}
.header-content {
  animation: appear-header 200ms linear;
}

@keyframes appear-header {
  from {
    transform: translateY(-10px);
  }
  to {
    transform: translateY(0);
  }
}

.product-log {
  position: absolute;
  right: 0;
  bottom: 50px;
  z-index: -1;
  transform: rotate(360deg);
  width: 450px;
  opacity: 0.8;
}

.main-content {
  position: relative;
}

h3 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
}
@media screen and (min-width: 750px) {
  .container {
    padding: 2rem 5rem;
  }
}

@media screen and (max-width: 750px) {
  .container {
    padding: 2rem 5rem;
    padding-right: 1rem;
    /* min-height: 445.59px; */
  }
}
.container {
  position: relative;
}
.line {
  position: absolute;
  content: '';
  width: 1px;
  border-radius: 10rem;
  background: var(--secondary-color);
  height: 100%;
  left: 5rem;
  opacity: 0.9;
  z-index: -1;
  top: 0;
}

@keyframes slide-in {
  from {
    transform: translateX(40px);
  }
  to {
    transform: translateX(-40px);
  }
}

.line-in {
  animation: slide-in 200ms linear;
  animation-fill-mode: forwards;
}
.line-horizontal {
  position: absolute;
  content: '';
  height: 1px;
  background: var(--secondary-color);
  bottom: 0;
  /* left: -40px; */
  width: 100%;
}
.feature-list {
  padding-left: 1rem;
  list-style: none;
  position: relative;
}
.feature-item {
  margin-bottom: 2rem;
}
h4 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}
.feature-desc {
  padding-left: 2rem;
  font-size: 2rem;
}
@keyframes banner-animation {
  from {
    opacity: 0.5;
  }
  to {
    opacity: 1;
  }
}

.black-back {
  background-image: url('~/assets/banner.jpg');
  background-position: 0 75%;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  height: 100%;
  animation: banner-animation 200ms ease-in-out;
  /* background-color: #606568; */
  width: 100%;
  min-height: 445.59px;
  /* background: black; */
  left: 0;
  top: 0;
  content: '';
  z-index: -1;
}
@media screen and (max-width: 1200px) {
  .product-log {
    position: absolute;
    /* right: 10px; */
    top: 270px;
    width: 350px;
    /* opacity: 0.5; */
    z-index: -1;
  }
}
@media screen and (max-width: 1059px) {
  .product-log {
    position: absolute;
    /* right: 10px; */
    top: 270px;
    width: 350px;
    opacity: 0.5;
    z-index: -1;
  }
}
@media screen and (max-width: 988px) {
  .product-log {
    position: absolute;
    /* right: 10px; */
    top: 270px;
    width: 300px;
    opacity: 0.5;
    z-index: -1;
  }
}
@media screen and (max-width: 750px) {
  .black-back {
    background-position: 40% 75%;
  }
  .product-log {
    position: absolute;
    right: 10px;
    top: 250px;
    width: 200px;
    opacity: 0.5;
    z-index: -1;
  }
  .line-horizontal {
  }
  .banner2 {
    display: none;
  }

  .black-back {
    opacity: 0.5;
  }

  .header-banner {
    position: relative;
    width: 100%;
    display: flex;
    padding: 1rem;

    /* height: 300px; */
    /* padding: 10px; */
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .logo {
    width: 320px;
  }
  .black-back {
  }

  .banner {
    position: absolute;
    width: 100vw;
    left: 0;
    top: 0;
    z-index: -1;
    opacity: 0.7;
    /* display: none; */
  }
  h2,
  h1 {
    z-index: 5;
  }
  h1 {
    font-size: 2.2rem;
  }
  h2 {
    font-size: 2.3rem;
  }
  .header-content {
    text-align: center;
  }
  button {
    margin: 1.5rem 0;
    padding: 1.5rem 5rem;
  }
}

@media screen and (min-width: 1126px) {
  .header-container {
    padding-top: 0 !important;
    width: 100vw !important;
    position: relative;
    /* max-height: 100vh; */
    height: 800px;
    box-sizing: border-box;
    /* overflow: hidden; */
  }
}
.feature-product p {
  font-size: 2rem;
  text-align: center;
  font-weight: bold;
}
@media screen and (min-width: 750px) {
  .header-container {
    padding-top: 70%;
    position: relative;
    max-height: 100vh;
    box-sizing: border-box;
  }
  .header-banner {
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    height: 100%;
    /* padding-top: -70%; */
    padding: 20px;
    /* padding-bottom: 0.5rem !important; */
    max-height: 100vh;
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: row;
  }
  h1 {
    font-size: 3rem;
    z-index: 2;
  }
  h2 {
    font-size: 2rem;
    z-index: 2;
    text-align: right;
  }
  .logo {
    position: absolute;
    right: -10px;
    top: -50px;
    z-index: 1;
    width: 550px;
    transform: rotate(-10deg);
    border-radius: 1000px;
  }
  .banner {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
    /* height: 300px; */
    width: 100vw;
    /* aspect-ratio: 1.4150943396; */
    /* height: 100%; */
  }
  .header-content {
    /* margin-right: 5rem; */
    display: flex;
    flex-direction: column;
    /* background: rgba(0, 0, 0, 0.014); */
    padding-right: 1rem;
  }
  button {
    align-self: flex-end;
    margin: 1rem 0;
  }
}
</style>
