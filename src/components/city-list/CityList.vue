<template>
  <div class="list" ref="city">
    <div>
      <div class="area">
          <div class="title border-topbottom">当前城市</div>
          <div class="button-list">
            <div class="button-wrapper">
              <div class="button">北京</div>
            </div>
          </div>
      </div>
      <div class="area">
          <div class="title border-topbottom">热门城市</div>
          <div class="button-list">
            <div class="button-wrapper">
              <div class="button">北京</div>
            </div>
            <div class="button-wrapper">
              <div class="button">北京</div>
            </div>
            <div class="button-wrapper">
              <div class="button">北京</div>
            </div>
            <div class="button-wrapper">
              <div class="button">北京</div>
            </div>
            <div class="button-wrapper">
              <div class="button">北京</div>
            </div>
            <div class="button-wrapper">
              <div class="button">北京</div>
            </div>
          </div>
      </div>
      <div class="area">
          <div class="title border-topbottom">A</div>
          <ul class="city-list">
            <li class="city-item border-bottom">西辛庄</li>
            <li class="city-item border-bottom">西辛庄</li>
            <li class="city-item border-bottom">西辛庄</li>
            <li class="city-item border-bottom">西辛庄</li>
            <li class="city-item border-bottom">西辛庄</li>
            <li class="city-item border-bottom">西辛庄</li>
          </ul>
      </div>
      <div class="area">
          <div class="title border-topbottom">A</div>
          <ul class="city-list">
            <li class="city-item border-bottom">西辛庄</li>
            <li class="city-item border-bottom">西辛庄</li>
            <li class="city-item border-bottom">西辛庄</li>
            <li class="city-item border-bottom">西辛庄</li>
            <li class="city-item border-bottom">西辛庄</li>
            <li class="city-item border-bottom">西辛庄</li>
          </ul>
      </div>
      <div class="area">
          <div class="title border-topbottom">A</div>
          <ul class="city-list">
            <li class="city-item border-bottom">西辛庄</li>
            <li class="city-item border-bottom">西辛庄</li>
            <li class="city-item border-bottom">西辛庄</li>
            <li class="city-item border-bottom">西辛庄</li>
            <li class="city-item border-bottom">西辛庄</li>
            <li class="city-item border-bottom">西辛庄</li>
          </ul>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll';
export default {
  mounted() {
    this.scroll = new BScroll(this.$refs.city, {
      click: true
    });
  }
};
</script>
<style lang="stylus" scoped>
.border-topbottom {
  &:before {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}

.border-bottom {
  &:before {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}

.list {
  position: absolute;
  overflow: hidden;
  top: 1.78rem;
  bottom: 0;
  left: 0;
  right: 0;

  .title {
    height: 0.44rem;
    line-height: 0.44rem;
    background: #eee;
    padding-left: 0.2rem;
  }

  .button-list {
    overflow: hidden;
    padding: 0.2rem 0.6rem 0.2rem 0.2rem;

    .button-wrapper {
      width: 33.33%;
      float: left;
      padding: 0.1rem 0;

      .button {
        border: 2px solid #ccc;
        text-align: center;
        padding: 0.1rem 0;
        margin: 0 0.1rem;
        border-radius: 0.06rem;
      }
    }
  }

  .city-list {
    .city-item {
      line-height: 0.74rem;
      padding-left: 0.2rem;
    }
  }
}
</style>
