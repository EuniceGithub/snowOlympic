 var myChart = echarts.init(document.getElementById('main_of_womenInWinterOlympics'));
option = {
    title:{
        text:"历届冬奥会女性运动员占比",
        left:'center',
        textStyle:{
            fontSize:18,
        }
    },
    tooltip: {
    trigger: 'axis',
        axisPointer: {
        type: 'cross',
        crossStyle: {
            color: '#999',
			width:2,
        }
    }
    },
    xAxis: [
        {
        type: 'category',
        data: ['1924', '1928', '1932', '1936', '1948',
            '1952', '1956','1960','1964', '1968',
            '1972', '1976', '1980','1984', '1988',
            '1992', '1994','1998','2002','2006',
            '2010', '2014', '2018', '2022',
            ],
        axisPointer: {
            type: 'shadow'
        },
        axisLabel: {
                interval:0,
				textStyle:{
				    fontSize:10,
					color:'#b6b6b6'
				}
        },
        
        }
    ],
    yAxis: [
    {
    type: 'value',
    name: '比例',
    min: 0,
    max: 48,
    interval: 8,
    axisLabel: {
        formatter: '{value} %',
		textStyle:{
		    fontSize:11,
			fontWeight:'bold',
			color:'#b6b6b6'
		}
    }
    }
],
series: [
    {
        name: '女性运动员人数占比',
        type: 'line',
        tooltip: {
            valueFormatter: function (value) {
            return value + ' %';
            }
        },
        data: [5.03, 5.60, 8.33, 12.38, 11.51, 
            15.70, 16.09, 17.14, 18.33, 19.08,
            20.38, 20.74, 21.64, 21.54, 21.15,
            27.09, 30.05, 36.16, 36.93, 37.20,
            41.54, 40.34, 42.50, 45.44],
        areaStyle: {
            color: '#7bc6ff'
        },
        lineStyle:{
            color: '#2f89ff'
        },
        itemStyle:{
            color: '#00aaff'
        },
        label: {
            show: true,
            position:'top',
            textStyle: {
            fontSize: 10,
            color: '#878787'
            }
        }
    }
]
};
myChart.setOption(option);