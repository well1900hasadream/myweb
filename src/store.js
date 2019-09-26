import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentScreenHeight: document.documentElement.clientHeight || document.body.clientHeight, // 客户端高度，用于适应canvasNest
    bootState: true, // 控制启动页的显示
    showingMaskLayer: false
  },
  mutations: {
    changeBootState (state) {
      state.bootState = false
    },
    showMask (state) {
      state.showingMaskLayer = true
    },
    hideMask (state) {
      state.showingMaskLayer = false
    }
  },
  actions: {

  }
})
