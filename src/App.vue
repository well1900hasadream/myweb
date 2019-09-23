<template>
  <div id="app">
    <CanvasNest />
    <router-view v-if="!showBoot" class="main-viewport"/>
    <Boot class="boot" v-if="showBoot" />
  </div>
</template>

<script>
import Boot from './pages/Boot/Boot'
import CanvasNest from './pages/CanvasNest/CanvasNest'
export default {
  name: 'app',
  data () {
    return {
    }
  },
  computed: {
    showBoot () {
      return this.$store.state.bootState
    }
  },
  components: {
    CanvasNest,
    Boot
  }
}
</script>

<style>
#app{
  position: relative;
}
.main-viewport{
  position: absolute;
  top: 0;
  left: 0;
}
.boot{
  position: absolute;
  top: 0;
  left: 0;
}
</style>
