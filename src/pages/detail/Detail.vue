<template>
  <div class="detail">
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <detail-introduce></detail-introduce>
  </div>
</template>

<script>
import DetailBanner from '@/components/detail-banner/DetailBanner'
import DetailHeader from '@/components/detail-header/DetailHeader'
import DetailIntroduce from '@/components/detail-introduce/DetailIntroduce'
export default {
  components: {
    DetailBanner,
    DetailHeader,
    DetailIntroduce
  }
};
</script>

<style lang="stylus" scoped>
.con{
  height 1000px;
}
</style>
