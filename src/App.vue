<template>
  <div id="app" class="container">
    <img alt="Vue logo" src="./assets/logo.png" class="logo">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <TodoList></TodoList>
  </div>
</template>

<script>
// Define components here
// import HelloWorld from './components/HelloWorld.vue'
import TodoList from './components/TodoList.vue'

export default {
  name: 'App',
  //Register components here
  components: {
    // HelloWorld,
    TodoList
  }
}
</script>

<style>

* {
  box-sizing: border-box;
}
.container {
  max-width: 600px;
  margin: 0px auto;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
.logo {
  height: 75px;
  display: block;
  margin: 20px auto;
}
</style>
