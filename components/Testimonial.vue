<template>
  <div class="test-card">
    <div class="test-container">
      <!-- <client-only> -->
      <div v-swiper:mySwiper="swiperOptions">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item of list" :key="item.img">
            <div class="test-item">
              <h4>{{ item.title }}</h4>
              <p>
                <span>『</span>
                {{ item.text }}
                <span>』</span>
              </p>
            </div>
          </div>
        </div>
        <div id="swiper-pagination" slot="pagination"></div>
        <!-- <div class="swiper-button-next" slot="button-next"></div> -->
        <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
      </div>
      <!-- </client-only> -->
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    list: [
      {
        title: 'Aさん (営業職)',
        text:
          ' オーダーシューズは初めてでしたが、履いていても疲れにくく、傷みにくいのを感じました。耐久性にも非常に満足しています。このクオリティーで¥39,800~に驚きました。もう1足注文したいと思います。',
      },
      {
        title: 'Sさん (経営者)',
        text:
          '普段から革靴にはこだわりがあり、自分でオーダーして作れるものを探していました。たまたま広告で知り購入させて頂きました。他のハイブランドに負けない手の込んだデザインで、履き心地も最高でした。想像を超えた出来でした。ありがとうございます。',
      },
      {
        title: 'Kさん (プロ野球選手)',
        text:
          '足のサイズが大きく(31cm)履けるサイズが少なかった私でもデザイン、塗り方までこだわりながら選べ、とても満足です。デザインにもとても満足しており、また最高の履き心地です。',
      },
      // { img: require('~/assets/product-3.jpg') },
    ],
    swiperOptions: {
      slidesPerView: 1,
      spaceBetween: 15,
      pagination: {
        el: '#swiper-pagination',
      },
      autoplay: {
        delay: 5000,
      },
    },
  }),
}
</script>

<style >
.test-card {
  /* background: white; */
}
.test-item h4 {
}
.test-item span {
  font-weight: bold;
  font-size: 3rem;
}
.test-item p {
  font-size: 2rem;
}
.swiper-pagination-bullet {
  background: white !important;
}
.test-card #swiper-pagination {
  bottom: 0px !important;
  /* left: 0; */
  /* z-index: 100; */
  width: 100%;
  margin: 0 auto !important;
  left: 0;
  right: 0;
  position: absolute !important;
  display: flex;
  justify-content: center;
}
.test-item {
  padding: 4rem 2rem;
  text-align: center;
  width: 100%;
  cursor: pointer;
  user-select: none;
  /* min-width: 20rem; */
}
</style>
