<template>
    <div id="app">
        <ul class="nav">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>
        </ul>
        <div>
            Page content goese here
        </div>
    </div>
</template>

<script>
export default {
    
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
</style>