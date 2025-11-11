<template>
  <div style="padding: 20px;">
    <div class="poppins-regular titulo">
      Novo Agendamento de Exame
    </div>
    <div class="poppins-regular descricao">
      Preencha o formulário abaixo com os dados do paciente e do exame. Clique em "Agendar Exame" para salvar ou "Limpar formulário" para reiniciar todos os campos.
    </div>

    <!-- Dados do paciente -->
    <b-row no-gutters class="mt-3">
      <b-col md="12" lg="6">
        <input class="input-forms poppins-regular" placeholder="Nome do paciente..." type="text" v-model="form.nome">
      </b-col>
      <b-col md="12" lg="6">
        <input class="input-forms poppins-regular" placeholder="Número do celular..." type="text" v-model="form.celular">
      </b-col>
    </b-row>

    <b-row no-gutters class="mt-3">
      <b-col md="12" lg="6">
        <input class="input-forms poppins-regular" placeholder="E-mail..." type="text" v-model="form.email">
      </b-col>
      <b-col md="12" lg="6">
        <input class="input-forms poppins-regular" placeholder="CPF..." type="text" v-model="form.cpf">
      </b-col>
    </b-row>

    <!-- Dados do exame -->
    <b-row no-gutters class="mt-3">
      <b-col md="12" lg="6" >
        <b-form-datepicker
          v-model="form.dataExame"
          :min="minDate"
          :max="maxDate"
          locale="pt-BR"
          style="display: flex; align-items: center;"
          class="mb-3 input-forms"
          placeholder="Data do exame"
        ></b-form-datepicker>
      </b-col>
      <b-col md="12" lg="6">
        <input class="input-forms poppins-regular" placeholder="Horário do exame..." type="time" v-model="form.horario">
      </b-col>
    </b-row>

    <b-row no-gutters class="mt-3">
      <b-col md="12" lg="6">
        <input class="input-forms poppins-regular" placeholder="Tipo de exame..." type="text" v-model="form.tipoExame">
      </b-col>
      <b-col md="12" lg="6">
        <input class="input-forms poppins-regular" placeholder="Convênio (se houver)..." type="text" v-model="form.convenio">
      </b-col>
    </b-row>

    <b-row no-gutters class="mt-3">
      <b-col md="12" lg="6">
        <input class="input-forms poppins-regular" placeholder="Médico solicitante..." type="text" v-model="form.medicoSolicitante">
      </b-col>
      <b-col md="12" lg="6">
        <select class="input-forms poppins-regular" v-model="form.prioridade">
          <option value="" disabled>Prioridade do exame</option>
          <option value="normal">Normal</option>
          <option value="urgente">Urgente</option>
          <option value="emergencia">Emergência</option>
        </select>
      </b-col>
    </b-row>

    <b-row no-gutters class="mt-3">
      <b-col xs="12">
        <textarea class="input-forms poppins-regular" placeholder="Observações adicionais (opcional)" v-model="form.observacoes" rows="3"></textarea>
      </b-col>
    </b-row>

    <!-- Botões -->
    <b-row no-gutters class="mt-3">
      <b-col md="12" lg="6" class="mb-2 mb-lg-0">
        <button class="limparTudo" @click="limparFormulario">
          Limpar tudo
        </button>
      </b-col>
      <b-col md="12" lg="6">
        <button class="agendarConsulta" @click="agendarExame">
          Agendar exame
        </button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'NovaConsultaExame',
  data() {
    return {
      minDate: new Date().toISOString().split('T')[0],
      maxDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
      form: {
        nome: '',
        celular: '',
        email: '',
        cpf: '',
        dataExame: '',
        horario: '',
        tipoExame: '',
        convenio: '',
        medicoSolicitante: '',
        prioridade: '',
        observacoes: ''
      }
    }
  },
  methods: {
    limparFormulario() {
      this.form = {
        nome: '',
        celular: '',
        email: '',
        cpf: '',
        dataExame: '',
        horario: '',
        tipoExame: '',
        convenio: '',
        medicoSolicitante: '',
        prioridade: '',
        observacoes: ''
      };
    },
    agendarExame() {
      alert('Exame agendado com sucesso!');
      this.limparFormulario();
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
  padding: 0 15px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  box-sizing: border-box;
}

textarea.input-forms {
  padding-top: 10px;
}

.limparTudo{
  background-color: #888;
  color: #f7f7f7;
  border: none;
  width: 100%;
  height: 50px;
  font-size: 16px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
}

.agendarConsulta{
  background-color: #42B883;
  color: #f7f7f7;
  border: none;
  width: 100%;
  height: 50px;
  font-size: 16px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
}

.titulo {
  font-size: 20px;
}

.descricao {
  font-size: 16px;
  color: #555;
  margin-top: 5px;
}
</style>
