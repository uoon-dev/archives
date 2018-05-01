import Vue from 'vue'
import Vuex from 'vuex'

import front from './modules/front'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    front
  }
})
