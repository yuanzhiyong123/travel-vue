<template>
  <div class="list" ref="city">
    <div>
      <div class="area">
          <div class="title border-topbottom">当前城市</div>
          <div class="button-list">
            <div class="button-wrapper">
              <div class="button">{{city}}</div>
            </div>
          </div>
      </div>
      <div class="area">
          <div class="title border-topbottom">热门城市</div>
          <div class="button-list">
            <div class="button-wrapper" v-for="item in hotCities" @click="handleSelectCity(item.name)" :key="item.id">
              <div class="button">{{item.name}}</div>
            </div>
          </div>
      </div>
      <div class="area" v-for="(list, key) in cities" :key="key" :ref="key">
          <div class="title border-topbottom">{{key}}</div>
          <ul class="city-list">
            <li class="city-item border-bottom" v-for="item in list" @click="handleSelectCity(item.name)" :key="item.id">{{item.name}}</li>
          </ul>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import { mapGetters, mapMutations } from "vuex";
export default {
  props: {
    cities: Object,
    hotCities: Array
  },
  computed: {
    ...mapGetters(["city"])
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.city, {
      click: true
    });
    this.bus.$on("cityBarChange", target => {
      let el = this.$refs[target][0];
      this.scroll.scrollToElement(el);
    });
  },
  methods: {
    ...mapMutations({
      setCity: "SET_CITY"
    }),
    handleSelectCity(city) {
      this.setCity(city);
      this.$router.push("/");
    }
  }
};
</script>
<style lang="stylus" scoped>
.border-topbottom {
  &:before {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}

.border-bottom {
  &:before {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}

.list {
  position: absolute;
  overflow: hidden;
  top: 1.78rem;
  bottom: 0;
  left: 0;
  right: 0;

  .title {
    height: 0.44rem;
    line-height: 0.44rem;
    background: #eee;
    padding-left: 0.2rem;
  }

  .button-list {
    overflow: hidden;
    padding: 0.2rem 0.6rem 0.2rem 0.2rem;

    .button-wrapper {
      width: 33.33%;
      float: left;
      padding: 0.1rem 0;

      .button {
        border: 2px solid #ccc;
        text-align: center;
        padding: 0.1rem 0;
        margin: 0 0.1rem;
        border-radius: 0.06rem;
      }
    }
  }

  .city-list {
    .city-item {
      line-height: 0.74rem;
      padding-left: 0.2rem;
    }
  }
}
</style>
