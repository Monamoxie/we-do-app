import App from './App.vue'
import LandingPage from './components/marketing/LandingPage'
import About from './components/marketing/About'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Logout from './components/auth/Logout'

const routes = [
    {path: '/', name: 'home',  component: LandingPage },
    {path: '/todo', name: 'todo',  component: App },
    {path: '/about', name: 'about',  component: About },
    {path: '/login', name: 'login',  component: Login },
    {path: '/register', name: 'register',  component: Register },
    {path: '/logout', name: 'logout',  component: Logout }
]

export default routes
  