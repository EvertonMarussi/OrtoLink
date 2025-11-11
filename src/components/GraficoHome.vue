<template>
  <div class="card-grafico">
    <div class="sessao-titulo">
      <span class="material-symbols-outlined">
        bar_chart
      </span>
      <div class="poppins-regular titulo-card">
        Média de Atendimentos Semanais
      </div>
    </div>

    <div class="sessao-grafico">
      <apexchart 
        type="line"
        :height="'100%'"
        :series="series"
        :options="chartOptions"
      />
    </div>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {
  name: 'CardGraficoAtendimentos',

  components: {
    apexchart: VueApexCharts
  },

  data() {
    return {
      series: [
        {
          name: 'Atendimentos',
          data: [15, 4, 30, 19, 45, 20, 15] // média semanal fictícia
        }
      ],
      chartOptions: {
        chart: {
          id: 'atendimentos-semanais',
          toolbar: { show: false },
          zoom: { enabled: false },
        },
        stroke: {
          curve: 'smooth',
          width: 3
        },
        colors: ['#42B883'],
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'light',
            type: 'vertical',
            shadeIntensity: 0.5,
            gradientToColors: ['#42B883'],
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
          }
        },
        markers: {
          size: 4,
          colors: '#42B883',
          strokeColors: '#fff',
          strokeWidth: 2,
          hover: { size: 6 }
        },
        xaxis: {
          categories: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
          labels: { style: { colors: '#888' } },
          axisBorder: { show: false },
          axisTicks: { show: false }
        },
        yaxis: {
          min: 0,
          labels: { style: { colors: '#888' } }
        },
        grid: {
          borderColor: '#eee',
          row: { colors: ['#f9f9f9', 'transparent'], opacity: 0.5 }
        },
        tooltip: { theme: 'light' },
      }
    }
  }
}
</script>

<style scoped>
.card-grafico {
  width: 100%;
  padding: 20px;
  height: 100%;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
}

.sessao-titulo{
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  color: #888;
  margin-bottom: 15px;
}

.titulo-card{
  margin-left: 10px;
}

.sessao-grafico {
  width: 100%;
}

.card-grafico {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.sessao-grafico {
  flex: 1;       /* ocupa toda altura restante do card */
}

</style>
