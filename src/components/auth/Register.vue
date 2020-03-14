<template>
    <div class="flex-center">
        <form class="centered-form" action="#" @submit.prevent="register">
            <h3>REGISTER</h3>
             <div v-if="serverError[0].status" class="alert alert-danger error-container">
                <h5 class="alert-heading text-center">{{ serverError[0].title  }}</h5> <hr>
                <div v-if="serverError[0].errors.length > 0">
                    <p v-for="(error, key) in serverError[0].errors" :key="key">
                        {{ error[0] }}
                    </p>
                </div>
            </div>
            <div class="row mt-4">
                <div class="form-group col-md-12">
                    <label for="exampleInputEmail1" class="">Full name</label>
                    <input type="text" class="form-control" placeholder="Enter email" v-model="name">
                </div>
                <div class="form-group col-md-12">
                    <label for="exampleInputEmail1" class="">Email address</label>
                    <input type="text" class="form-control" placeholder="Enter email" v-model="email">
                </div>
                <div class="form-group col-md-12">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" placeholder="Password" v-model="password">
                </div>
                <div class="col-md-12">
                   <button type="submit" class="btn btn-success btn-block p-2">Create Account</button>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    name: 'register',
    data() {
        return {
            name: '',
            email: '',
            password: '',
            serverError: [{
                'status': false,
                'title': '',
                'errors': ''
            }],
        }
    },
    methods: {
        register() {
              this.$store.dispatch('register', {
                name: this.name,
                email: this.email,
                password: this.password
            })
            .then(() => {
                this.$router.push({ name: 'login' })
            })
            .catch((error) => {
                this.password = ''
                this.serverError[0].status = true 
                this.serverError[0].title = error.response.data.message
                this.serverError[0].errors = Object.values(error.response.data.errors)
            })
        }
    }
}
</script>