<template>
  <div id="app">
    <CoomonNavbar/>
    <router-view/>
  </div>
</template>

<script>
import CoomonNavbar from './components/CommonNavbar.vue'
export default {
  components: {
    CoomonNavbar
  }
}
</script>

<style scoped>
</style>
