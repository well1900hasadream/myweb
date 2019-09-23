import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentScreenHeight: 768,
    bootState: true
  },
  mutations: {
    changeBootState (state) {
      console.log('!');
      
      state.bootState = false
    }
  },
  actions: {

  }
})
