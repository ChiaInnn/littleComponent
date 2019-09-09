<template>
  <div id="app">
    <visualization></visualization>
  </div>
</template>

<script>
import visualization from './components/visualization.vue'

export default {
  name: 'app',
  components: {
    visualization
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
