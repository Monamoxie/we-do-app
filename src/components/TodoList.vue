<template>
  <div class="hello">
    <input class="form-control todo-input" type="text" placeholder="What do you want to do?" v-model="newTodo" @keyup.enter="addTodo"/>
    <div class="mt-3 todos-wrapper">
        <div v-if="todosFiltered.length">
            <transition-group name="fade" enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
                <TodoItem v-for="(todo, index) in todosFiltered" :key="todo.id" :todo="todo" 
                    :index="index" :checkAll="!anyRemaining"> 
                </TodoItem>
            </transition-group>
        </div> 
        <div v-else>
            No record found
        </div>
    </div>

    <div class="extra-container">
        <todo-check-all :anyRemaining="anyRemaining"></todo-check-all>
        <todo-items-remaining :remaining="remaining"></todo-items-remaining>
    </div>

    <div class="extra-container">
        <div>
            <button :class="{ active: filter === 'all' }" @click="filter = 'all'">
                All
            </button>
            <button :class="{ active: filter === 'active' }" @click="filter = 'active'">
                Active
            </button>
            <button :class="{ active: filter === 'completed' }" @click="filter = 'completed'">
                Completed
            </button>
        </div>

        <div>
            <transition name="fade">
                <button v-if="showClearCompletedButton" @click="clearCompleted">
                    Clear Completed
                </button>
            </transition>
        </div>
 
    </div>

  </div>
</template>

<script>

import {AppEventBus} from '../main'
import TodoItem from './TodoItem'
import TodoItemsRemaining from './TodoItemsRemaining'
import TodoCheckAll from './TodoCheckAll'


export default {
    name: 'TodoList',

    components: {
        TodoItem,
        TodoItemsRemaining,
        TodoCheckAll,
    },

    data () {
        return {
            newTodo: '',
            idForTodo: 4, // Next added element will get id from here,
            beforeEditCache: '',
            filter: 'all',
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

    created() {
        AppEventBus.$on('removeTodo', (index) => this.removeTodo(index))
        AppEventBus.$on('submitEdit', (data) => this.submitEdit(data))
        AppEventBus.$on('checkAllChecked', (checkStatus) => this.checkAllTodos(checkStatus))

    },

    computed: {

        remaining() {
            return this.todos.filter(todo => !todo.completed).length
        },

        anyRemaining() {
            return this.remaining != 0
        }, 

        todosFiltered() { 

            if (this.filter === 'active') return this.todos.filter(todo => !todo.completed) 
            else if (this.filter === 'completed') return this.todos.filter(todo => todo.completed) 

            return this.todos 
        },
        
        showClearCompletedButton() {
            // returns a sub array in todos where any of the todo has a completed property set to true. 
            // count all and show the button if lenght > 0
            return this.todos.filter(todo => todo.completed).length > 0
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

       

        // The method is called from the child component (Todoitem)
        removeTodo(index) {
            this.todos.splice(index, 1)
        },

        checkAllTodos() {
            this.todos.forEach((todo) => todo.completed = event.target.checked)
        },

        clearCompleted() {
            this.todos = this.todos.filter(todo => todo.completed === false) // another way of using the filter method
        },

        // The method is called from the child component (Todoitem)
        submitEdit(data) {
            // Simply update todos (The single source of truth) with the new data that has just been sent from the child component
            this.todos.splice(data.index, 1, data.todo)
        }

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    @import url('https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css');
    @import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css');
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
        animation-duration: 1.2s;
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
        border: 1px solid #ccc;;
        padding: 6px 25px;
        margin-right: 3px;
        border-radius: 4px;
        cursor: pointer; 

        &:hover {
            background: rgb(4, 209, 4);
            color: #fff;
        }

        &:focus {
            outline: none;
        }

    }

    .active {
        background: rgb(4, 209, 4);
        color: #fff;
    }

    

    

 
</style>
