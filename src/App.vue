<template>
  <div id="app">
    <b-navbar type="light" variant="light">
      <b-navbar-brand to="/">Yuta Ueno's Page</b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/about">About</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <router-view/>
  </div>
</template>

<style scoped>
</style>
