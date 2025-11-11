<template>
  <aside :class="{'Menu1': expandindo, 'Menu2': !expandindo}">
    <div style="margin: 0; padding: 0;">
        <div :class="{'botaoEstado1': expandindo, 'botaoEstado2': !expandindo}">
            <img src="../assets/ortolink-logo.png" width="45px" alt="">
            <button style="border: none; background-color: transparent; cursor: pointer; margin-top: 10px;" @click="expandir_diminuir()">
                <img :class="{'imgVoltar1': expandindo, 'imgVoltar2': !expandindo}" src="@/assets/seta-direita.png" width="15px" alt="">
            </button>
        </div>
    
        <div style="color: #6187b1; margin-bottom: 0; padding-bottom: 0;" v-show="expandindo">
            MENU
        </div>
    
        <div :class="{'ItensMenu1': expandindo, 'ItensMenu2': !expandindo}">
            <button :class="{'itens-style': expandindo, 'itens-style2': !expandindo}" v-for="(item, index) in itens" :key="index" @click="redirect(item.name)">
                <i class="material-icons botaoIcone">{{item.icone}}</i>
                <div style="display: flex; align-items: center;" class="poppins-regular" v-show="expandindo">
                    {{ item.desc }}
                </div>
            </button>
        </div>
    </div>
    <div style="display: flex; justify-content: center;">
        <button class="logout-button" @click="openModal()">
            <i class="material-icons icone-logout">logout</i>
            <div v-show="expandindo">
                Sair
            </div>
        </button>
    </div>

    <ModalLogout ref="modalLogout" />
  </aside>
</template>

<script>

import ModalLogout from './modalLogout.vue';


export default {
  name: 'SideBar',
  data(){
    return{
        expandindo: true,

        itens:[
            {
                icone: 'dashboard',
                desc: 'Principal',
                name: 'Home'
            },

            {
                icone: 'article',
                desc: 'Nova consulta',
                name: 'NewClient'
            },

            {
                icone: 'calendar_month',
                desc: 'Agendamentos',
                name: 'ViewCalendar'
            },

            {
                icone: 'help',
                desc: 'Ajuda',
                name: 'Help'
            },
        ]
    }
  },
  components: {
    ModalLogout,
  },
  methods:{
    expandir_diminuir(){
        this.expandindo = !this.expandindo
    },

    redirect(rota){
        if(this.$router.currentRoute.name != rota){
            this.$router.push({name:rota})
        }
    },

    openModal(){
        this.$refs.modalLogout.showModal()
    }
  }
}
</script>

<style scoped>

.Menu1 {
    width: 198px;
    height: 100vh;
    background-color: #283849;
    color: #FFF;
    transition: 0.3s;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

@media (max-width: 768px) {
    .Menu1{
        position: fixed;
        z-index: 4;
    }
}

.Menu2{
    width: 80px;
    height: 100vh;
    background-color: #283849;
    color: #FFF;
    transition: 0.3s;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

aside div{
    padding: 1rem;
}

.botaoEstado1{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.imgVoltar1{
    transform: rotate(180deg);
    transition: 0.5s;
}


.imgVoltar2{
    transform: rotate(0deg);
    transition: 0.5s;
}

.botaoEstado2{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.itens-style{
    display: flex;
    align-items: center;
    color: #FFF;
    border: none;
    background-color: transparent;
    transition: 0.5s;
    cursor: pointer;
    font-size: 14px;
    height: 50px;
    width: 100%;
}

.itens-style:hover{
    border-right: solid 6px #42B883;
    background-color: #3c536b;
    transform: translateY(-5px);
}

.itens-style i {
    font-size: 27px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.itens-style:hover i {
    color: #42B883;
    transition: 0.5s;
}

.ItensMenu1{
    margin-top: 5px; 
    padding-top: 0; 
    margin-right: 0px; 
    padding-right: 0px;
}

.ItensMenu2{
    margin-top: 5px; 
    padding: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center; 
    align-items: center;
}

.itens-style2{
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFF;
    border: none;
    background-color: transparent;
    transition: 0.5s;
    cursor: pointer;
    font-size: 16px;
    height: 50px;
    width: 100%;
}

.itens-style2 i {
    font-size: 27px;
}

.itens-style2:hover{
    color: #42B883;
    background-color: #3c536b;
    transform: translateY(-5px);
}

.logout-button{
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    color: #f7f7f7;
    font-size: 15px;
    cursor: pointer;
    transition: 0.5s;
}

.logout-button:hover{
    transition: 0.5s;
    color: #e96464;
    transform: translateY(-5px);
}



</style>
