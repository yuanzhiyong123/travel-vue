<template>
  <ul class="city-bar">
    <li class="city-item">A</li>
    <li class="city-item">A</li>
    <li class="city-item">A</li>
    <li class="city-item">A</li>
    <li class="city-item">A</li>
    <li class="city-item">A</li>
    <li class="city-item">A</li>
    <li class="city-item">A</li>
    <li class="city-item">A</li>
    <li class="city-item">A</li>
    <li class="city-item">A</li>
    <li class="city-item">A</li>
    <li class="city-item">A</li>
  </ul>
</template>
<script>
export default {};
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
  background: #ccc;

  .city-item {
    line-height: .4rem;
    text-align: center;
    color: red;
  }
}
</style>
