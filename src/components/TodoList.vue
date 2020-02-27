<template>
  <div class="hello">
    <input class="form-control todo-input" type="text" placeholder="What do you want to do?" 
        v-model="newTodo"/>
    <div class="row mt-3 todos-wrapper">
        <div v-for="todo in todos" :key="todo.id" class="todo-item">
            {{ todo.title }}
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  props: {
    msg: String
  },

  data () {
      return {
        newTodo: '',
        todos: [
            {
                'id': 1,
                'title': 'First task for the day',
                'completed': false
            },
             {
                'id': 2,
                'title': 'Second task for the day',
                'completed': false
            },
             {
                'id': 3,
                'title': 'Third task for the day',
                'completed': false
            },
        ]
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
 .todo-input {
    width: 100%;
    padding: 10px 18px;
    font-size: 18px;
    margin-bottom: 16px;

    &:focus {
        outline: 0;
    }
 }

 .todos-wrapper {
    padding: 20px 10px; 
    box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.10);
 }

 .todo-item {
    text-align: left;
    margin-bottom: 20px;
    padding: 10px 12px;
    border-bottom: 1px dotted #ccc
 }

</style>
