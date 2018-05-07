<template>
    <div>
      <home-header ></home-header>
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
</template>
<script>
import HomeHeader from "@/components/home-header/HomeHeader.vue";
import Swiper from "@/components/swiper/Swiper.vue";
import HomeNav from "@/components/home-nav/HomeNav.vue";
import HomeRecommend from "@/components/home-recommend/Recommend.vue";
import HomeWeekend from "@/components/home-weekend/Weekend.vue";
import Axios from "axios";
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
  methods: {
    getResource() {
      Axios.get("/static/mock/index.json").then(res => {
        this.resourceList = res.data.data;
        this.navList = res.data.data.iconList;
        console.log(this.resourceList.iconList);
      });
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
<style>
.swiper-img {
  width: 100%;
}
</style>
