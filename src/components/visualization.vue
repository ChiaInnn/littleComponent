<template>
  <div class="visualContainer">
    Welcome to visual space
  </div>

</template>

<script lang="ts">
import { Component,Vue } from 'vue-property-decorator'
@Component({})
export default class visualization extends  Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.visualContainer{
  width: 100%;
  height: 100%;
}
</style>
