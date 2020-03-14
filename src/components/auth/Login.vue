<template>
    <div  class="flex-center">
        <form class="centered-form" action="#" @submit.prevent="validateBeforeSubmit">
            <h3>LOGIN</h3>

             <div v-if="successMessage" class="alert alert-success flex-center success-container">
                <p>{{ successMessage }}</p>
            </div>


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
                    <label for="exampleInputEmail1" class="">Email address</label> 
                        <input type="email" id="email" name="email" class="form-control" 
                         :class="{ 'input-error-highlight' : errors.has('email') }" v-validate="'required|email'"  placeholder="Enter email" v-model="email">
                        <span class="input-error">{{ errors.first('email') }}</span>
                </div>
                <div class="form-group col-md-12">
                    <label for="exampleInputPassword1">Password</label>
                        <input type="password" id="password" name="password" class="form-control" 
                         :class="{ 'input-error-highlight' : errors.has('password') }" v-validate="'required'" placeholder="Password" v-model="password">
                        <span class="input-error">{{ errors.first('password') }}</span>
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
    props: {
        dataSuccessMessage: {
            type: String
        }
    },
    data() {
        return {
            email: '',
            password: '',
            serverError: [{
                'status': false,
                'title': '',
                'errors': ''
            }],
            successMessage: this.dataSuccessMessage
        }
    },  
    methods: {
        validateBeforeSubmit() {
            this.$validator.validateAll().then(result => {
                if(result) {
                    this.login();
                }
                return false;
            })
        },
        login() {  
            this.$store.dispatch('retrieveToken', {
                email: this.email,
                password: this.password
            })
            .then(() => {
                this.$router.push({ name: 'todo' })
            })
            .catch((error) => { 
                this.serverError[0].status = true         
                const errorObj = error.response.data
                this.serverError[0].title = errorObj.hasOwnProperty('message') ? error.response.data.message : error.response.data
        
                this.serverError[0].errors = errorObj.hasOwnProperty('message') ? Object.values(error.response.data.errors) : new Object()
                this.successMessage = ''
            })
        }
    } 
}
</script>