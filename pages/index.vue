<template>
  <div class="page">
    <div class="header-container">
      <div class="header-banner container">
        <div class="black-back"></div>
        <img class="logo" lazy :src="require('~/assets/logo.png')" alt="" />

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
            <span style="color: var(--secondary-color)">Rio</span>
          </h1>
          <h2>『世界で1番の靴をあなたが創る』</h2>
          <button @click="scrollToContact">ご購入へ</button>
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
          alt=""
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

        <!-- <h4></h4> -->
        <h4 style="padding-left: 0.5rem">お客様の声</h4>
      </div>
      <div class="container">
        <div class="title">
          <h3 style="padding-left: 0.5rem">商品の一覧</h3>
          <div class="line-horizontal" style="width: 24rem"></div>
        </div>
        <client-only>
          <product-list></product-list>
        </client-only>
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
    </main>
    <contact-form></contact-form>
  </div>
</template>

<script>
import ContactForm from '~/components/Contact'
import RioStory from '~/components/RioStory'
import ProductList from '~/components/ProductList'
export default {
  data: () => ({
    list: [
      {
        title: 'Japanese Form',
        desc:
          '至高ヨーロッパモデルを日本人の足に合わせ、こだわりぬいた形を実現',
      },
      {
        title: 'Patine',
        desc:
          '職人が5年の歳月をかけ完成させた、油剤にもこだわった驚きのパティーヌ技術',
      },
      {
        title: 'Design',
        desc:
          'イタリア、スペイン製の革が織りなすシューズのデザイン、<br/>あなたの理想のデザインがきっとある',
      },
      {
        title: 'Size',
        desc: 'アスリートも認めた豊富なサイズ展開、最大31cm対応',
      },
      {
        title: 'Color variation',
        desc: '組合わせ自由の数多くのカラーバリエーション',
      },
      {
        title: 'Functionality',
        desc: '長持ちし、足への負担を軽減。履き心地にもこだわる',
      },
      {
        title: 'Low price',
        desc:
          'オーダーメイドの常識を覆す衝撃の低価格&短納期を実現 <br/>オーダーメイドシューズが¥39,800〜',
      },
    ],
  }),
  mounted() {
    // const
    this.observeLines()
  },
  methods: {
    scrollToContact() {
      document
        .getElementById('contact')
        .scrollIntoView({ behavior: 'smooth', block: 'start' })
    },
    observeLines() {
      const observe = new IntersectionObserver((entries) => {
        const entry = entries.find((entry) => entry.isIntersecting)

        if (entry) {
          entry.target.classList.add('line-in')
          observe.unobserve(entry.target)
        }
      })
      const list = document.querySelectorAll('.line-horizontal')
      list.forEach((item) => {
        console.log(item)
        observe.observe(item)
      })
    },
  },
  components: {
    ContactForm,
    RioStory,
    ProductList,
  },
}
</script>

<style>
.title {
  position: relative;
}

.product-log {
  position: absolute;
  right: 50px;
  bottom: 50px;
  transform: rotate(360deg);
  /* width: 500px; */
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
  background: rgb(156, 156, 156);
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
  background: rgb(156, 156, 156);
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

.black-back {
  background-image: url('~/assets/banner.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  height: 100%;
  width: 100%;
  /* background: black; */
  left: 0;
  top: 0;
  content: '';
  z-index: -1;
}
@media screen and (max-width: 988px) {
  .product-log {
    position: absolute;
    /* right: 10px; */
    top: 270px;
    width: 300px;
    opacity: 0.5;
  }
}
@media screen and (max-width: 750px) {
  .product-log {
    position: absolute;
    right: 10px;
    top: 250px;
    width: 200px;
    opacity: 0.5;
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
    /* height: 300px; */
    /* padding: 10px; */
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .logo {
    width: 300px;
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
    font-size: 2rem;
  }
  .header-content {
    text-align: center;
  }
  button {
    margin: 1rem 0;
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
    height: 450px;
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
  }
  button {
    align-self: flex-end;
    margin: 1rem 0;
  }
}
</style>
