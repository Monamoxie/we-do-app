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
 