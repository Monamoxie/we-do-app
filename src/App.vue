<template>
  <div id="app" class="container">
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
    TodoList
  }
}
</script>

<style>

* {
  box-sizing: border-box;
}
/* .container {
  max-width: 600px;
  margin: 0px auto;
} */
 
 
</style>
