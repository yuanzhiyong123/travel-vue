<template>
  <div class="container" @click="handleBannerClose">
    <div class="wrapper">
      <swiper :swiperList="imgs" :loop="false" :autoplay="0" paginationType="fraction">
        <template slot-scope="props">
          <img class="img" :src="props.item" alt="">
        </template>
      </swiper>
    </div>
  </div>
</template>

<script>
import Swiper from "@/components/swiper/Swiper";
export default {
  data() {
    return {
      imgs: [
        "http://img1.qunarzz.com/sight/p55/201211/04/fbcab3e5d6479ce893835fbb.jpg_r_800x800_6360f514.jpg",
        "http://img1.qunarzz.com/sight/p0/1410/e3/73da8d3e19cdc41c1932d4fcd22ec792.water.jpg_r_800x800_7f96ccf9.jpg"
      ]
    };
  },
  methods: {
    handleBannerClose() {
      this.$emit('close');
    }
  },
  components: {
    Swiper
  }
};
</script>

<style lang="stylus" scoped>
.container>>>.swiper-pagination {
  bottom: -1rem;
  color: #fff;
}

.container>>>.swiper-container {
  overflow: inherit;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: #000;

  .wrapper {
    height: 0;
    padding-bottom: 100%;

    .img {
      width: 100%;
    }
  }
}
</style>
