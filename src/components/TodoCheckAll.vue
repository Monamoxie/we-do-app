<template>
   <div>
        <label>
            <input type="checkbox" :checked="!anyRemaining" @change="allChecked"> Check All
        </label>
    </div>
</template>

<script>
// import { AppEventBus } from '../main';
export default {
    name: 'todo-check-all',
    computed: {
        anyRemaining() {
           return this.$store.getters.anyRemaining
        }
    },

    methods: {
        allChecked() { 
            this.$store.dispatch('checkAll', event.target.checked)
        }
    }
}
</script>