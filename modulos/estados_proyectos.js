  function cargar_grafica() {
    setTimeout(function(){ grafica_estado_proyectos(); }, 1000);
  }

  function grafica_estado_proyectos() {
    

// Build the chart
Highcharts.chart('container_estados', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '{point.percentage:.1f} %',
                distance: -50,
                filter: {
                    property: 'percentage',
                    operator: '>',
                    value: 4
                }
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Resueltas',
            y: 11.84
        }, {
            name: 'Usuarios',
            y: 10.85
        }, {
            name: 'Suspendidas',
            y: 4.67
        }, {
            name: 'Evaluacion',
            y: 4.18
        }]
    }]
});


  }
      
