<template>
  <div id="app">
    <app-nav></app-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from './components/Nav'
export default {
  components: {
    'app-nav': Nav
  }
}
</script>

<style>

</style>
