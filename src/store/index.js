import Vue from 'vue'
import Vuex from 'vuex'

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

        }
    }
})