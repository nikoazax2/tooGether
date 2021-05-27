import Vue from 'vue'
import Router from 'vue-router'
import App from './views/Acceuil.vue'
import Inscription from './views/inscription.vue'
import creationevent from './views/creationevent.vue'
import connexion from './views/connexion.vue'
import recherchevent from './views/recherchevent.vue'
import eventdetail from './views/eventdetail.vue'
Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'App',
            component: App,
            props: true
        },
        {
            path: '/Inscription',
            name: 'Inscription',
            component: Inscription,
            props: true
        },
        {
            path: '/Connexion',
            name: 'Connexion',
            component: connexion,
            props: true
        },
        {
            path: '/creationevent',
            name: 'creationevent',
            component: creationevent,
            props: true
        },
        {
            path: '/recherchevent',
            name: 'recherchevent',
            component: recherchevent,
            props: true
        },
        {
            path: '/event-detail/:actid',
            name: 'detailEvent',
            component: eventdetail,
            props: true
        }
    ]
})

export default router

