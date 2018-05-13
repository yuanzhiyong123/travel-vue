<template>
    <div>
      <home-header ></home-header>
      <div class="home-list" ref="homeList">
        <div>
          <div class="swiper-wrapper">
            <swiper :autoplay="3000" :swiperList="resourceList.swiperList">
              <template slot-scope="props">
                <!-- <span>{{props.item.id}}</span> -->
                <img class="swiper-img" :src="props.item.imgUrl" alt="">
              </template>
            </swiper>
          </div>
          <home-nav :navList="navList"></home-nav>
          <home-recommend :recommendList="resourceList.recommendList"></home-recommend>
          <home-weekend :weekendList="resourceList.weekendList"></home-weekend>
        </div>
      </div>
    </div>
</template>
<script>
import HomeHeader from "@/components/home-header/HomeHeader.vue";
import Swiper from "@/components/swiper/Swiper.vue";
import HomeNav from "@/components/home-nav/HomeNav.vue";
import HomeRecommend from "@/components/home-recommend/Recommend.vue";
import HomeWeekend from "@/components/home-weekend/Weekend.vue";
import Axios from "axios";
import { mapGetters } from "vuex";
import BScroll from "better-scroll";
export default {
  name: "Home",
  data() {
    return {
      resourceList: {},
      navList: []
    };
  },
  created() {
    this.getResource();
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.homeList, {
      click: true
    });
  },
  computed: {
    ...mapGetters(["city"])
  },
  methods: {
    getResource() {
      Axios.get("/api/index.json?city=" + this.city).then(res => {
        this.resourceList = res.data.data;
        this.navList = res.data.data.iconList;
      });
    }
  },
  watch: {
    city() {
      this.getResource();
    }
  },
  components: {
    HomeHeader,
    Swiper,
    HomeNav,
    HomeRecommend,
    HomeWeekend
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/common.styl'
.home-list {
  position: absolute;
  top: $headerHeight;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;

  .swiper-img {
    width: 100%;
  }
}
</style>
