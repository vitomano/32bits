import Vue from 'vue'
import Router from 'vue-router'

import Inicio from './components/Inicio'
import Busquedas from './components/Busquedas'
import Ventas from './components/Ventas'
import Total from './components/Total'

Vue.use(Router)

export default new Router({
    mode: 'history', 
    routes: [
        {
            path: '/',
            name: 'inicio',
            component: Inicio
        },
        {
            path: '/busquedas',
            component: Busquedas
        },
        {
            path: '/ventas',
            component: Ventas
        },
        {
            path: '/total',
            component: Total
        },

           
    ]
})