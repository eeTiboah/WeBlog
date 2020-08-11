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
body{
  font-family: 'Noto Sans', sans-serif;
  font-size: 1.2em;
  
}
li{
  color: #424242;
}
</style>
