<template>
  <div style="padding: 20px;">
    <div class="poppins-regular" style="font-size: 20px;">
      Precisando de ajuda?
    </div>
    <div style="font-size: 16px; color: #777; ">
      Se você estiver com dúvidas ou precisar de suporte, clique no botão abaixo para falar com nosso time.
    </div>

     <b-row no-gutters style="margin-top: 20px;">
        <b-col md="12" lg="6">
            <input class="input-forms poppins-regular" placeholder="Insira o nome..." type="text">
        </b-col>
        <b-col md="12" lg="6">
            <input class="input-forms poppins-regular" placeholder="Insira o número do celular..." type="text">
        </b-col>
    </b-row>
    
    <b-row no-gutters style="margin-top: 20px;">
        <b-col xs="12" >
            <input class="input-forms poppins-regular" placeholder="Insira o email..." type="text">
        </b-col>
    </b-row>

    <b-row no-gutters style="margin-top: 20px;">
        <b-col xs="12" >
            <input class="input-forms poppins-regular" placeholder="Insira a mensagem..." type="text">
        </b-col>
    </b-row>
    
    <b-button variant="primary" style="margin-top: 20px; width: 100%; height: 50px;" @click="abrirSuporte">
      Fale Conosco
    </b-button>


  </div>
</template>

<script>

export default {
  name: 'AjudaInterface',
  components: {
    
  },
  methods:{
    abrirSuporte(){
      alert('Sua mensagem foi enviada!');
    }
  }
}
</script>

<style scoped>
.input-forms{
        width: 100%;
        height: 50px;
        border: solid 1px #CCC;
        border-radius: 5px;
        padding-left: 15px;
        display: flex;
        align-items: center;
    }
</style>
