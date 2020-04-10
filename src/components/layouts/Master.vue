<template>
    <div id="app">
        <!-- -->
         <nav class="navbar navbar-expand-lg fixed-top flex-md-nowrap navbar-light bg-light shadow ">
            
            <div class="navbar-brand col-sm-3 col-md-3 mr-0">
                <a href="#">
                    <img alt="logo" src="/img/logo.png" class="logo" > 
                </a>
            </div>
            
            <div class="col-sm-9 col-md-9">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                 <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item"><router-link class="nav-link" :to="{ name : 'home' }">Home</router-link></li>
                        <li class="nav-item"><router-link class="nav-link" :to="{ name : 'todo' }">App</router-link></li>
                        <li class="nav-item"><router-link class="nav-link" :to="{ name : 'about' }">About</router-link></li>
                        <li class="nav-item" v-if="!loggedIn"><router-link class="nav-link" :to="{ name : 'login' }">Login</router-link></li>
                        <li class="nav-item" v-if="!loggedIn"><router-link class="nav-link" :to="{ name : 'register' }">Register</router-link></li>
                        <li class="nav-item" v-if="loggedIn"><router-link  class="nav-link" :to="{ name : 'logout' }">Logout</router-link></li>
                    </ul>
                </div>
            </div>
             
        </nav>

        <div class="row">
            <nav v-if="loggedIn" class="col-md-3 d-none d-md-block sidebar">
                <div class="sidebar-sticky">
                     
                </div>
            </nav>

            <div :class="loggedIn ? 'col-md-9' : 'col-md-12' " style="border: 2px solid red">
                <transition name="router-animation" 
                enter-active-class="animated fadeIn" 
                leave-active-class="animated fadeOut" mode="out-in"> 
                    <router-view></router-view>
                </transition>
            </div>

        </div>


    </div>
</template>

<script>
 
export default {
    name: 'Master',
    computed: {
        loggedIn() {
            return this.$store.getters.loggedIn
        }
    },
     
}
</script>

<style>
 
    @import url('https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css');
    @import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css');


#app {
    -webkit-font-smoothing:antialised;
    -moz-osx-font-smoothing: antialised;
    color: #2c3e50;
    font-size: 24px;
    height: 100vh;
}

.flex-center {
    display:flex;
    justify-content: center;
}

.sidebar {
    /* c70ab4 */
    background: rgba(199,10,180, 0.8);
    color: #fff;
}
.top-nav { 
    list-style: none;   
    /* justify-content:flex-end; */
    background: #f4f8fa; 
    margin-bottom: 24px;  
    border: 3px solid red;
}

.top-nav a  {
    /* color: #626b6f;
    padding: 0 15px;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: .1em;
    text-decoration: none;
    text-transform: uppercase; */
}

form label {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 8px;
}

.centered-form {
    margin-top: 40px;
    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 40px 35px 90px;
    width: 600px;
    max-width: 99%;
}
.logo {
    display: block;
    margin: auto;
    width: 40px !important;
    height: 40px !important;
}
.error-container {
    font-size: 14px;
}
.error-container .alert-heading { 
    padding: 2px 0; 
}
.error-container p {
    font-size: 16px;
} 
.success-container p { 
    font-size: 17px; 
} 
.input-error {
    font-size: 14px;
    color: #900;
}
.input-error-highlight {
    border: 1px solid #900;
}



  .lds-ring {
  display: inline-block;
  position: relative;
  width: 50px;
  height: 50px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 32px;
  height: 32px;
  margin: 3px auto;
  margin-top: 12px;
  border: 3px solid rgb(4, 209, 4);
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: rgb(4, 209, 4) transparent transparent transparent;
}
.ring-white div {
    border: 3px solid rgb(255, 255, 255);   
    border-color: rgb(255, 255, 255) transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>