<template>
  <div class="detail">
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="con"></div>
  </div>
</template>

<script>
import DetailBanner from '@/components/detail-banner/DetailBanner'
import DetailHeader from '@/components/detail-header/DetailHeader'
export default {
  components: {
    DetailBanner,
    DetailHeader
  }
};
</script>

<style lang="stylus" scoped>
.con{
  height 1000px;
}
</style>
