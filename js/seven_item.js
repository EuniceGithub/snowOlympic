var myChart = echarts.init(document.getElementById('seven_item'));      
            
           
            option = {
                tooltip: {
                    trigger: 'item',
                    triggerOn: 'mousemove'
                },
                series: [
                {
                    type: 'tree',
                    data: [
                        {
                        name: '七大项',
                        children: [
                            {
                            name: '滑冰',
                                children:[{
                                    name:'花样滑冰',
                                    children:[{
                                        name:'男子单人滑',
						
                                    },
                                    {
                                        name:'女子单人滑',
                                    },
                                    {
                                        name:'双人滑',
                                    },
                                    {
                                        name:'冰上舞蹈',
                                    },
                                    {
                                        name:'混合团体',
                                    }]
                                },
                                {
                                    name:'短道速滑',
                                    children:[{
                                        name:'男子500米',
										
										    label: {
										    position: 'right',
										    verticalAlign: 'middle',
										    align: 'left',
										    fontSize:14,
										    }
                                    },
                                    {
                                        name:'男子1000米',
										label: {
										position: 'right',
										verticalAlign: 'middle',
										align: 'left',
										fontSize:14,
										}
                                    },
                                    {
                                        name:'男子1500米',
										label: {
										position: 'right',
										verticalAlign: 'middle',
										align: 'left',
										fontSize:14,
										}
                                    },
                                    {
                                        name:'男子5000米接力',
										label: {
										position: 'right',
										verticalAlign: 'middle',
										align: 'left',
										fontSize:14,
										}
                                    },
                                    {
                                        name:'女子500米',
										label: {
										position: 'right',
										verticalAlign: 'middle',
										align: 'left',
										fontSize:14,
										}
                                    },
                                    {
                                        name:'女子1000米',
										label: {
										position: 'right',
										verticalAlign: 'middle',
										align: 'left',
										fontSize:14,
										}
                                    },
                                    {
                                        name:'女子1500米',
										label: {
										position: 'right',
										verticalAlign: 'middle',
										align: 'left',
										fontSize:14,
										}
                                    },
                                    {
                                        name:'女子3000米接力',
										label: {
										position: 'right',
										verticalAlign: 'middle',
										align: 'left',
										fontSize:14,
										}
                                    },
                                    {
                                        name:'混合团体接力',
										label: {
										position: 'right',
										verticalAlign: 'middle',
										align: 'left',
										fontSize:14,
										}
                                    }]
                                },
                                {
                                    name:'速度滑冰',
                                    children:[{
                                        name:'男子500米',
										label: {
										position: 'right',
										verticalAlign: 'middle',
										align: 'left',
										fontSize:14,
										}
                                    },
                                    {
                                        name:'男子1000米',
										label: {
										position: 'right',
										verticalAlign: 'middle',
										align: 'left',
										fontSize:14,
										}
                                    },
                                    {
                                        name:'男子1500米',
										label: {
										position: 'right',
										verticalAlign: 'middle',
										align: 'left',
										fontSize:14,
										}
                                    },
                                    {
                                        name:'男子5000米',
										label: {
										position: 'right',
										verticalAlign: 'middle',
										align: 'left',
										fontSize:14,
										}
                                    },
                                    {
                                        name:'男子10000米',
										label: {
										position: 'right',
										verticalAlign: 'middle',
										align: 'left',
										fontSize:14,
										}
                                    },
                                    {
                                        name:'男子集体出发',
										label: {
										position: 'right',
										verticalAlign: 'middle',
										align: 'left',
										fontSize:14,
										}
                                    },
                                    {
                                        name:'男子团体追逐',
										label: {
										position: 'right',
										verticalAlign: 'middle',
										align: 'left',
										fontSize:14,
										}
                                    },
                                    {
                                        name:'女子500米',
										label: {
										position: 'right',
										verticalAlign: 'middle',
										align: 'left',
										fontSize:14,
										}
                                    },
                                    {
                                        name:'女子1000米',
										label: {
										position: 'right',
										verticalAlign: 'middle',
										align: 'left',
										fontSize:14,
										}
                                    },
                                    {
                                        name:'女子1500米',
										label: {
										position: 'right',
										verticalAlign: 'middle',
										align: 'left',
										fontSize:14,
										}
                                    },
                                    {
                                        name:'女子3000米',
										label: {
										position: 'right',
										verticalAlign: 'middle',
										align: 'left',
										fontSize:14,
										}
                                    },
                                    {
                                        name:'女子5000米',
										label: {
										position: 'right',
										verticalAlign: 'middle',
										align: 'left',
										fontSize:14,
										}
                                    },
                                    {
                                        name:'女子集体出发',
										label: {
										position: 'right',
										verticalAlign: 'middle',
										align: 'left',
										fontSize:14,
										}
                                    },
                                    {
                                        name:'女子团体追逐',
										label: {
										position: 'right',
										verticalAlign: 'middle',
										align: 'left',
										fontSize:14,
										}
                                    }]
                                }
                                ]
                            },
                            {
                            name: '冰球',
                                children:[{
                                    name:'冰球',
                                    children:[{
                                        name:'男子冰球',
                                    },
                                    {
                                        name:'女子冰球',
                                    }]
                                }
                                ]
                            },
                            {
                            name: '冰壶',
                                children:[{
                                    name:'冰壶',
                                    children:[{
                                        name:'男子冰壶',
                                    },
                                    {
                                        name:'女子冰壶',
                                    },
                                    {
                                        name:'混合双人',
                                    }]
                                }
                                ]
                            },
                            {
                            name: '滑雪',
                                children:[{
                                    name:'高山滑雪',
                                    children:[{
                                        name:'男子滑降',
										label: {
										position: 'right',
										verticalAlign: 'middle',
										align: 'left',
										fontSize:14,
										}
                                    },
                                    {
                                        name:'男子超级大回转',label: {
										    position: 'right',
										    verticalAlign: 'middle',
										    align: 'left',
										    fontSize:14,
										    }
                                    },
                                    {
                                        name:'男子大回转',label: {
										    position: 'right',
										    verticalAlign: 'middle',
										    align: 'left',
										    fontSize:14,
										    }
                                    },
                                    {
                                        name:'男子回转',label: {
										    position: 'right',
										    verticalAlign: 'middle',
										    align: 'left',
										    fontSize:14,
										    }
                                    },
                                    {
                                        name:'男子全能',label: {
										    position: 'right',
										    verticalAlign: 'middle',
										    align: 'left',
										    fontSize:14,
										    }
                                    },
                                    {
                                        name:'女子滑降',label: {
										    position: 'right',
										    verticalAlign: 'middle',
										    align: 'left',
										    fontSize:14,
										    }
                                    },
                                    {
                                        name:'女子超级大回转',label: {
										    position: 'right',
										    verticalAlign: 'middle',
										    align: 'left',
										    fontSize:14,
										    }
                                    },
                                    {
                                        name:'女子大回转',label: {
										    position: 'right',
										    verticalAlign: 'middle',
										    align: 'left',
										    fontSize:14,
										    }
                                    },
                                    {
                                        name:'女子回转',label: {
										    position: 'right',
										    verticalAlign: 'middle',
										    align: 'left',
										    fontSize:14,
										    }
                                    },
                                    {
                                        name:'女子全能',label: {
										    position: 'right',
										    verticalAlign: 'middle',
										    align: 'left',
										    fontSize:14,
										    }
                                    },
                                    {
                                        name:'混合团体赛',label: {
										    position: 'right',
										    verticalAlign: 'middle',
										    align: 'left',
										    fontSize:14,
										    }
                                    }]
                                },
                                {
                                    name:'越野滑雪',
                                    children:[{
                                        name:'男子15公里',label: {
										    position: 'right',
										    verticalAlign: 'middle',
										    align: 'left',
										    fontSize:14,
										    }
                                    },
                                    {
                                        name:'男子双追逐',label: {
										    position: 'right',
										    verticalAlign: 'middle',
										    align: 'left',
										    fontSize:14,
										    }
                                    },
                                    {
                                        name:'男子竞速赛',label: {
										    position: 'right',
										    verticalAlign: 'middle',
										    align: 'left',
										    fontSize:14,
										    }
                                    },
                                    {
                                        name:'男子团体竞速赛',label: {
										    position: 'right',
										    verticalAlign: 'middle',
										    align: 'left',
										    fontSize:14,
										    }
                                    },
                                    {
                                        name:'男子50公里集体出发',label: {
										    position: 'right',
										    verticalAlign: 'middle',
										    align: 'left',
										    fontSize:14,
										    }
                                    },
                                    {
                                        name:'男子4×10公里接力',label: {
										    position: 'right',
										    verticalAlign: 'middle',
										    align: 'left',
										    fontSize:14,
										    }
                                    },
                                    {
                                        name:'女子10公里',label: {
										    position: 'right',
										    verticalAlign: 'middle',
										    align: 'left',
										    fontSize:14,
										    }
                                    },
                                    {
                                        name:'女子双追逐',label: {
										    position: 'right',
										    verticalAlign: 'middle',
										    align: 'left',
										    fontSize:14,
										    }
                                    },
                                    {
                                        name:'女子竞速赛',label: {
										    position: 'right',
										    verticalAlign: 'middle',
										    align: 'left',
										    fontSize:14,
										    }
                                    },
                                    {
                                        name:'女子团体竞速赛',label: {
										    position: 'right',
										    verticalAlign: 'middle',
										    align: 'left',
										    fontSize:14,
										    }
                                    },
                                    {
                                        name:'女子30公里集体出发',label: {
										    position: 'right',
										    verticalAlign: 'middle',
										    align: 'left',
										    fontSize:14,
										    }
                                    },
                                    {
                                        name:'女子4×5公里接力',label: {
										    position: 'right',
										    verticalAlign: 'middle',
										    align: 'left',
										    fontSize:14,
										    }
                                    }]
                                },
                                {
                                    name:'自由式滑雪',
                                    children:[{
                                        name:'男子雪上技巧',label: {
										    position: 'right',
										    verticalAlign: 'middle',
										    align: 'left',
										    fontSize:14,
										    }
                                    },
                                    {
                                        name:'男子空中技巧',label: {
										    position: 'right',
										    verticalAlign: 'middle',
										    align: 'left',
										    fontSize:14,
										    }
                                    },
                                    {
                                        name:'男子障碍追逐',label: {
										    position: 'right',
										    verticalAlign: 'middle',
										    align: 'left',
										    fontSize:14,
										    }
                                    },
                                    {
                                        name:'男子U型场地技巧',label: {
										    position: 'right',
										    verticalAlign: 'middle',
										    align: 'left',
										    fontSize:14,
										    }
                                    },
                                    {
                                        name:'男子坡面障碍技巧',label: {
										    position: 'right',
										    verticalAlign: 'middle',
										    align: 'left',
										    fontSize:14,
										    }
                                    },
                                    {
                                        name:'男子大跳台',label: {
										    position: 'right',
										    verticalAlign: 'middle',
										    align: 'left',
										    fontSize:14,
										    }
                                    },
                                    {
                                        name:'女子雪上技巧',label: {
										    position: 'right',
										    verticalAlign: 'middle',
										    align: 'left',
										    fontSize:14,
										    }
                                    },
                                    {
                                        name:'女子空中技巧',label: {
										    position: 'right',
										    verticalAlign: 'middle',
										    align: 'left',
										    fontSize:14,
										    }
                                    },
                                    {
                                        name:'女子障碍追逐',label: {
										    position: 'right',
										    verticalAlign: 'middle',
										    align: 'left',
										    fontSize:14,
										    }
                                    },
                                    {
                                        name:'女子U型场地技巧',label: {
										    position: 'right',
										    verticalAlign: 'middle',
										    align: 'left',
										    fontSize:14,
										    }
                                    },
                                    {
                                        name:'女子坡面障碍技巧',label: {
										    position: 'right',
										    verticalAlign: 'middle',
										    align: 'left',
										    fontSize:14,
										    }
                                    },
                                    {
                                        name:'女子大跳台',label: {
										    position: 'right',
										    verticalAlign: 'middle',
										    align: 'left',
										    fontSize:14,
										    }
                                    },
                                    {
                                        name:'混合团体空中技巧',label: {
										    position: 'right',
										    verticalAlign: 'middle',
										    align: 'left',
										    fontSize:14,
										    }
                                    }
                                    ]
                                },
                                {
                                    name:'北欧两项',
                                    children:[{
                                        name:'男子个人标准台+10km越野滑雪',
										label: {
										position: 'right',
										verticalAlign: 'middle',
										align: 'left',
										fontSize:12,
										}
                                    },
                                    {
                                        name:'男子个人大跳台+10km越野滑雪',
										label: {
										position: 'right',
										verticalAlign: 'middle',
										align: 'left',
										fontSize:12,
										}
                                    },
                                    {
                                        name:'男子团体大跳台+4×5km接力越野滑雪',
										label: {
										position: 'right',
										verticalAlign: 'middle',
										align: 'left',
										fontSize:12,
										}
                                    }
                                    ],
		
                                },
                                {
                                    name:'跳台滑雪',
                                    children:[{
                                        name:'男子个人标准台',
                                    },
                                    {
                                        name:'男子个人大跳台',
                                    },
                                    {
                                        name:'男子团体',
                                    },
                                    {
                                        name:'女子个人标准台',
                                    },
                                    {
                                        name:'混合团体',
                                    }]
                                },
                                {
                                    name:'单板滑雪',
                                    children:[{
                                        name:'男子平行大回转',label: {
										    position: 'right',
										    verticalAlign: 'middle',
										    align: 'left',
										    fontSize:14,
										    }
                                    },
                                    {
                                        name:'男子U型场地技巧',label: {
										    position: 'right',
										    verticalAlign: 'middle',
										    align: 'left',
										    fontSize:14,
										    }
                                    },
                                    {
                                        name:'男子障碍追逐',label: {
										    position: 'right',
										    verticalAlign: 'middle',
										    align: 'left',
										    fontSize:14,
										    }
                                    },
                                    {
                                        name:'男子坡面障碍技巧',label: {
										    position: 'right',
										    verticalAlign: 'middle',
										    align: 'left',
										    fontSize:14,
										    }
                                    },
                                    {
                                        name:'男子大跳台',label: {
										    position: 'right',
										    verticalAlign: 'middle',
										    align: 'left',
										    fontSize:14,
										    }
                                    },
                                    {
                                        name:'女子平行大回转',label: {
										    position: 'right',
										    verticalAlign: 'middle',
										    align: 'left',
										    fontSize:14,
										    }
                                    },
                                    {
                                        name:'女子U型场地技巧',label: {
										    position: 'right',
										    verticalAlign: 'middle',
										    align: 'left',
										    fontSize:14,
										    }
                                    },
                                    {
                                        name:'女子障碍追逐',label: {
										    position: 'right',
										    verticalAlign: 'middle',
										    align: 'left',
										    fontSize:14,
										    }
                                    },
                                    {
                                        name:'女子坡面障碍技巧',label: {
										    position: 'right',
										    verticalAlign: 'middle',
										    align: 'left',
										    fontSize:14,
										    }
                                    },
                                    {
                                        name:'女子大跳台',label: {
										    position: 'right',
										    verticalAlign: 'middle',
										    align: 'left',
										    fontSize:14,
										    }
                                    },
                                    {
                                        name:'混合团体障碍追逐',label: {
										    position: 'right',
										    verticalAlign: 'middle',
										    align: 'left',
										    fontSize:14,
										    }
                                    }]
                                }
                                ]
                            },
                            {
                            name: '冬季两项',
                                children:[{
                                    name:'冬季两项',
                                    children:[{
                                        name:'男子20公里个人',
                                    },
                                    {
                                        name:'男子10公里短距离',label: {
										    position: 'right',
										    verticalAlign: 'middle',
										    align: 'left',
										    fontSize:14,
										    }
                                    },
                                    {
                                        name:'男子12.5公里追逐',label: {
										    position: 'right',
										    verticalAlign: 'middle',
										    align: 'left',
										    fontSize:14,
										    }
                                    },
                                    {
                                        name:'男子15公里集体出发',label: {
										    position: 'right',
										    verticalAlign: 'middle',
										    align: 'left',
										    fontSize:14,
										    }
                                    },
                                    {
                                        name:'男子4×7.5公里接力',label: {
										    position: 'right',
										    verticalAlign: 'middle',
										    align: 'left',
										    fontSize:14,
										    }
                                    },
                                    {
                                        name:'女子15公里个人',label: {
										    position: 'right',
										    verticalAlign: 'middle',
										    align: 'left',
										    fontSize:14,
										    }
                                    },
                                    {
                                        name:'女子7.5公里短距离',label: {
										    position: 'right',
										    verticalAlign: 'middle',
										    align: 'left',
										    fontSize:14,
										    }
                                    },
                                    {
                                        name:'女子10公里追逐',label: {
										    position: 'right',
										    verticalAlign: 'middle',
										    align: 'left',
										    fontSize:14,
										    }
                                    },
                                    {
                                        name:'女子12.5公里集体出发',label: {
										    position: 'right',
										    verticalAlign: 'middle',
										    align: 'left',
										    fontSize:14,
										    }
                                    },
                                    {
                                        name:'女子4×6公里接力',label: {
										    position: 'right',
										    verticalAlign: 'middle',
										    align: 'left',
										    fontSize:14,
										    }
                                    },
                                    {
                                        name:'女子2×6公里+男子2×7.5公里',label: {
										    position: 'right',
										    verticalAlign: 'middle',
										    align: 'left',
										    fontSize:14,
										    }
                                    }]
                                }
                                ]
                            },
                            {
                            name: '雪车',
                                children:[{
                                    name:'钢架雪车',
                                    children:[{
                                        name:'男子双人',
                                    },
                                    {
                                        name:'男子四人',
                                    },
                                    {
                                        name:'女子单人',
                                    },
                                    {
                                        name:'女子双人',
                                    }]
                                },
                                {
                                    name:'雪车',
                                    children:[{
                                        name:'男子单人',
                                    },
                                    {
                                        name:'女子单人',
                                    }]
                                }
                            ]
                            },
                            {
                            name: '雪橇',
                                children:[{
                                    name:'雪橇',
                                    children:[{
                                        name:'男子单人',
                                    },
                                    {
                                        name:'男子双人',
                                    },
                                    {
                                        name:'女子单人',
                                    },
                                    {
                                        name:'混合团体接力',
                                    }]
                                }
                                ]
                            }
                            ]}
                        ],
                        top: '1%',
                    left: '7%',
                    bottom: '1%',
                    right: '20%',
                    symbolSize: 10,
                    label: {
                        position: 'left',
                        verticalAlign: 'middle',
                        align: 'right',
                        fontSize: 20,
						fontWeight: 550,
                    },
                    leaves: {
                        label: {
                        position: 'right',
                        verticalAlign: 'middle',
                        align: 'left',
                        fontSize:15,
						color:'#484848'
                        }
                    },
                    emphasis: {
                        focus: 'descendant'
                    },
                    expandAndCollapse: true,
                    animationDuration: 550,
                    animationDurationUpdate: 750
                    }
                ]}
            myChart.setOption(option);