<template>
   <div>
        <label>
            <input type="checkbox" :checked="!anyRemaining" @change="allChecked"> Check All
        </label>
    </div>
</template>

<script>
import { AppEventBus } from '../main';
export default {
    name: 'todo-check-all',
    props: {
        anyRemaining: {
            type: Boolean,
            required: true
        }
    },

    methods: {
        allChecked() {
            AppEventBus.$emit('checkAllChecked', this.anyRemaining)
        }
    }
}
</script>