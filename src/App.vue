<template>
  <div>
    <section class="hero is-info is-bold" style="height: 100px">
      <div class="hero-header">
        <div class="container">

        </div>
      </div>
    </section>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
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
