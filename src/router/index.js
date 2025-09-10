import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/Home.vue')
const Arrivals = () => import('../views/Arrivals.vue')
const Departures = () => import('../views/Departures.vue')
const FlightDetails = () => import('../views/FlightDetails.vue')
const Baggage = () => import('../views/Baggage.vue')
const TerminalMapView = () => import('../views/TerminalMapView.vue')
const WeatherView = () => import('../views/WeatherView.vue')
const Login = () => import('../views/Login.vue')
const Admin = () => import('../views/Admin.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/arrivals', name: 'arrivals', component: Arrivals },
    { path: '/departures', name: 'departures', component: Departures },
    { path: '/flight/:id', name: 'flight', component: FlightDetails, props: true },
    { path: '/baggage', name: 'baggage', component: Baggage },
    { path: '/terminal-map', name: 'terminal-map', component: TerminalMapView },
    { path: '/weather', name: 'weather', component: WeatherView },
    { path: '/login', name: 'login', component: Login },
    { path: '/admin', name: 'admin', component: Admin },

  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router