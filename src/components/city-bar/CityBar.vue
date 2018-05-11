<template>
  <ul class="city-bar">
    <li class="city-item" v-for="item in cityBars" :key="item" :ref="item" @click="handleCityBarClick" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">{{item}}</li>
  </ul>
</template>
<script>
export default {
  props: {
    cities: Object
  },
  data() {
    return {
      touchStart: false,
      startY: 0,
      timer: true
    };
  },
  computed: {
    cityBars() {
      let cityBars = [];
      for (let name in this.cities) {
        cityBars.push(name);
      }
      return cityBars;
    }
  },
  updated() {
    this.startY = this.$refs["A"][0].offsetTop;
  },
  methods: {
    handleCityBarClick(e) {
      this.bus.$emit("cityBarChange", e.target.innerHTML);
    },
    handleTouchStart() {
      this.touchStart = true;
    },
    handleTouchMove(e) {
      if (this.touchStart) {
        if(!this.timer) {
          return;
        }
        this.timer = false;
        setTimeout(() => {
          let touchY = e.touches[0].clientY;
          let index = Math.floor((touchY - 89 - this.startY) / 20);
          if(index >= 0 && index < this.cityBars.length) {
            this.bus.$emit("cityBarChange", this.cityBars[index]);
          }
          this.timer = true;
        }, 20);
      }
    },
    handleTouchEnd() {
      this.touchStart = false;
    }
  }
};
</script>
<style lang="stylus" scoped>
.city-bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 1.78rem;
  bottom: 0;
  right: 0;
  width: 0.4rem;

  .city-item {
    line-height: 0.4rem;
    text-align: center;
    color: red;
  }
}
</style>
