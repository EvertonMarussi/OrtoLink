import PlataformaView from '@/layouts/PlataformaView.vue';


const plataforma_rotas = [
    {
      path: '/',
      component: PlataformaView, // Layout principal
      children: [
        {
          path: '', // rota '/' será Home
          name: 'Home',
          component: () =>
            import(
              /* webpackChunkName: "home" */ '../views/Home.vue'
            )
        },
        {
          path: 'ajuda', // rota '/about'
          name: 'Help',
          component: () =>
            import(
              /* webpackChunkName: "about" */ '../views/Ajuda.vue'
            )
        },
        {
          path: 'nova-agenda', // rota '/about'
          name: 'NewClient',
          component: () =>
            import(
              /* webpackChunkName: "about" */ '../views/NovaConsulta.vue'
            )
        },
        {
          path: 'visualizar-agenda', // rota '/about'
          name: 'ViewCalendar',
          component: () =>
            import(
              /* webpackChunkName: "about" */ '../views/VerAgenda.vue'
            )
        },
      ]
      
    }
]

export default plataforma_rotas