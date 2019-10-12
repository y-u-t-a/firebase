<template>
  <b-navbar class="sticky-top" type="light" variant="light">
    <b-navbar-brand to="/">
      <img alt="icon" src="/assets/30320735.png" width="50px" height="50px"/>
      Yuta Ueno's Page
    </b-navbar-brand>
    <b-navbar-nav>
      <b-nav-item to="/">Home</b-nav-item>
      <b-nav-item to="/about">About</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {

}
</script>

<style scoped>
.nav-item > .router-link-exact-active {
  border-bottom: solid;
}
nav {
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.5);
}
</style>
