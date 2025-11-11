<template>
  <div class="application">
    <aside>
      <sideBar />
    </aside>
    <div class="conteudo-header">
      <header id="headerHeight" ><headerTop/></header>
      <main  :style="`height: calc(100vh - ${alturaHeader}px);`" style="overflow-y: scroll;" > 
        <transition
          name="fade"
          mode="out-in"
        >
          <router-view ></router-view>
        </transition>
      </main>
    </div>
  </div>
</template>

<script>

import sideBar from '@/components/sideBar.vue';
import headerTop from '@/components/headerTop.vue';

export default {
  name: 'PlataformaView',

  data(){
    return{
      alturaHeader: 0
    }
  },

  components: {
    sideBar,
    headerTop
  },

  mounted(){
    const headerHeight = document.getElementById('headerHeight').clientHeight
    this.alturaHeader = headerHeight
  }
}
</script>

<style scoped>

.application{
  display: flex;
}

.conteudo-header{
  width: 100%;
  display: flex;
  flex-direction: column;
}

.application div main{
  background-color: #F7F7F7;
}

/* Efeito de fade */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
