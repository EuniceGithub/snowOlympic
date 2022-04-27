var myChart = echarts.init(document.getElementById('zones-expand'));      
option = {
  title: {
    text:'冰雪运动“南展西扩东进”',
    left: 'center',
    top:'8%',
    textStyle:{
        fontSize:20,
		color:'#6c6c6c'
    },
  },
  tooltip: {
    trigger: 'item',
	  formatter: '{b} : {c}亿人'
  },
  textStyle:{
    fontSize: 15,
  },
  // legend: {
  //   top:'5%',
  //   right: 'right',
  //   top: 'center',
  //   orient: 'vertical'
  // },
  series: [
    {
      type: 'pie',
      radius: '50%',
      data: [
        { 
          value: 1.43, 
          name: '东部',
          itemStyle:{
            color: '#5b9ea6'
          }
        },
        { 
          value: 0.68, 
          name: '中部',
          itemStyle:{
            color: '#d9a384'
          }
        },
        { 
          value: 0.84, 
          name: '西部',
          itemStyle:{
            color: '#cd7e59'
          }
        },
        { 
          value: 0.51, 
          name: '东北',
          itemStyle:{
            color: '#a9d4d9'
          }
        }
      ],
	  itemStyle: {
	    borderRadius: 8,
	    borderColor: '#fff',
	    borderWidth: 3
	  },
      emphasis: {
        label: {
          show: true,
          fontSize: '20',
          fontWeight: 'bold'
        }
      }
    }
  ]
};
myChart.setOption(option);
