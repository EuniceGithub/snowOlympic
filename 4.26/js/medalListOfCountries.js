var myChart = echarts.init(document.getElementById('medalListOfCountries'));
    option = {
    tooltip: {
        trigger: 'axis',
    },
    title: {
        text: '历届冬奥各国奖牌总数',
        left: 'center'
    },
    legend: {
        data: ['美国', '中国','挪威','德国'],
        top: 'bottom'
    },
    xAxis: [
        {
        type: 'category',
        data: ['1980', '1984', '1988', '1992','1994','1998','2002','2006','2010', '2014', '2018', '2022',],
        boundaryGap: false,
        }
    ],
    yAxis: [
        {
        type: 'value',
        name: '奖牌数',     
        }
    ],
    series: [
        {
            name: '中国',
            type: 'line',
            tooltip: {
                valueFormatter: function (value) {
                return value + '块';
                }
            },
            data: [ 0, 0, 0, 3, 3, 8, 8, 11, 11, 9, 9, 15,]
        },
        {
            name: '美国',
            type: 'line',
            tooltip: {
                valueFormatter: function (value) {
                return value + '块';
                }
            },
            data: [12, 8, 6, 11, 13, 13, 34, 25, 37, 28, 23, 25,]
        },
        {
            name: '挪威',
            type: 'line',
            tooltip: {
                valueFormatter: function (value) {
                return value + '块';
                }
            },
            data: [10, 9, 5, 20, 26, 25, 25, 19, 23, 26, 39, 37,]
        },
        {
            name: '德国',
            type: 'line',
            tooltip: {
                valueFormatter: function (value) {
                return value + '块';
                }
            },
            data: [27, 28, 33, 26, 24, 29, 36, 29, 30, 19, 31, 27,]
        },
        ]
    };
    myChart.setOption(option);