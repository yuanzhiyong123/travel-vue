<template>
  <div class="weekend">
    <div class="title">周末去哪</div>
    <ul class="weekend-con">
      <li class="weekend-item"
        v-for="item in weekendList"
        :key="item.id"
      >
        <div class="item-img-wrapper">
          <img :src="item.imgUrl" alt="" class="item-img">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      weekendList: [
        {
          id: '001',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1603/6d/2f67ae0659f41f.jpg_r_640x214_bf6cbd0b.jpg',
          title: '北京赏花好地方',
          desc: '乱花渐欲迷人眼，京城赏花大搜索'
        },
        {
          id: '002',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg',
          title: '北京必游TOP10',
          desc: '来北京必去的景点非这些地方莫属'
        },
        {
          id: '003',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/ce/bc89bc2f0e33ea.jpg_r_640x214_3e408453.jpg',
          title: '学生最爱的博物馆',
          desc: '周末干嘛？北京很多博物馆已经免费开放啦'
        }
      ]
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.weekend {
  .title {
    width: 100%;
    height: 0.6rem;
    line-height: 0.6rem;
    background: #eee;
    padding-left: 0.2rem;
  }
  .weekend-con{
    .weekend-item{
      .item-img-wrapper{
        height: 0;
        padding-bottom: 35%;
        overflow :hidden;
        .item-img{
          width:100%;
        }
      }
      .item-info{
        padding:.2rem;
        .item-title{
          line-height .38rem;
          ellipsis();
        }
        .item-desc{
          line-height .38rem;
          margin-top:.1rem;
          font-size:.24rem;
          color: #616161;
          ellipsis();
        }
      }
    }
  }
}
</style>
