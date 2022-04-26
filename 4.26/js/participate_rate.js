var myChart = echarts.init(document.getElementById('participate_rate'));      
option = {
  title:{
      text:'中国民众冰雪运动参与频率',
      left:'center',
      top:'8%',
      textStyle:{
        fontSize:20,
		color:'#6c6c6c'
    },
  },
  
  tooltip: {
    trigger: 'item',
    formatter: '{b} : {d}%'
  },
  // legend: {
  //     left: 'left',
  //     top: 'bottom'
  // },
  textStyle:{
    fontSize: 15,
  },
  series: [
    {
    type: 'pie',
      radius: '50%',
      data: [
        { 
          value: 38.43, 
            name: '一年1-2次',
            itemStyle:{
              color: '#5b9ea6'
            } 
        },
        { 
          value: 36.92, 
          name: '三年及以上',
          itemStyle:{
            color:'#a9d4d9'
          } 
        },
        { 
          value: 13.63,
          name: '两年一次',
          itemStyle:{
            color: '#cd7e59'
          }
        },
        { 
          value: 7.16, 
          name: '一年3-5次',
          itemStyle:{
            color: '#d9a384'
          }
        },
        { 
          value: 3.86, 
          name: '一年5次以上', 
          itemStyle:{
            color: '#f4dbc9'
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
        fontSize: 20,
        fontWeight: 'bold'
      }
    }
  }
  ]
};
myChart.setOption(option);