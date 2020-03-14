<template>
    <div class="page-wrapper">
        
    </div>
</template>
<script>
    export default {
        name: 'logout',
        created() {
            this.$store.dispatch('clearTodos')
            this.$store.dispatch('destroyToken')
            .then(() => {
                this.$router.push({ name: 'home' })
            })
        }
    }
</script>