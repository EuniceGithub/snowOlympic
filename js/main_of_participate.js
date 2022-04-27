var myChart = echarts.init(document.getElementById('main_of_participate'));
			    option = {
			        title: {
			            text: '中国群众各类冰雪运动参与率',
			            left: 'center'
			        },
			        tooltip: {
			            trigger: 'item',
			            formatter: '{b}: {c}%'
			        },
			        legend: {
			            orient: 'vertical',
			            top: 'center',
						right:'right',
			        },
			        series: [
			            {
			            name: 'Access From',
			            type: 'pie',
			            radius: ['40%', '70%'],
			            avoidLabelOverlap: false,
			            itemStyle: {
			                borderRadius: 10,
			                borderColor: '#fff',
			                borderWidth: 2
			            },
			            label: {
			                show: false,
			                position: 'center'
			            },
			            emphasis: {
			                label: {
			                show: true,
			                fontSize: '24',
			                fontWeight: 'bold',
			                }
			            },
			            labelLine: {
			                show: false
			            },
			            data: [
			                { 
                                value: 54.8,
                                name: '滑冰',
                                itemStyle:{
                                    color:'#5b9ea6'
                                }  
                            },
			                { 
                                value: 52.4, 
                                name: '冰雪嘉年华',
                                itemStyle:{
                                    color:'#a9d4d9'
                                }  
                            },
			                { 
                                value: 42.6, 
                                name: '滑雪', 
                                itemStyle:{
                                    color:'#cd7e59'
                                }  
                            },
			                { 
                                value: 27.8, 
                                name: '民俗冰雪运动',
                                itemStyle:{
                                    color:'#d9a384'
                                }  
                            },
			                { 
                                value: 13.7, 
                                name: '雪车、雪橇',
                                itemStyle:{
                                    color:'#f4dbc9'
                                }  
                            }
			            ]
			            }
			        ]
			        };
			    myChart.setOption(option);