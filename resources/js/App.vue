<template>
  <div id="app" class="container">
    <TodoList></TodoList>
  </div>
</template>

<script> 
import TodoList from './components/TodoList.vue'

export default {
  name: 'App',
 
  components: { 
    TodoList
  }
}
</script>
 