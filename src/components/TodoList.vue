<template>
  <div class="hello">
    <input class="form-control todo-input" type="text" placeholder="What do you want to do?" v-model="newTodo" @keyup.enter="addTodo"/>
    <div class="row mt-3 todos-wrapper">
        <div v-for="(todo, index) in todos" :key="todo.id" class="todo-item">

            <div class="todo-item-left">
                <input type="checkbox" v-model="todo.completed">
                <div class="todo-item-label" v-if="!todo.editing" @dblclick="editTodo(todo)" 
                    :class="{ completed: todo.completed }">{{ todo.title }}</div>
                <input v-else class="form-control todo-item-edit" ref="edit" type="text" v-model="todo.title" 
                    @blur="submitEdit(todo)" @keyup.enter="submitEdit(todo)" @keyup.esc="cancelEdit(todo)" v-focus/>
            </div>
            
            <div class="remove-item" @click="removeTodo(index)">&times;</div>
        </div>
    </div>

    <div class="extra-container">
        <div>
            <label>
                <input type="checkbox"> Check All
            </label>
        </div>
        <div> {{ remaining }} items left</div>
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
        idForTodo: 4, // Next added element will get id from here,
        beforeEditCache: '',
        todos: [
            {
                'id': 1,
                'title': 'First task for the day',
                'completed': false,
                'editing': false,
            },
                {
                'id': 2,
                'title': 'Second task for the day',
                'completed': false,
                'editing': false,
            },
                {
                'id': 3,
                'title': 'Third task for the day',
                'completed': false,
                'editing': false,
            },
        ]
    }
  },

  computed: {
      remaining() {
          return this.todos.filter(todo => !todo.completed).length
      }
  },

  directives: {
    focus: {
        inserted: function(el) {
            el.focus();
        }
    }
  },

  methods: {

    addTodo() {
        if (this.newTodo.trim().length == 0) return
        this.todos.push({
            id: this.idForTodo,
            title: this.newTodo,
            completed: false,
            editing: false,
        });
        this.newTodo = ''
        this.idForTodo++
    },

    editTodo(todo) {
        
        this.beforeEditCache = todo.title
        todo.editing = true 
    },

    submitEdit(todo) {
        if (todo.title.trim() == '') this.beforeEditCache; 
        todo.editing = false

    },

    cancelEdit(todo) {
        todo.title = this.beforeEditCache
        todo.editing = false
    },

    removeTodo(index) {
        this.todos.splice(index, 1)
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
        border-bottom: 1px dotted #ccc;
        display: flex;
        justify-content: space-between;
    }

    .remove-item {
        cursor: pointer;
        margin-left: 14px;
        &:hover {
            color: red;
            font-weight: bold;
        }
    }

    .todo-item-left {
        display: flex;
        align-items: center;
    }
    .todo-item-label {
        padding: 10px;
        border: 1px solid white;
        margin-left: 12px;
    }

    .todo-item-edit { 
        color: #2c3e50;
        margin-left: 12px;
        font-size: 16px;
        width: 100%;
        padding: 10px 12px;
        border: 1px solid #ccc; 

        &:focus {
            outline: none;
        }
    }

    .completed {
        text-decoration: line-through;
        color: grey;
        opacity: 0.5;
    }

    .extra-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 16px;
        border-top: 2px solid lightgrey;
        padding-top: 14px;
        margin: 14px auto;
    }

    button {
        font-size: 14px;
        background-color: white;
        appearance: none;

        &:hover {
        background: lightgreen;
        }

        &:focus {
            outline: none;
        }

    }

    .active {
        background: lightgreen;
    }

    

 
</style>
