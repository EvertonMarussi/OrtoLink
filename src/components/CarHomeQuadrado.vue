<template>
  <div class="card-quadrado">
    <div class="sessao-titulo">
      <span class="material-symbols-outlined">
        {{icone}}
      </span>
      <div class="poppins-regular titulo-card">
        {{titulo}}
      </div>
    </div>


    <div class="value-card poppins-medium" v-if="!dinheiro">
      {{valor}}
    </div>
    <div v-else class="value-card poppins-medium">
      R$ {{ valor }}
    </div>

    <div class="indice-frase">
      <div :class="{'indice-numero-positivo': positivo, 'indice-numero-negativo': !positivo}">
        <i class="material-icons icone">
            arrow_drop_down
        </i>
        <div>
          {{indice}}%
        </div>
      </div>
      <div class="frase poppins-regular">
        {{frase}}
      </div>
    </div>
  </div>
</template>
<script>
export default{
  name: 'CardHomeQuadrado',
  props:{
    positivo: {
      type: Boolean
    },
    icone:{
      type: String
    },
    titulo: {
      type: String
    },
    valor:{
      type: Number
    },
    indice:{
      type: Number
    },
    frase:{
      type: String
    },
    dinheiro:{
      tyoe: Boolean
    }
  }
}
</script>
<style scoped>
.card-quadrado {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
}

.sessao-titulo{
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  color: #888;
}

.icone-titulo{
  font-size: 1.88rem;
}

.titulo-card{
  margin-left: 10px
}

.value-card{
  font-size: 1.88rem;
}

.indice-frase{
  display: flex;
  justify-content: start;
  flex-direction: column;
}

.indice-numero-positivo{
  display: flex;
  font-size: 1.1rem;
  color: #00AA00;
  background-color: rgb(0, 200, 0, 0.15);
  justify-content: center;
  width: 90px;
  border-radius: 50px;
}

.indice-numero-negativo{
  display: flex;
  font-size: 1.1rem;
  color: #AA0000;
  background-color: rgb(200, 0, 0, 0.15);
  justify-content: center;
  width: 90px;
  border-radius: 50px;
}

.frase{
  margin-top: 8px;
  color: #777;
}

</style>
