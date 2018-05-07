<template>
  <ul class="nav">
    <swiper :swiperList="pages" :loop="false" :autoplay="0">
      <template slot-scope="props">
        <li class="nav-item" v-for="list in props.item" :key="list.id">
          <a href="#">
            <div class="img-wrapper">
              <img :src="list.imgUrl" alt="" class="img">
            </div>
            <p class="nav-desc">{{list.desc}}</p>
          </a>
        </li>
        <!-- <span>{{props.item}}</span> -->
      </template>
    </swiper>
  </ul>
</template>
<script>
import Swiper from "@/components/swiper/Swiper.vue";
export default {
  props: {
    navList: Array
  },
  computed: {
    pages() {
      var pages = [];
      this.navList.forEach((item, index) => {
        var page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  },
  components: {
    Swiper
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.nav >>> .swiper-container {
  height: 0;
  padding-bottom: 50%;
}

.nav {
  margin: 0.2rem 0 0.2rem 0;

  .nav-item {
    position: relative;
    float: left;
    width: 25%;
    padding-bottom: 25%;

    .img-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.44rem;
      box-sizing: border-box;
      padding: 0.1rem;
      text-align: center;
      overflow: hidden;

      .img {
        height: 100%;
      }
    }

    .nav-desc {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      text-align: center;
      ellipsis();
    }
  }
}
</style>
