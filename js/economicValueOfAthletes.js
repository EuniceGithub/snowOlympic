var myChart = echarts.init(document.getElementById('economicValueOfAthletes'));
        option = {
        series: {
            type: 'sankey',
            layout: 'none',
            emphasis: {
            focus: 'adjacency'
            },
            lineStyle: {
                color: 'source',
            },
        data: [
			{
			    name: '苏翊鸣',
			    itemStyle: {
 			        color: '#8e8eff',
			    },
                label:{
                    normal:{
                        textStyle:{
                            fontSize: 20,
                            color:'#3d3d3d',
							fontWeight:'550'
                        }
                    }
                },
			},
            {
                name: '谷爱凌',
                itemStyle: {
                    color: '#66ccff',
                },
                label:{
                    normal:{
                        textStyle:{
                            fontSize: 20,
                            color:'#3d3d3d',
							fontWeight:'550'
                        }
                    }
                },
            },
            {
                name: '武大靖',
                itemStyle: {
                    color: '#177cb0',
                },
                label:{
                    normal:{
                        textStyle:{
                            fontSize: 20,
                            color:'#3d3d3d',
							fontWeight:'550'
                         }
                    }
                },
            },
            {
                name: '隋文静、韩聪',
                itemStyle: {
                    color: '#00a2aa',
                },
                label:{
                    normal:{
                        textStyle:{
                            fontSize: 18,
							color:'#3d3d3d',
							fontWeight:'550'
                         }
                    }
                },
            },
           
            //品牌
			{
			    name: '魔爪',
			    itemStyle: {
			        color: '#8e8eff',
			    } ,
				label:{
                    normal:{
                        textStyle:{
                            fontSize: 14,
                            color:'#3d3d3d'
                         }
                    }
                },
			},
			{
			    name: '卡西欧',
			    itemStyle: {
 			        color: '#8e8eff',
			    },
				label:{
				    normal:{
				        textStyle:{
				            fontSize: 14,
                            color:'#3d3d3d'
 				        }
				    }
				},
			},
			{
			    name: '清扬',
			    itemStyle: {
 			        color: '#8e8eff',
			    },
				label:{
				    normal:{
				        textStyle:{
				            fontSize: 14,
                            color:'#3d3d3d'
 				        }
				    }
				},
			},
			{
			    name: '别克',
			    itemStyle: {
 			        color: '#8e8eff',
			    },
				label:{
				    normal:{
				        textStyle:{
				            fontSize: 14,
                            color:'#3d3d3d'
 				        }
				    }
				},
			},
			{
			    name: '修丽可',
			    itemStyle: {
 			        color: '#8e8eff',
			    },
				label:{
				    normal:{
				        textStyle:{
				            fontSize: 14,
                            color:'#3d3d3d'
 				        }
				    }
				},
			},
			{
			    name: '护目镜Oakley',
			    itemStyle: {
 			        color: '#8e8eff',
			    },
				label:{
				    normal:{
				        textStyle:{
				            fontSize: 14,
                            color:'#3d3d3d'
 				        }
				    }
				},
			},
            {
                name: '蒙牛',
                itemStyle: {
                    color: '#8ec6ff',
                },
                label:{
                    normal:{
                        textStyle:{
                            fontSize: 14,
                            color:'#3d3d3d'
                         }
                    }
                },
				
            },
            {
                name: '瑞幸',
                itemStyle: {
			        color: '#8ec6ff',
                },
                label:{
                    normal:{
                        textStyle:{
                            fontSize: 14,
                            color:'#3d3d3d'
                         }
                    }
                },
            },
            {
                name: '汤臣倍健',
                itemStyle: {
			        color: '#8ec6ff',
                },
                label:{
                    normal:{
                        textStyle:{
                            fontSize: 14,
                            color:'#3d3d3d'
                         }
                    }
                },
            },
            {
                name: '中国人保',
                itemStyle: {
			        color: '#8ec6ff',
                },
                label:{
                    normal:{
                        textStyle:{
                            fontSize: 14,
                            color:'#3d3d3d'
                         }
                    }
                },
            },
            {
                name: '中国移动',
                itemStyle: {
			        color: '#8ec6ff',
                },
                label:{
                    normal:{
                        textStyle:{
                            fontSize: 14,
                            color:'#3d3d3d'
                         }
                    }
                },
            },
            {
                name: '美的生活',
                itemStyle: {
			        color: '#8ec6ff',
                },
                label:{
                    normal:{
                        textStyle:{
                            fontSize: 14,
                            color:'#3d3d3d'
                         }
                    }
                },
            },
            {
                name: '慕思寝具',
                itemStyle: {
			        color: '#8ec6ff',
                },
                label:{
                    normal:{
                        textStyle:{
                            fontSize: 14,
                            color:'#3d3d3d'
                         }
                    }
                },
            },
            {
                name: '京东零售',
                itemStyle: {
			        color: '#8ec6ff',
                },
                label:{
                    normal:{
                        textStyle:{
                            fontSize: 14,
                            color:'#3d3d3d'
                         }
                    }
                },
            },
            {
                name: 'GOSKI',
                itemStyle: {
			        color: '#8ec6ff',
                },
                label:{
                    normal:{
                        textStyle:{
                            fontSize: 14,
                            color:'#3d3d3d'
                         }
                    }
                },
                label:{
                    normal:{
                        textStyle:{
                            fontSize: 14,
                            color:'#3d3d3d'
                         }
                    }
                },
            },
            {
                name: '小红书',
                itemStyle: {
			        color: '#8ec6ff',
                },
                label:{
                    normal:{
                        textStyle:{
                            fontSize: 14,
                            color:'#3d3d3d'
                         }
                    }
                },
            },
            {
                name: '夸克',
                itemStyle: {
			        color: '#8ec6ff',
                },
                label:{
                    normal:{
                        textStyle:{
                            fontSize: 14,
                            color:'#3d3d3d'
                         }
                    }
                },
            },
            {
                name: '凯迪拉克',
                itemStyle: {
			        color: '#8ec6ff',
                },
                label:{
                    normal:{
                        textStyle:{
                            fontSize: 14,
                            color:'#3d3d3d'
                         }
                    }
                },
            },
            {
                name: '蒂凡尼',
                itemStyle: {
			        color: '#8ec6ff',
                },
                label:{
                    normal:{
                        textStyle:{
                            fontSize: 14,
                            color:'#3d3d3d'
                         }
                    }
                },
            },
			{
			    name: '肯德基',
			    itemStyle: {
			        color: '#7da2ce',
			    },
                label:{
                    normal:{
                        textStyle:{
                            fontSize: 16,
                            color:'#3d3d3d',
                            fontWeight:'550',
                        }
                    }
                },
			},
            {
                name: '雅诗兰黛',
                itemStyle: {
			        color: '#8ec6ff',
                },
                label:{
                    normal:{
                        textStyle:{
                            fontSize: 14,
                            color:'#3d3d3d'
                         }
                    }
                },
            },
            {
                name: '维密',
                itemStyle: {
			        color: '#8ec6ff',
                },
                label:{
                    normal:{
                        textStyle:{
                            fontSize: 14,
                            color:'#3d3d3d'
                         }
                    }
                },
            },
            {
                name: '科勒',
                itemStyle: {
			        color: '#8ec6ff',
                },
                label:{
                    normal:{
                        textStyle:{
                            fontSize: 14,
                            color:'#3d3d3d'
                         }
                    }
                },
            },
            {
                name: 'Beats耳机',
                itemStyle: {
			        color: '#8ec6ff',
                },
                label:{
                    normal:{
                        textStyle:{
                            fontSize: 14,
                            color:'#3d3d3d'
                         }
                    }
                },
            },
            {
                name: 'Therabody',
                itemStyle: {
			        color: '#8ec6ff',
                },
                label:{
                    normal:{
                        textStyle:{
                            fontSize: 14,
                            color:'#3d3d3d'
                         }
                    }
                },
            },
            {
                name: 'Oakely欧克利',
                itemStyle: {
			        color: '#8ec6ff',
                },
                label:{
                    normal:{
                        textStyle:{
                            fontSize: 14,
                            color:'#3d3d3d'
                         }
                    }
                },
            },
            {
                name: 'IWC万国表',
                itemStyle: {
			        color: '#8ec6ff',
                },
                label:{
                    normal:{
                        textStyle:{
                            fontSize: 14,
                            color:'#3d3d3d'
                         }
                    }
                },
            },
            {
                name: 'FACTION Skis',
                itemStyle: {
			        color: '#8ec6ff',
                },
                label:{
                    normal:{
                        textStyle:{
                            fontSize: 14,
                            color:'#3d3d3d'
                         }
                    }
                },
            },
            {
                name: 'LV',
                itemStyle: {
			        color: '#8ec6ff',
                },
                label:{
                    normal:{
                        textStyle:{
                            fontSize: 14,
                            color:'#3d3d3d'
                         }
                    }
                },
            },
            {
                name: '古奇拉利',
                itemStyle: {
			        color: '#8ec6ff',
                },
                label:{
                    normal:{
                        textStyle:{
                            fontSize: 14,
                            color:'#3d3d3d'
                         }
                    }
                },
            },
            {
                name: '奥地利红牛',
                itemStyle: {
			        color: '#8ec6ff',
                },
                label:{
                    normal:{
                        textStyle:{
                            fontSize: 14,
                            color:'#3d3d3d'
                         }
                    }
                },
            },
            {
                name: '三棵树',
                itemStyle: {
                    color: '#327cab',
                },
                label:{
                    normal:{
                        textStyle:{
                            fontSize: 16,
                            fontWeight:'550',
                            color:'#3d3d3d',
                        }
                    }
                },
            },
            {
                name: '中国银行',
                itemStyle: {
                    color: '#68b2a0',
                },
                label:{
                    normal:{
                        textStyle:{
                            fontSize: 16,
                            fontWeight:'550',
                            color:'#3d3d3d',
                        }
                    }
                },
            },
            {
                name: '元气森林',
                itemStyle: {
                    color: '#6cbcbf',
                },
                label:{
                    normal:{
                        textStyle:{
                            fontSize: 16,
                            fontWeight:'550',
                            color:'#3d3d3d',
                        }
                    }
                },
            },
            {
                name: '安踏',
                itemStyle: {
                    color: '#0ab68b',
                },
                label:{
                    normal:{
                        textStyle:{
                            fontSize: 16,
                            fontWeight:'550',
                            color:'#3d3d3d',
                        }
                    }
                },
            },
            {
                name: '剑网3',
                itemStyle: {
                    color: '#177cb0',
                },
                label:{
                    normal:{
                        textStyle:{
                            fontSize: 14,
                            color:'#3d3d3d'
                         }
                    }
                },
            },
            {
                name: '恒大冰泉',
                itemStyle: {
                    color: '#177cb0',
                },
                label:{
                    normal:{
                        textStyle:{
                            fontSize: 14,
                            color:'#3d3d3d'
                         }
                    }
                },
            },
            {
                name: '红旗汽车',
                itemStyle: {
                    color: '#177cb0',
                },
                label:{
                    normal:{
                        textStyle:{
                            fontSize: 14,
                            color:'#3d3d3d'
                         }
                    }
                },
            },
            {
                name: '伊利',
                itemStyle: {
                    color: '#177cb0',
                },
                label:{
                    normal:{
                        textStyle:{
                            fontSize: 14,
                            color:'#3d3d3d'
                         }
                    }
                },
            },
            {
                name: '作业帮',
                itemStyle: {
                    color: '#177cb0',
                },
                label:{
                    normal:{
                        textStyle:{
                            fontSize: 14,
                            color:'#3d3d3d'
                         }
                    }
                },
            },
            
            {
                name: '盼盼食品',
                itemStyle: {
                    color: '#68b2a0',
                },
                label:{
                    normal:{
                        textStyle:{
                            fontSize: 14,
                            color:'#3d3d3d'
                         }
                    }
                },
            },
            
        ],
        links: [
            {
                source: '谷爱玲',
                target: '蒙牛',
                value: 5
            },
            {
                source: '谷爱玲',
                target: '瑞幸',
                value: 5
            },
            {
                source: '谷爱玲',
                target: '汤臣倍健',
                value: 5
            },
            {
                source: '谷爱玲',
                target: '中国人保',
                value: 5
            },
            {
                source: '谷爱玲',
                target: '中国移动',
                value: 5
            },
            {
                source: '谷爱玲',
                target: '美的生活',
                value: 5
            },
            {
                source: '谷爱玲',
                target: '慕思寝具',
                value: 5
            },
            {
                source: '谷爱玲',
                target: '京东零售',
                value: 5
            },
            {
                source: '谷爱玲',
                target: 'GOSKI',
                value: 5
            },
            {
                source: '谷爱玲',
                target: '小红书',
                value: 5
            },
            {
                source: '谷爱玲',
                target: '夸克',
                value: 5
            },
            {
                source: '谷爱玲',
                target: '凯迪拉克',
                value: 5
            },
            {
                source: '谷爱玲',
                target: '蒂凡尼',
                value: 5
            },
            {
                source: '谷爱玲',
                target: '雅诗兰黛',
                value: 5
            },
            {
                source: '谷爱玲',
                target: '维密',
                value: 5
            },
            {
                source: '谷爱玲',
                target: '',
                value: 5
            },
            {
                source: '谷爱玲',
                target: '科勒',
                value: 5
            },
            {
                source: '谷爱玲',
                target: 'Beats耳机',
                value: 5
            },
            {
                source: '谷爱玲',
                target: 'Therabody',
                value: 5
            },
            {
                source: '谷爱玲',
                target: 'Oakely欧克利',
                value: 5
            },
            {
                source: '谷爱玲',
                target: 'IWC万国表',
                value: 5
            },
            {
                source: '谷爱玲',
                target: 'FACTION Skis',
                value: 5
            },
            {
                source: '谷爱玲',
                target: 'LV',
                value: 5
            },
            {
                source: '谷爱玲',
                target: '古奇拉利',
                value: 5
            },
            {
                source: '谷爱玲',
                target: '奥地利红牛',
                value: 5
            },
            {
                source: '谷爱玲',
                target: '三棵树',
                value: 5
            },
            {
                source: '谷爱玲',
                target: '中国银行',
                value: 5
            },
            {
                source: '谷爱玲',
                target: '元气森林',
                value: 5
            },
            {
                source: '谷爱玲',
                target: '安踏',
                value: 5
            },
            {
                source: '武大靖',
                target: '三棵树',
                value: 5
            },
            {
                source: '武大靖',
                target: '安踏',
                value: 5
            },
            {
                source: '武大靖',
                target: '剑网3',
                value: 5
            },
            {
                source: '武大靖',
                target: '恒大冰泉',
                value: 5
            },
            {
                source: '武大靖',
                target: '红旗汽车',
                value: 5
            },
            {
                source: '武大靖',
                target: '伊利',
                value: 5
            },
            {
                source: '武大靖',
                target: '作业帮',
                value: 5
            },
            {
                source: '武大靖',
                target: '肯德基',
                value: 5
            },
            {
                source: '隋文静、韩聪',
                target: '中国银行',
                value: 5
            },
            {
                source: '隋文静、韩聪',
                target: '安踏',
                value: 5
            },
            {
                source: '隋文静、韩聪',
                target: '盼盼食品',
                value: 5
            },
            {
                source: '苏翊鸣',
                target: '元气森林',
                value: 5
            },
            {
                source: '苏翊鸣',
                target: '肯德基',
                value: 5
            },
            {
                source: '苏翊鸣',
                target: '魔爪',
                value: 5
            },
            {
                source: '苏翊鸣',
                target: '卡西欧',
                value: 5
            },
            {
                source: '苏翊鸣',
                target: '清扬',
                value: 5
            },
            {
                source: '苏翊鸣',
                target: '别克',
                value: 5
            },
            {
                source: '苏翊鸣',
                target: '修丽可',
                value: 5
            },
            {
                source: '苏翊鸣',
                target: '护目镜Oakley',
                value: 5
            },
        ]
    }
    };
    myChart.setOption(option);