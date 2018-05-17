<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <transition name="slide-fade">
    <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    height: 100%;
    color: #2c3e50;
  }
  html,body{
    height: 100%;
    margin: 0;
    background: url("assets/bg.jpg") repeat-y;
  }

</style>


