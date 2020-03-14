<template>
    <div class="page-wrapper flex-center">
        <form class="centered-form" action="#" @submit.prevent="validateBeforeSubmit">
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
                    <input type="text" class="form-control" name="name"
                    :class="{ 'input-error-highlight' : errors.has('name') }" v-validate="'required'"  placeholder="Enter email" v-model="name">
                    <span class="input-error">{{ errors.first('name') }}</span>
                </div>
                <div class="form-group col-md-12">
                    <label for="exampleInputEmail1" class="">Email address</label>
                    <input type="text" class="form-control" placeholder="Enter email" name="email"
                    :class="{ 'input-error-highlight' : errors.has('email') }" v-validate="'required|email'"  v-model="email">
                    <span class="input-error">{{ errors.first('email') }}</span>
                </div>
                <div class="form-group col-md-12">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" name="password"
                    :class="{ 'input-error-highlight' : errors.has('password') }" v-validate="'required'" placeholder="Password" v-model="password">
                    <span class="input-error">{{ errors.first('password') }}</span>
                </div>
                <div class="col-md-12"> 
                    <button type="submit" class="btn btn-success btn-block p-2" :disabled="processing">
                        <div class="" v-if="processing">
                            <div class="lds-ring ring-white" 
                                ><div></div><div></div><div></div><div></div>
                            </div>
                        </div>
                        <div class="" v-else> Create Account </div>
                    </button>
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
            successRegProcess: '',
            processing: false
        }
    }, 
    methods: {
        validateBeforeSubmit() {
            this.$validator.validateAll().then(result => {
                if(result) {
                    this.register();
                }
                return false;
            })
        },
        register() {
            this.processing = true
            this.$store.dispatch('register', {
                name: this.name,
                email: this.email,
                password: this.password
            })
            .then(() => {
                this.successRegProcess = 'Your registration was successful'
                this.$router.push({ name: 'login', params: {
                    dataSuccessMessage: this.successRegProcess
                } })
            })
            .catch((error) => {
                this.password = ''
                this.serverError[0].status = true 
                this.serverError[0].title = error.response.data.message
                this.serverError[0].errors = Object.values(error.response.data.errors)
            })
            .finally(() => {
                this.processing = false
            })
        }
    }
}
</script>