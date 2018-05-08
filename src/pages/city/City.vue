<template>
  <div class="city">
    <city-header></city-header>
    <city-search></city-search>
  </div>
</template>
<script>
import CityHeader from "@/components/city-header/CityHeader.vue";
import CitySearch from "@/components/city-search/CitySearch.vue";
export default {
  components: {
    CityHeader,
    CitySearch
  }
};
</script>
<style lang="stylus" scoped>
</style>
