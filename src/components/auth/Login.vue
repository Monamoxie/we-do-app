<template>
    <div  class="flex-center">
        <form class="centered-form" action="#" @submit.prevent="login">
            <h3>LOGIN</h3>
            <div class="row mt-4">
                <div class="form-group col-md-12">
                    <label for="exampleInputEmail1" class="">Email address</label>
                    <input type="email" class="form-control"  placeholder="Enter email" v-model="email">
                </div>
                <div class="form-group col-md-12">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" placeholder="Password" v-model="password">
                </div>
                <div class="col-md-12">
                   <button type="submit" class="btn btn-success btn-block p-2">Login</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "login",

    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        login() {  
            this.$store.dispatch('retrieveToken', {
                email: this.email,
                password: this.password
            })
            .then(() => {
                this.$router.push({ name: 'todo' })
            })
        }
    }
}
</script>