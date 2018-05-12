import * as types from './mutation-types.js';
const mutations = {
  [types.SET_CITY](state, city) {
    state.city = city;
  }
}
export default mutations;
