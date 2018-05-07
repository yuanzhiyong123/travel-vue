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
          <p class="item-desc">已售2566</p>
          <div class="item-address">出发地:北京</div>
          <div class="item-price">¥{{item.price}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      recommendList: [
        {
          id: '001',
          imgUrl: 'https://imgs.qunarzz.com/p/tts2/1804/97/382b3bd308aea002.jpg_160x160_a24dc648.jpg',
          title: '【去哪儿专线】天安门+故宫+八达岭+鸟巢（配耳麦+赠珍宝馆）',
          price: '100'
        },
        {
          id: '002',
          imgUrl: 'https://imgs.qunarzz.com/p/tts9/1803/eb/ab21dece1058d502.jpg_160x160_8e23825b.jpg',
          title: '【7-10-12点】八达岭长城门票+往返直通车，纯玩配领队',
          price: '150'
        },
        {
          id: '003',
          imgUrl: 'https://imgs.qunarzz.com/p/tts0/1805/ce/4fb9e9918d254b02.jpg_160x160_4381a9af.jpg',
          title: '【去哪儿专线】北京八达岭长城+十三陵定陵含地宫鸟巢纯玩一日游',
          price: '120'
        },
        {
          id: '004',
          imgUrl: 'https://imgs.qunarzz.com/p/tts2/1804/97/382b3bd308aea002.jpg_160x160_a24dc648.jpg',
          title: '【去哪儿专线】天安门+故宫+八达岭+鸟巢（配耳麦+赠珍宝馆）',
          price: '40'
        }
      ]
    }
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
