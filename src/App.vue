<template>
  <div id="app">
    <CoomonNavbar/>
    <router-view/>
  </div>
</template>

<script>
import CoomonNavbar from './components/CoomonNavbar.vue'
export default {
  components: {
    CoomonNavbar
  }
}
</script>

<style scoped>
</style>
