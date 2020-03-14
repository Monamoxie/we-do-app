<template>
    <div id="app">
        <ul class="nav">
            <li><router-link :to="{ name : 'home' }">Home</router-link></li>
            <li><router-link :to="{ name : 'todo' }">App</router-link></li>
            <li><router-link :to="{ name : 'about' }">About</router-link></li>
            <li v-if="!loggedIn"><router-link :to="{ name : 'login' }">Login</router-link></li>
            <li v-if="!loggedIn"><router-link :to="{ name : 'register' }">Register</router-link></li>
            <li v-if="loggedIn"><router-link :to="{ name : 'logout' }">Logout</router-link></li>
        </ul>
        
       <router-view></router-view>   
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
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

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

.nav {
    display: flex;
    list-style: none;
    padding: 15px 0px;
    padding-right: 50px;
    margin: 0 15px 0 0;
    justify-content:flex-end;
    background: #f4f8fa;
    border-bottom: 1px solid lightgrey;
    margin-bottom: 24px; 
    width: 100%;
}

.nav a  {
    color: #626b6f;
    padding: 0 15px;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: .1em;
    text-decoration: none;
    text-transform: uppercase;
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
    font-weight: bold;
} 
.input-error {
    font-size: 14px;
    color: #900;
}
.input-error-highlight {
    border: 1px solid #900;
}
</style>