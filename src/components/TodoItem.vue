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
            <button @click="pluralize">Pluralize</button>
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
            'id': this.todo.id,
            'title': this.todo.title,
            'completed': this.todo.completed,
            'editing': this.todo.editing,
            'beforeEditcache': ''
        }
    },

    created() {  
        AppEventBus.$on('pluralize', this.handlePluralize)
    },

    beforeDestroy() {
        AppEventBus.$off('pluralize', this.handlePluralize)
    },

    watch: { 
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
            this.$store.dispatch('deleteTodo', id)
        },
        
        editTodo() {
            this.beforeEditCache = this.title
            this.editing = true 
        },

        submitEdit() {
            if (this.title.trim() == '') this.beforeEditCache
            this.editing = false 
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