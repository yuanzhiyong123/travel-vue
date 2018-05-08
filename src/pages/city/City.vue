<template>
  <div class="city">
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
  </div>
</template>
<script>
import CityHeader from "@/components/city-header/CityHeader.vue";
import CitySearch from "@/components/city-search/CitySearch.vue";
import CityList from "@/components/city-list/CityList.vue";
export default {
  components: {
    CityHeader,
    CitySearch,
    CityList
  }
};
</script>
<style lang="stylus" scoped>
</style>
