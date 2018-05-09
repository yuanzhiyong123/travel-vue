<template>
  <div class="city">
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
    <city-bar></city-bar>
  </div>
</template>
<script>
import CityHeader from "@/components/city-header/CityHeader.vue";
import CitySearch from "@/components/city-search/CitySearch.vue";
import CityList from "@/components/city-list/CityList.vue";
import CityBar from "@/components/city-bar/CityBar.vue";
export default {
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityBar
  }
};
</script>
<style lang="stylus" scoped>
</style>
