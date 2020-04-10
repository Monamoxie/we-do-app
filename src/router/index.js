import App from '../App.vue'
import LandingPage from '../components/LandingPage'
import About from '../components/About'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
import Logout from '../components/auth/Logout'

const routes = [
    {path: '/', name: 'home',  component: LandingPage },
    {path: '/todo', name: 'todo',  component: App, meta: { requiresAuth: true } },
    {path: '/about', name: 'about',  component: About },
    {path: '/login', name: 'login',  component: Login, props: true, meta: { requiresVisitor: true } },
    {path: '/register', name: 'register',  component: Register, meta: { requiresVisitor: true } },
    {path: '/logout', name: 'logout',  component: Logout, meta: { requiresAuth: true } }
]

export default routes
  