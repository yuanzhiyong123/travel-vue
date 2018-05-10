<template>
  <ul class="city-bar">
    <li class="city-item" v-for="(item , key) in cities" :key="key">{{key}}</li>
  </ul>
</template>
<script>
export default {
  props: {
    cities: Object
  }
};
</script>
<style lang="stylus" scoped>
.city-bar {
  display: flex;
  flex-direction :column;
  justify-content :center;
  position: absolute;
  top: 1.78rem;
  bottom: 0;
  right: 0;
  width: 0.4rem;

  .city-item {
    line-height: .4rem;
    text-align: center;
    color: red;
  }
}
</style>
