<template>
  <div style="padding: 20px;">
    <div class="poppins-regular" style="font-size: 20px;">
      Olá dentista, seja bem-vindo!
    </div>
    <div class="main-dashboard">
      <div class="card card-0">
        <img src="@/assets/banner-dash.png" alt="">
      </div>
      <div class="card card-1">
        <CarHomeQuadrado :positivo="true" :icone="'person'" :titulo="'Pacientes'" :valor="423" :indice="5.20" :frase="'Índice de clientes'"/>
      </div>
      <div class="card card-2">
        <CarHomeQuadrado :positivo="true" :icone="'money_bag'" :titulo="'Faturamento'" :dinheiro="true" :valor="17521.23" :indice="1.2" :frase="'Aumento médio'"/>
      </div>
      <div class="card card-3">
        <CardTableHome />
      </div>
      <div class="card card-4">
        <CarHomeQuadrado :positivo="false" :icone="'computer_cancel'" :titulo="'Cancelamentos'" :valor="14" :indice="3.70" :frase="'Índice de cancelamento'"/>
      </div>
      <div class="card card-5">
        <CarHomeQuadrado :positivo="true" :icone="'thumb_up'" :titulo="'Satisfação'" :valor="4.5" :indice="7.60" :frase="'Índice de satisfação'"/>
      </div>
      <div class="card card-6">
        <GraficoHome />
      </div>
    </div>
  </div>
</template>

<script>

import CarHomeQuadrado from '@/components/CarHomeQuadrado.vue';
import CardTableHome from '@/components/CardTableHome.vue';
import GraficoHome from '@/components/GraficoHome.vue';

export default {
  name: 'HomeInterface',
  components: {
    CarHomeQuadrado,
    CardTableHome,
    GraficoHome,
  }
}
</script>

<style scoped>

.main-dashboard{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 200px;
  grid-gap: 15px;
  margin-top: 30px;
  grid-template-areas: 
    "card-0  card-0  card-0  card-0"
    "card-0  card-0  card-0  card-0"
    "card-1  card-2  card-3  card-3"
    "card-4  card-5  card-3  card-3"
    "card-6  card-6  card-6  card-6"
    "card-6  card-6  card-6  card-6"
    "card-6  card-6  card-6  card-6"
  ;
}

.card-1{
  grid-area: card-1;
}

.card-2{
  grid-area: card-2;
}

.card-3{
  grid-area: card-3;
}

.card-4{
  grid-area: card-4;
}

.card-0{
  grid-area: card-0;
}

.card-5{
  grid-area: card-5;
}

.card-6{
  grid-area: card-6;
}

.card-0 img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: fill; /* força a imagem a preencher, distorcendo se necessário */
  position: absolute;
  top: 0;
  left: 0;
}

.card{
  border: none;
  border-radius: 10px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
  overflow: hidden;
}

@media (max-width: 1170px) {
  .main-dashboard{
    grid-template-areas: 
      "card-0  card-0  card-0  card-0"
      "card-1  card-1  card-2  card-2"
      "card-4  card-4  card-5  card-5"
      "card-3  card-3  card-3  card-3"
      "card-3  card-3  card-3  card-3"
      "card-6  card-6  card-6  card-6"
      "card-6  card-6  card-6  card-6"
    ;
  }
}

@media (max-width: 768px) {
  .main-dashboard{
    grid-template-areas:
      "card-0  card-0  card-0  card-0"
      "card-1  card-1  card-1  card-1"
      "card-2  card-2  card-2  card-2"
      "card-4  card-4  card-4  card-4"
      "card-5  card-5  card-5  card-5"
      "card-3  card-3  card-3  card-3"
      "card-3  card-3  card-3  card-3"
      "card-6  card-6  card-6  card-6"
      "card-6  card-6  card-6  card-6"
    ;
  }
}


</style>
