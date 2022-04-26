var myChart = echarts.init(document.getElementById('medal_rank'));  
    option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
        type: 'cross',
        crossStyle: {
            color: '#999'
        }
        }
    },
    // toolbox: {
    //     feature: {
    //     dataView: { show: true, readOnly: false },
    //     magicType: { show: true, type: ['line', 'bar'] },
    //     restore: { show: true },
    //     saveAsImage: { show: true }
    //     }
    // },
    legend: {
        data: ['金牌', '银牌', '铜牌', '奖牌总数']
    },
    xAxis: [
        {
        type: 'category',
        data: ['1992', '1994', '1998', '2002', '2006', '2010', '2014', '2018', '2022'],
        axisPointer: {
            type: 'shadow'
        }
        }
    ],
    yAxis: [
        {
        type: 'value',
        name: '奖牌总数',
        min: 0,
        max: 15,
        interval: 3,
        axisLabel: {
            formatter: '{value} 个'
        }
        },
        {
        type: 'value',
        name: '',
        min: 0,
        max: 15,
        interval: 3,
        axisLabel: {
            formatter: '{value} 个'
        }
        }
    ],
    series: [
        {
        name: '金牌',
        type: 'bar',
        tooltip: {
            valueFormatter: function (value) {
            return value + ' 个';
            }
        },
        itemStyle:{
            normal:{
                barBorderRadius: 3,
                color:'#FDC353'
            },
            emphasis:{
                barBorderRadius: 3,
                color:'#FDC353'
            }
        },
        data: [
            0, 0, 0, 2, 2, 5, 3, 1, 9
        ]
        },
        {
        name: '银牌',
        type: 'bar',
        tooltip: {
            valueFormatter: function (value) {
            return value + ' 个';
            }
        },
        itemStyle:{
            normal:{
                barBorderRadius: 3,
                color:'#FE8D6F'
            },
            emphasis:{
                barBorderRadius: 3,
                color:'#FE8D6F'
            }
        },
        data: [
        3, 1, 6, 2, 4, 2, 4, 6, 4
        ]
        },
        {
        name: '铜牌',
        type: 'bar',
        tooltip: {
            valueFormatter: function (value) {
            return value + ' 个';
            }
        },
        itemStyle:{
            normal:{
                barBorderRadius: 3,
                color:'#A0DDE0'
            },
            emphasis:{
                barBorderRadius: 3,
                color:'#A0DDE0'
            }
        },
        
        data: [
            0, 2, 2, 4, 5, 4, 2, 2, 2
        ]
        },
        {
        name: '奖牌总数',
        type: 'line',
        yAxisIndex: 1,
        tooltip: {
            valueFormatter: function (value) {
            return value + ' 个';
            }
        },
        itemStyle:{
            normal:{
                barBorderRadius: 3,
                color:'#9ADBC5'
            },
            emphasis:{
                barBorderRadius: 3,
                color:'#9ADBC5'
            }
        },
        data: [3, 3, 8, 8, 11, 11, 9, 9, 15]
        }
    ]
};
myChart.setOption(option);