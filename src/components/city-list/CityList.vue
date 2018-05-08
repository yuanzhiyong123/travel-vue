<template>
  <div class="list">
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
      </div>
  </div>
</template>
<script>
export default {};
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

.list {
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
}
</style>
