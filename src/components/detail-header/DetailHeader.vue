<template>
  <div class="detail-header">
    <router-link tag="div" class="abs" to="/" v-show="absShow">
      <span class="iconfont icon-fanhui"></span>
    </router-link>
    <div class="fixed" v-show="!absShow" :style="fixedStyle">
      <router-link class="header-back" to="/">
        <span class="iconfont icon-fanhui"></span>
      </router-link>
      <span class="title">景区详情</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      absShow: true,
      fixedStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll() {
      let scrollTop = document.documentElement.scrollTop;
      if(scrollTop > 43) {
        let opacity = scrollTop / 200;
        if(opacity >= 1) {
          opacity = 1;
        }
        this.absShow = false;
        this.fixedStyle.opacity = opacity;
      } else {
        this.absShow = true;
      }
    }
  },
  activated() {
    window.addEventListener('scroll', this.handleScroll, false);
  },
  deactivated() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/common.styl';

.detail-header {
  position: absolute;
  top: 0;
  left: 0;

  .abs {
    position: absolute;
    left: 0.1rem;
    top: 0.1rem;
    width: 0.8rem;
    height: 0.8rem;
    line-height: 0.8rem;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.8);
    text-align: center;
    font-size: 0.4rem;
    color: #fff;
  }

  .fixed {
    position: fixed;
    width: 100%;
    height: $headerHeight;
    line-height: $headerHeight;
    text-align: center;
    background: $bgColor;
    color: #fff;

    .header-back {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: 0.64rem;
      text-align: center;
      color: #fff;
    }
  }
}
</style>
