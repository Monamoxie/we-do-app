import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

axios.defaults.baseURL = 'https://192.168.0.100:8080/';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
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
    },

    getters: {
        remaining(state) {
            return state.todos.filter(todo => !todo.completed).length
        },

        anyRemaining(state, getters) {
            return getters.remaining != 0
        }, 

        todosFiltered(state) { 
            
            if (state.filter === 'active') return state.todos.filter(todo => !todo.completed) 
            else if (state.filter === 'completed') return state.todos.filter(todo => todo.completed) 

            return state.todos 
        },
        
        showClearCompletedButton(state) {
            // returns a sub array in todos where any of the todo has a completed property set to true. 
            // count all and show the button if lenght > 0
            return state.todos.filter(todo => todo.completed).length > 0
          
        }
    },

    mutations: {
        addTodo(state, todo) {
            state.todos.push({
                id: todo.id,
                title: todo.title,
                completed: todo.completed,
                editing: todo.editing
            })
        },
        clearCompleted(state) {
            state.todos = state.todos.filter(todo => todo.completed === false) 
        },
        updateFilter(state, filter) {
            state.filter = filter 
        },
        checkAll(state, checked) {
            state.todos.forEach((todo) => todo.completed = checked)
        },
        deleteTodo(state, id) {
            const index = state.todos.findIndex(item => item.id == id)
            state.todos.splice(index, 1)
        },
        updateTodo(state, todo) {
            const index = state.todos.findIndex(item => item.id == todo.id)
            state.todos.splice(index, 1, {
                'id': todo.id,
                'title': todo.title,
                'completed': todo.completed,
                'editing': todo.editing
            })
        }
    },

    actions: {
        addTodo(context, todo) {
            setTimeout(() => {
                context.commit('addTodo', todo)
            }, 2000)
        },
        clearCompleted(context) {
            setTimeout(() => {
                context.commit('clearCompleted')
            }, 2000)
        },
        updateFilter(context, filter) {
            setTimeout(() => {
                context.commit('updateFilter', filter)
            }, 2000)
        },
        checkAll(context, checked) {
            setTimeout(() => {
                context.commit('checkAll', checked)
            }, 300)
        },
        deleteTodo(context, id) {
            setTimeout(() => {
                context.commit('deleteTodo', id)
            }, 1000)
        },
        updateTodo(context, todo) {
            setTimeout(() => {
                context.commit('updateTodo', todo)
            }, 2300)
        }
    }
})