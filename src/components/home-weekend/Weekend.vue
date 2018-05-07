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
  props: {
    weekendList: Array
  },
  data() {
    return {
    };
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.weekend {
  .title {
    width: 100%;
    height: 0.6rem;
    line-height: 0.6rem;
    background: #eee;
    padding-left: 0.2rem;
  }

  .weekend-con {
    .weekend-item {
      .item-img-wrapper {
        height: 0;
        padding-bottom: 35%;
        overflow: hidden;

        .item-img {
          width: 100%;
        }
      }

      .item-info {
        padding: 0.2rem;

        .item-title {
          line-height: 0.38rem;
          ellipsis();
        }

        .item-desc {
          line-height: 0.38rem;
          margin-top: 0.1rem;
          font-size: 0.24rem;
          color: #616161;
          ellipsis();
        }
      }
    }
  }
}
</style>
