import Vue from 'vue';
import Router from 'vue-router';
import plataforma_rotas from './plataforma';

Vue.use(Router);

const routes = [
    ...plataforma_rotas
]


const router =  new Router({
  mode: 'history',
  routes,
});

export default router
