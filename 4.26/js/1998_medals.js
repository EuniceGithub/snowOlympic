var myChart = echarts.init(document.getElementById('medals_1998'));
            option = {
				title: {
				  text:'1998年:长野冬奥会',
                  left:'center',
                  top:10,
					textStyle:{
					    fontSize:18,
						fontWeight: 'bolder',
						color: '#515151'  
					},
				},
                tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c}个 ({d}%)'
                },
                legend: {
				top:'85%',
				left: 'center',
                data: [
                    // '金牌',
                    // '银牌',
                    // '铜牌',
                    // '短道速滑(银牌)',
                    // '短道速滑(铜牌)',
                    // '花样滑冰(铜牌)',
                    // '自由式滑雪(银牌)'
                ]
                },
                series: [
                {
                    name: '1998年冬奥会中国奖牌数',
                    type: 'pie',
                    selectedMode: 'single',
                    radius: [0, '30%'],
                    label: {
                    position: 'inner',
                    fontSize: 14
                    },
                    labelLine: {
                    show: false
                    },
                    data: [
                    { value: 0, name: '金牌' },
                    { value: 6, name: '银牌' },
                    { value: 2, name: '铜牌' }
                    ]
                },
                {
                    name: '项目奖牌数',
                    type: 'pie',
                    radius: ['45%', '60%'],
                    labelLine: {
                    length: 30
                    },
                    label: {
                    formatter: '{a|{a}}{abg|}\n{hr|}\n {b|{b}:}{c}个  ',
                    backgroundColor: '#F6F8FC',
                    borderColor: '#8C8D8E',
                    borderWidth: 1,
                    borderRadius: 5,
                    rich: {
                        a: {
                        color: '#6E7079',
                        lineHeight: 22,
                        align: 'center'
                        },
                        hr: {
                        borderColor: '#8C8D8E',
                        width: '100%',
                        borderWidth: 1.5,
                        height: 0
                        },
                        b: {
                        color: '#4C5058',
                        fontSize: 12,
                        fontWeight: 'bold',
                        lineHeight: 28
                        },
                        per: {
                        color: '#fff',
                        backgroundColor: '#4C5058',
                        padding: [3, 4],
                        borderRadius: 5
                        }
                    }
                    },
                    data: [
                    { value: 5, name: '短道速滑(银)' },
                    { value: 1, name: '短道速滑(铜)' },
                    { value: 1, name: '花样滑冰(铜)' },
                    { value: 1, name: '自由式滑雪(银)' }
                    ]
                }
                ]
            };
            myChart.setOption(option);  