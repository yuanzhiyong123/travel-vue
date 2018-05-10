<template>
  <div class="city">
    <city-header></city-header>
    <city-search></city-search>
    <city-list :cities="cities" :hotCities="hotCities"></city-list>
    <city-bar :cities="cities"></city-bar>
  </div>
</template>
<script>
import axios from "axios";
import CityHeader from "@/components/city-header/CityHeader.vue";
import CitySearch from "@/components/city-search/CitySearch.vue";
import CityList from "@/components/city-list/CityList.vue";
import CityBar from "@/components/city-bar/CityBar.vue";
export default {
  data() {
    return {
      cities: {},
      hotCities: []
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityBar
  },
  created() {
    this.getCityInfo();
  },
  methods: {
    getCityInfo() {
      axios.get('/api/city.json').then((res) => {
        this.cities = res.data.data.cities;
        this.hotCities = res.data.data.hotCities;
      });
    }
  }
};
</script>
<style lang="stylus" scoped>
</style>
