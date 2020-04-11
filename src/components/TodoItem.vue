<template>
    <div class="todo-item">
        <div class="todo-item-left">
            <input type="checkbox" v-model="completed" @change="submitEdit">
            <div class="todo-item-label" v-if="!editing" @dblclick="editTodo" 
                :class="{ completed: completed }">{{ title }}
            </div>
            <input v-else class="form-control todo-item-edit" ref="edit" type="text" v-model="title" 
                @blur="submitEdit()" @keyup.enter="submitEdit()" @keyup.esc="cancelEdit()" v-focus/>
        </div>
        <div>
            <button @click="pluralize">Plural</button>
            <span class="remove-item" @click="removeTodo(id)">&times;</span>
        </div>
    </div>
    
</template>

<script>

import {AppEventBus} from '../../resources/js/app'

export default {
    name: 'TodoItem',
    props: {
        todo: {
            type: Object,
            required: true,
        },
        index: {
            type: Number,
            required: true,
        },
        checkAll: {
            type: Boolean,
            required: true,
        }
    },
    data() {
        return {

            // Since this is a child component, We have to manually retrieve each property of the todo object into the data method
            // Data has already been passed in as a prop
            'id': this.todo.id,
            'title': this.todo.title,
            'completed': this.todo.completed,
            'editing': this.todo.editing,
            'beforeEditcache': ''
        }
    },

    created() { 
        console.log(AppEventBus)
        AppEventBus.$on('pluralize', this.handlePluralize)
    },

    beforeDestroy() {
        AppEventBus.$off('pluralize', this.handlePluralize)
    },

    watch: {
        /// We need to do something here only if one of the props coming from the parent component changes
        //  SO we use a watch
        // Each child component sets it up and waits
        // The moment the checkbox in the parent composer is clicked.
        // This child compoent, like all it's siblings will act accordingly
        // They all will assume or mark themselves as completed
        // So the wathcer only acts when they receive command from outside
        checkAll() {
            if (this.checkAll) this.completed = true
            else this.completed = this.todo.completed
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
        
        removeTodo(id) { 

            // Very necessary when you have a case where a set of child components need to fire up an event that is within their parent component
            //  So instead of localizing each event to a component, I keep these events in it's parent component, 
            // Then when I need to use that event within the child, I simply emit it and it get's set to the parent who handles it from there

            // AppEventBus.$emit('removeTodo', id)
            this.$store.dispatch('deleteTodo', id)
        },
        
        editTodo() {
            // Since editing an item is local to this compoent alone, we can simply follow a different approach.
            // By localizing the edit functionality. Allow it to only be fire up from within the component itself with emiting as the approach above
            this.beforeEditCache = this.title
            this.editing = true 
        },

        submitEdit() {
            if (this.title.trim() == '') this.beforeEditCache
            this.editing = false
            // We need to emit an event to update the master array objects that exists (todos)
            // Otherwise called "The Single Source of Truth"
            // Remember the todos (The Single Source of Truth) hosts all the existings objects
            // And the only thing passed in here (todo) is an object containing only the properties local to this item
            // We need to update the super array of objects that exists within the parent component
            // And to do this, we simply emit an event to the parent component to handle that functionality
            
            // AppEventBus.$emit('submitEdit', {
            //     'index': this.index,
            //     'todo': {
            //         'id': this.id,
            //         'title': this.title,
            //         'completed': this.completed,
            //         'editing': this.editing
            //     }
            // })
            this.$store.dispatch('updateTodo', {
                'id': this.id,
                'title': this.title,
                'completed': this.completed,
                'editing': this.editing
            })

            
        },

        cancelEdit() {
            this.title = this.beforeEditCache
            this.editing = false
        },

        pluralize() { 
            this.title = this.title + 's'
            AppEventBus.$emit('pluralize') 
        },

        handlePluralize() {
            
            this.$store.dispatch('updateTodo', {
                'id': this.id,
                'title': this.title,
                'completed': this.completed,
                'editing': this.editing
            })
        }
    }
}
</script>