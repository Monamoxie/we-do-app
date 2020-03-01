<template>
    <button v-if="showClearCompletedButton" @click="clearCompleted">
        Clear Completed
    </button> 
</template>

<script>

import { AppEventBus } from '../main';

export default {
    name: 'todo-clear-completed',
    props: {
        showClearCompletedButton: {
            type: Boolean,
            required: true
        }
    },

    methods: {
        clearCompleted() {
            AppEventBus.$emit('clearCompletedTodos')
        }
    }
}
</script>