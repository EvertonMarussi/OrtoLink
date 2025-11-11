<template>
  <div style="padding: 20px;">
    <div class="poppins-medium titulo">
      Clientes agendados
    </div>

    <b-table
      striped
      hover
      bordered
      :items="clientes"
      :fields="fields"
      responsive="sm"
      class="mt-3"
    >
      <!-- Badge de status -->
      <template #cell(status)="data">
        <div :class="['status-badge', data.item.status]">
          {{ data.item.statusLabel }}
        </div>
      </template>

      <!-- Botão Ver -->
      <template #cell(ver)="data">
        <b-button
          size="sm"
          variant="primary"
          @click="abrirModal(data.item)"
          class="poppins-medium"
        >
          Ver
        </b-button>
      </template>
    </b-table>

    <!-- Modal de Detalhes -->
    <b-modal
      id="modalDetalhes"
      :title="modalCliente?.nome || ''"
      hide-footer
      :hide-header-close="true"
      centered
    >
      <div class="poppins-regular">
        <p><strong>Data:</strong> {{ modalCliente?.dataAgendamento }}</p>
        <p><strong>Hora:</strong> {{ modalCliente?.hora }}</p>
        <p><strong>Serviço:</strong> {{ modalCliente?.servico }}</p>
        <p><strong>Status:</strong> 
          <span :class="['status-badge', modalCliente?.status]">{{ modalCliente?.statusLabel }}</span>
        </p>
        <p><strong>Descrição do procedimento:</strong></p>
        <p>{{ modalCliente?.descricao }}</p>
      </div>
      <b-button variant="secondary" class="mt-3" @click="$bvModal.hide('modalDetalhes')">
        Fechar
      </b-button>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'NovaConsulta',
  data() {
    return {
      fields: [
        { key: 'nome', label: 'Nome' },
        { key: 'dataAgendamento', label: 'Data Agendamento' },
        { key: 'hora', label: 'Hora' },
        { key: 'servico', label: 'Serviço' },
        { key: 'status', label: 'Status' },
        { key: 'ver', label: 'Ver' }
      ],

      clientes: [
        { nome: 'João Silva', dataAgendamento: '2025-11-08', hora: '09:00', servico: 'Consulta', status: 'tudo-ok', statusLabel: 'Tudo OK', descricao: 'Consulta de rotina para avaliação geral.' },
        { nome: 'Maria Souza', dataAgendamento: '2025-11-08', hora: '10:00', servico: 'Limpeza', status: 'urgente', statusLabel: 'Urgente', descricao: 'Limpeza dental profunda, priorizar manchas difíceis.' },
        { nome: 'Carlos Lima', dataAgendamento: '2025-11-09', hora: '11:00', servico: 'Extração', status: 'cancelado', statusLabel: 'Cancelado', descricao: 'Extração do dente 18, reagendamento necessário.' },
        { nome: 'Ana Pereira', dataAgendamento: '2025-11-09', hora: '12:00', servico: 'Clareamento', status: 'em-observacao', statusLabel: 'Em Observação', descricao: 'Clareamento dental, avaliar sensibilidade.' },
        { nome: 'Roberto Santos', dataAgendamento: '2025-11-10', hora: '09:30', servico: 'Consulta', status: 'tudo-ok', statusLabel: 'Tudo OK', descricao: 'Consulta de rotina, sem queixas relatadas.' },
        { nome: 'Fernanda Oliveira', dataAgendamento: '2025-11-10', hora: '11:00', servico: 'Limpeza', status: 'urgente', statusLabel: 'Urgente', descricao: 'Limpeza com remoção de cálculo dental avançado.' },
        { nome: 'Paulo Almeida', dataAgendamento: '2025-11-11', hora: '10:15', servico: 'Consulta', status: 'cancelado', statusLabel: 'Cancelado', descricao: 'Paciente faltou na última consulta.' },
        { nome: 'Camila Rodrigues', dataAgendamento: '2025-11-11', hora: '13:00', servico: 'Clareamento', status: 'em-observacao', statusLabel: 'Em Observação', descricao: 'Clareamento parcial, monitorar resultado.' },
        { nome: 'Rafael Costa', dataAgendamento: '2025-11-12', hora: '09:00', servico: 'Extração', status: 'tudo-ok', statusLabel: 'Tudo OK', descricao: 'Extração do dente 28 sem complicações.' },
        { nome: 'Mariana Lima', dataAgendamento: '2025-11-12', hora: '14:00', servico: 'Consulta', status: 'urgente', statusLabel: 'Urgente', descricao: 'Consulta para dor intensa, priorizar atendimento.' },
        { nome: 'Lucas Martins', dataAgendamento: '2025-11-13', hora: '10:00', servico: 'Limpeza', status: 'tudo-ok', statusLabel: 'Tudo OK', descricao: 'Limpeza de rotina sem observações.' },
        { nome: 'Beatriz Fernandes', dataAgendamento: '2025-11-13', hora: '15:00', servico: 'Consulta', status: 'em-observacao', statusLabel: 'Em Observação', descricao: 'Consulta de acompanhamento pós-tratamento.' }
      ],

      modalCliente: null
    }
  },
  methods: {
    abrirModal(cliente) {
      this.modalCliente = cliente;
      this.$bvModal.show('modalDetalhes');
    }
  }
}
</script>

<style scoped>
/* Títulos com Poppins */
.titulo {
  font-size: 20px;
}

/* Badge de status */
.status-badge {
  display: inline-block;
  padding: 4px 10px;
  font-weight: 600;
  border-radius: 12px;
  font-size: 0.875rem;
  text-align: center;
  font-family: 'Poppins', sans-serif;
}

/* Status cores */
.status-badge.tudo-ok {
  background-color: #d4edda; /* verde claro */
  color: #155724; /* verde escuro */
}

.status-badge.urgente {
  background-color: #fff3cd; /* amarelo claro */
  color: #856404; /* amarelo escuro */
}

.status-badge.cancelado {
  background-color: #f8d7da; /* vermelho claro */
  color: #721c24; /* vermelho escuro */
}

.status-badge.em-observacao {
  background-color: #e2d6f0; /* roxo claro */
  color: #4b0082; /* roxo escuro */
}

/* Fonte poppins */
.poppins-regular {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}

.poppins-medium {
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
}
</style>
