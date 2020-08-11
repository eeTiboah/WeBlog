<template>
  <div class="navbar">
      <nav class="nav-extended grey darken-4">
          <div class="nav-content">
          <router-link :to="{name: 'Home'}">
              <span class="nav-title">WeBlog</span>
          </router-link>
          </div>
      </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.navbar nav{
    padding: 0 30px;
}
</style>