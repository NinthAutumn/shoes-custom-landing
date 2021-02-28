<template>
  <div style="width: 100%" class="slides product-list">
    <!-- Using the slider component -->
    <swiper :options="swiperOptions">
      <swiper-slide v-for="item of list" :key="item.img">
        <div class="img-container">
          <img lazy :src="item.img" alt="" />
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  data: () => ({
    list: [
      { img: require('~/assets/product-5.jpg') },
      { img: require('~/assets/product-10.jpg') },
      { img: require('~/assets/product-6.jpg') },
      { img: require('~/assets/product-7.jpg') },
      { img: require('~/assets/product-8.jpg') },
      { img: require('~/assets/product-9.jpg') },

      // { img: require('~/assets/product-1.jpg') },
      // { img: require('~/assets/product-2.jpg') },
      // { img: require('~/assets/banner.jpg') },
    ],
    //Slider configuration [obj]
    swiperOptions: {
      slidesPerView: 'auto',
      spaceBetween: 15,

      autoplay: false,
    },
  }),
}
</script>

<style >
@media screen and (max-width: 750px) {
  .product-list .swiper-slide {
    width: 200px !important;
  }
  .product-list .swiper-slide img {
    width: 200px !important;
  }
}

.product-list .swiper-slide .img-container {
  /* padding-top: 71%; */
  height: 100%;
}
.product-list .swiper-slide img {
  display: block;
  /* max-width: 100%; */
  max-height: 100%;
  height: 100%;
  /* position: absolute; */
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
@media screen and (min-width: 750px) {
  .product-list .swiper-slide {
    width: 300px !important;
  }
  .product-list .swiper-slide img {
    width: 300px !important;
  }
}
</style>
