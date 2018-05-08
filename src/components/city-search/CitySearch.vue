<template>
  <div class="search">
    <input class="search-input" placeholder="请输入拼音或字母" type="text">
  </div>
</template>
<script>
export default {};
</script>
<style lang="stylus" scoped>
@import '~styles/common.styl';

.search {
  height: 0.72rem;
  padding: 0.1rem;
  background: $bgColor;
  .search-input{
    width: 100%;
    height: 100%;
    padding-left: .1rem;
    box-sizing: border-box;
    border-radius: .1rem;
    text-align: center;
    color: #666;
  }
}
</style>
