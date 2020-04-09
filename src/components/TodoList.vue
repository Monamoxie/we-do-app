<template>
  <div class="page-wrapper hello">
    <div class="name-container">Welcome {{ name }}</div>
    <input class="form-control todo-input" type="text" placeholder="What do you want to do?" v-model="newTodo" @keyup.enter="addTodo"/>
    <div class="mt-3 todos-wrapper" v-if="$store.state.todosLoading === false">
        <div v-if="todosFiltered.length">
            <transition-group name="fade" enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
                <TodoItem v-for="(todo, index) in todosFiltered" :key="todo.id" :todo="todo" 
                    :index="index" :checkAll="!anyRemaining"> 
                </TodoItem>
            </transition-group>
        </div> 
        <div v-else class="flex-center p-3">
            No record found
        </div>
    </div>
    
    <div class="lds-ring" v-if="$store.state.todosLoading === true || $store.state.newTodoLoading"><div></div><div></div><div></div><div></div></div>

    <div class="extra-container">
        <todo-check-all></todo-check-all>
        <todo-items-remaining></todo-items-remaining>
    </div>

    <div class="extra-container">
        
        <todo-filtered></todo-filtered>
        <div>
            <transition name="fade">
                <todo-clear-completed></todo-clear-completed>
            </transition>
        </div>
    </div>

  </div>
</template>

<script>

// import {AppEventBus} from '../main'
import TodoItem from './TodoItem'
import TodoItemsRemaining from './TodoItemsRemaining'
import TodoCheckAll from './TodoCheckAll'
import TodoFiltered from './TodoFiltered'
import TodoClearCompleted from './TodoClearCompleted'


export default {
    name: 'TodoList',

    components: {
        TodoItem,
        TodoItemsRemaining,
        TodoCheckAll,
        TodoFiltered,
        TodoClearCompleted,
    },

    data () {
        return {
            newTodo: '',
            idForTodo: 4, // Next added element will get id from here, 
            name: '',
        }
    },

    created() {
        this.$store.dispatch('retrieveTodos')
        this.$store.dispatch('retrieveName')
        .then((response) => {
            this.name = response.data.name
        })
    },
 
    computed: {
        anyRemaining() {
            return this.$store.getters.anyRemaining
        }, 

        todosFiltered() { 
            return this.$store.getters.todosFiltered
        }, 
    },

    methods: {
        addTodo() {
            if (this.newTodo.trim().length == 0) return
            this.$store.dispatch('addTodo', {
                id: this.idForTodo,
                title: this.newTodo,
                completed: false,
                editing: false,
            })
            
            this.newTodo = ''
            this.idForTodo++
        },
  
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
 
.name-container {
    margin-bottom: 20px;
}
    
</style>
