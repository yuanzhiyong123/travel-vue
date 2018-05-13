<template>
  <div class="introduce">
    <div class="introduce-info border-bottom">
      <div class="left-wrapper border-right">
        <div class="score-wrapper">
          <span class="score">4.9</span>
          <span class="text">分</span>
          <span class="des">很棒</span>
        </div>
        <div class="comment-wrapper">
          <span class="total-comment">100条品论</span>
          <span class="total-strategy">15条攻略</span>
        </div>
      </div>
      <div class="right-wrapper">
        <div class="title">景点介绍</div>
        <div class="desc">开放时间,贴士</div>
      </div>
    </div>
    <div class="address">
      <span class="iconfont icon-map"></span>
      <p class="desc">辽宁省大连市沙河口区中山路608-6-8号（星海广场西500米，星海公园内）</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.introduce {
  .introduce-info {
    display: flex;
    padding: 0.1rem 0.2rem;

    .left-wrapper {
      flex: 1;

      .score-wrapper {
        color: #ff8300;

        .score {
          font-size: 0.44rem;
          line-height: 0.44rem;
        }

        .text {
          font-size: 0.28rem;
          line-height: 0.48rem;
        }

        .desc {
          font-size: 0.28rem;
          line-height: 0.48rem;
          margin-left: 0.2rem;
        }
      }

      .comment-wrapper {
        .total-comment, .total-strategy {
          font-size: 0.24rem;
          color: #9e9e9e;
          line-height: 0.32rem;
          margin-right: 0.2rem;
        }
      }
    }

    .right-wrapper {
      flex: 1;
      padding-left: 0.3rem;

      .title {
        font-size: 0.28rem;
        color: #212121;
        line-height: 0.48rem;
      }

      .desc {
        color: #9e9e9e;
        font-size: 0.24rem;
      }
    }
  }

  .address {
    position: relative;
    padding: 0.2rem;

    .desc {
      padding-left: 0.5rem;
      font-size: 0.32rem;
      line-height: 0.4rem;
    }

    .icon-map {
      position: absolute;
      top:.4rem;
      left: .2rem;
      font-size: .4rem;

    }
  }
}
</style>
