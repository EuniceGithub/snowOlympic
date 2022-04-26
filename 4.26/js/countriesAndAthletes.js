 var myChart = echarts.init(document.getElementById('main_of_CountriesAndAthletes'));
option = {
    title:{
        text:"历届冬奥参与国家及运动员总数",
        left:'center',
        textStyle:{
            fontSize:22,
			color:'#6c6c6c'
        }
    },
    tooltip: {
    trigger: 'axis',
    axisPointer: {
        type: 'cross',
        crossStyle: {
            color: '#999'
        }
    }
    },
    
    legend: {
        data: ['国家和地区', '运动员'],
        left: 'right'
    },
    xAxis: [
        {
        type: 'category',
        data: ['第1届', '第2届', '第3届', '第4届', '第5届', 
            '第6届', '第7届','第8届', '第9届','第10届',
            '第11届', '第12届', '第13届', '第14届', '第15届',
            '第16届', '第17届','第18届', '第19届','第20届',
            '第21届', '第22届', '第23届', '第24届',],
        axisPointer: {
            type: 'shadow'
        },
        }
    ],
    yAxis: [
        {
        type: 'value',
        name: '国家和地区',
        min: 0,
        max: 120,
        interval: 20,
        axisLabel: {
            formatter: '{value}'
        }
        },
    {
    type: 'value',
    name: '运动员',
    min: 0,
    max: 3000,
    interval: 500,
    axisLabel: {
        formatter: '{value}'
    }
    }
],
series: [
    {
    name: '国家和地区',
    type: 'bar',
    tooltip: {
        valueFormatter: function (value) {
        return value + '个';
        }
    },
    data: [
        16, 25, 17, 28, 28, 30, 32, 30, 36, 37,
        35, 37, 37, 49, 57, 64, 67, 72, 77, 80,
        82, 87, 92, 91
    ]
    },
    {
    name: '运动员',
    type: 'line',
    yAxisIndex: 1,
    tooltip: {
        valueFormatter: function (value) {
        return value + '人';
        }
    },
    data: [258, 464, 252, 646, 669, 694, 821, 665, 1091, 1158,
        1006, 1123, 1072, 1272, 1423, 1801, 1737, 2176, 2399, 2508,
        2566, 2873, 2914, 2892]
    }
]
};
myChart.setOption(option);