<template>
  <div class="recommend">
    <div class="title">热门推荐</div>
    <ul class="recommend-con">
      <li class="recommend-item border-bottom"
        v-for="item in recommendList"
        :key="item.id"
      >
        <div class="img-wrapper">
          <img :src="item.imgUrl" alt="" class="item-img">
        </div>
        <div class="item-con">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <div class="item-address">出发地:北京</div>
          <div class="item-price">¥100</div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    recommendList: Array
  }
};
</script>
<style lang="stylus" scoped>
.recommend {
  .title {
    width: 100%;
    height: .6rem;
    line-height: .6rem;
    background #eee;
    padding-left .2rem;
  }
  .recommend-con{
    padding:0 .2rem;
    .recommend-item{
      display: flex;
      height : 2rem;
      padding: .1rem 0;
      .img-wrapper{
        flex: 0 0 2rem;
        width:2rem;
        height :2rem;
        .item-img{
          width:100%;
          height :100%;
        }
      }
      .item-con{
        position relative;
        flex: 1;
        margin-left .2rem;
        .item-title{
          line-height .38rem;
        }
        .item-desc{
          margin-top:.1rem;
          color:#ccc;
        }
        .item-address{
          position absolute;
          bottom: .1rem;
          color: #616161;
        }
        .item-price{
          position: absolute;
          right: .1rem;
          bottom: .1rem;
          color: #ff8300;
        }
      }
    }
  }
}
</style>
