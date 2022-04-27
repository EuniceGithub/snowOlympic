var myChart = echarts.init(document.getElementById('polarChart'));
option = { 
    title:{
      text:'中\n国\n历\n届\n金\n银\n铜\n总\n数',
      left:'23%',
      top:'25%',
	  textStyle:{
	    fontSize:'1.2rem',
	  }
    },
    angleAxis: {
      axisLabel:{
        textStyle:{
          fontSize:'0.9rem',
        }
      }
    },
    radiusAxis: {
      type: 'category',
      axisLabel: { 
        interval: 0,
        textStyle:{
          fontSize: '0.9rem',
        }
      },
      data: ['1994 ','1998 ', '2002 ', '2006 ', '2010 ', '2014 ', '2018 ', '2022 '],
    },
    polar: {},
    series: [
      {
        type: 'bar',
        data: [0, 0, 2, 2, 5, 3, 1, 9,18],
        coordinateSystem: 'polar',
        name: '金牌',
        stack: 'a',
        itemStyle:{
          color:'#fbc51e',
        },
        emphasis: {
          focus: 'series'
        },
      },
      {
        type: 'bar',
        data: [1, 6, 2, 4, 2, 4, 6, 4,16],
        coordinateSystem: 'polar',
        name: '银牌',
        stack: 'a',
        itemStyle:{
          color:'#d0cdcd',
        },
        emphasis: {
          focus: 'series'
        }
      },
      {
        type: 'bar',
        data: [2, 2, 4, 5, 4, 2, 2, 2, 17],
        coordinateSystem: 'polar',
        name: '铜牌',
        stack: 'a',
        itemStyle:{
          color:'#fb9e55',
        },
        emphasis: {
          focus: 'series'
        },
      }
    ],
    legend: {
      orient: 'vertical',
      right: 120,
  	  top:180,
      show: true,
      data: ['金牌', '银牌', '铜牌'],
      textStyle:{
        fontSize:'0.8rem'
      }
    }
};
myChart.setOption(option);