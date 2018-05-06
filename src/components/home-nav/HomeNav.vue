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
  data() {
    return {
      navList: [
        {
          id: '001',
          imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1606/b3/0249b48a69aaf49a.png',
          desc: '周边游'
        },
        {
          id: '002',
          imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1704/fd/7b733d3656f4d002.png',
          desc: '八达岭'
        },
        {
          id: '003',
          imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1703/5a/612ae0fee636d202.jpg',
          desc: '故宫'
        },
        {
          id: '004',
          imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1606/72/65b06c9a1158de9a.png',
          desc: '北镇'
        },
        {
          id: '005',
          imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1804/53/f7c33a4412d59e02.png',
          desc: '专线'
        },
        {
          id: '006',
          imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1606/b3/0249b48a69aaf49a.png',
          desc: '周边游'
        },
        {
          id: '007',
          imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1606/b3/0249b48a69aaf49a.png',
          desc: '周边游'
        },
        {
          id: '008',
          imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1606/b3/0249b48a69aaf49a.png',
          desc: '周边游'
        },
        {
          id: '009',
          imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1606/b3/0249b48a69aaf49a.png',
          desc: '周边游'
        }
      ]
    };
  },
  computed: {
    pages() {
      var pages = [];
      this.navList.forEach((item, index) => {
        var page = Math.floor(index / 8);
        if(!pages[page]) {
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
@import '~styles/mixins.styl'
.nav >>> .swiper-container {
  height: 0;
  padding-bottom: 50%;
}

.nav {
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
