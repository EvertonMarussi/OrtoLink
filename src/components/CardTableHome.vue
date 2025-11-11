<template>
  <div class="card-tabela">
    <div class="sessao-titulo">
      <span class="material-symbols-outlined">
        list_alt
      </span>
      <div class="poppins-regular titulo-card">
        Meus clientes
      </div>
    </div>

    <div class="sessao-tabela">
        <b-table
          striped
          hover
          bordered
          :items="usuarios"
          :fields="fields"
          responsive="sm"
        >
          <!-- Slot personalizado para a coluna "ver" -->
          <template #cell(ver)="data">
            <b-button size="sm" variant="primary" @click="verDetalhes(data.item)">
              Ver
            </b-button>
          </template>
        </b-table>
    </div>
  </div>
</template>

<script>
export default{
  name: 'CardHomeQuadrado',
  data() {
    return {
            fields: [
              { key: 'nome', label: 'Nome', sortable: false },
              { key: 'desde', label: 'Desde', sortable: false },
              { key: 'cpf', label: 'CPF', sortable: false },
              { key: 'ver', label: 'Ver' }
            ],

            usuarios: [
              { nome: 'João Silva', desde: '2021-05-12', cpf: '123.456.789-00' },
              { nome: 'Maria Souza', desde: '2022-01-08', cpf: '987.654.321-11' },
              { nome: 'Carlos Lima', desde: '2020-11-03', cpf: '111.222.333-44' },
              { nome: 'Ana Pereira', desde: '2019-07-15', cpf: '555.666.777-88' },
              { nome: 'Roberto Santos', desde: '2021-09-22', cpf: '999.888.777-66' },
              { nome: 'Fernanda Oliveira', desde: '2020-03-11', cpf: '444.555.666-77' },
              { nome: 'Paulo Almeida', desde: '2018-12-05', cpf: '222.333.444-55' },
              { nome: 'Camila Rodrigues', desde: '2021-06-18', cpf: '333.444.555-66' },
              { nome: 'Rafael Costa', desde: '2019-01-28', cpf: '777.888.999-00' },
              { nome: 'Mariana Lima', desde: '2022-04-10', cpf: '888.999.000-11' },
              { nome: 'Lucas Martins', desde: '2020-08-30', cpf: '666.777.888-22' }
            ]
        }
    },

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
  },

  methods:{
    verDetalhes(){

    }
  }
}
</script>
<style scoped>
.card-tabela {
  height: calc(100% - 35px);
  width: 100%;
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

.sessao-tabela{
  width: 100%;
  height: 100%;
  overflow-y: auto;
  margin-top: 15px;
}

.header-tabela{
  display: flex;
  justify-content: space-between;
}
</style>
