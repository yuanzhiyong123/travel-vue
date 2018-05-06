<template>
    <div>
      <home-header></home-header>
      <div class="swiper-wrapper">
        <swiper :autoplay="3000" :swiperList="swiperList"></swiper>
      </div>
    </div>
</template>
<script>
import HomeHeader from '@/components/home-header/HomeHeader.vue'
import Swiper from '@/components/swiper/Swiper.vue'
export default {
  name: 'Home',
  data() {
    return {
      swiperList: [
        {
          id: "0001",
          imgUrl:
            "https://imgs.qunarzz.com/piao/fusion/1804/5c/969bfa7af00a2702.jpg_640x170_ec465291.jpg"
        },
        {
          id: "0002",
          imgUrl:
            "https://imgs.qunarzz.com/piao/fusion/1803/bd/04554e7c67650302.jpg_640x170_a793a191.jpg"
        }
      ]
    }
  },
  components: {
    HomeHeader,
    Swiper
  }
}
</script>
<style>

</style>
