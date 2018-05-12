<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg" alt="">
      <div class="banner-info">
        <div class="title">故宫(AAAAA景区)</div>
        <div class="img-num">
          <span class="iconfont icon-img"></span>10
        </div>
      </div>
    </div>
    <detail-gallery @close="handleBannerClose" v-show="galleryShow"></detail-gallery>
  </div>
</template>

<script>
import DetailGallery from '@/components/gallery/Gallery.vue'
export default {
  data() {
    return {
      galleryShow: false
    }
  },
  methods: {
    handleBannerClick() {
      this.galleryShow = true;
    },
    handleBannerClose() {
      this.galleryShow = false;
    }
  },
  components: {
    DetailGallery
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;

  .banner-img {
    width: 100%;
  }

  .banner-info {
    display: flex;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    line-height: 0.6rem;
    height: 0.6rem;
    color: #fff;

    .title {
      flex: 1;
      padding-left .2rem;
      ellipsis();
    }

    .img-num {
      padding: 0 0.1rem;
      border-radius: 0.1rem;
      background: rgba(0, 0, 0, 0.5);
      height: 0.4rem;
      line-height: 0.4rem;
      margin-top: .1rem;
    }
  }
}
</style>
