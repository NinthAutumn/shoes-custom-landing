<template>
  <div style="width: 100%" class="slides">
    <!-- Using the slider component -->
    <swiper :options="swiperOptions">
      <swiper-slide v-for="item of list" :key="item.img">
        <img :src="item.img" alt="" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  data: () => ({
    list: [
      { img: require('~/assets/product-1.jpg') },
      { img: require('~/assets/product-2.jpg') },
      { img: require('~/assets/banner.jpg') },
    ],
    //Slider configuration [obj]
    swiperOptions: {
      slidesPerView: 'auto',
      spaceBetween: 15,
      pagination: {
        el: '.swiper-pagination',
      },
      autoplay: {
        delay: 1000,
      },
    },
  }),
}
</script>

<style >
@media screen and (max-width: 750px) {
  .swiper-slide {
    width: 200px !important;
  }
  .swiper-slide img {
    width: 200px !important;
  }
}
@media screen and (min-width: 750px) {
  .swiper-slide {
    width: 300px !important;
  }
  .swiper-slide img {
    width: 300px !important;
  }
}
</style>
