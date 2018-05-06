<template>
  <swiper :options="swiperOption" class="swiper">
      <swiper-slide v-for="(item,index) in swiperList" :key="item.id?item.id:index">
        <!-- <img class="swiper-img" :src="item.imgUrl" alt=""> -->
        <slot :item="item"></slot>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination" v-show="swiperList.length>1"></div>
    </swiper>
</template>
<script>
export default {
  // name: "Swiper",  //name 的作用是什么？ 会导致程序栈溢出
  props: {
    swiperList: {
      type: Array,
      default() {
        return [];
      }
    },
    loop: {
      type: Boolean,
      default: true
    },
    autoplay: {
      type: Number,
      default: 1000
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: this.loop,
        autoplay: this.autoplay,
        autoplayDisableOnInteraction: false // 用户手动操作后不停止轮播
      }
    };
  }
};
</script>
<style lang="stylus" scoped>
.swiper {
  // overflow: hidden
  width: 100%;

  // height: 0
  // padding-bottom: 31.25%
  // background: #eee
  .swiper-img {
    width: 100%;
  }
}
</style>
