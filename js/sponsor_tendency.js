var myChart = echarts.init(document.getElementById('sponsor_tendency'));
// prettier-ignore
const data = [
  ["2015", 8],
  ["2016", 22], 
  ["2017", 38], 
  ["2018", 42], 
  ["2019", 76], 
  ["2020", 85], 
  ["2021", 161]
];
const dateList = data.map(function (item) {
  return item[0];
});
const valueList = data.map(function (item) {
  return item[1];
});
option = {
  // Make gradient line here
  visualMap: [
    {
      show: false,
      type: 'continuous',
      color:['#7064f2','#7064f2', '#91b1fd', '#cfeafb'],
      seriesIndex: 0,
      min: 0,
      max: 160,
    }
  ],
  title: [
    {
      left: 'center',
      text: '运动员商业代言数量',
	  top: 20,
      textStyle:{
        fontSize:18,
        color:'#7e7e7e',
      }
    }
  ],
  tooltip: {
    trigger: 'axis'
  },
  xAxis: [
    {
      boundaryGap: false,
      type: 'category',
      data: dateList,
    },
  ],
  yAxis: [
    {}
  ],
  grid: [
    {
    }
    
  ],
  series: [
    {
      type: 'line',
      showSymbol: true,
      data: valueList,
      areaStyle: {},
      tooltip: {
        valueFormatter: function (value) {
          return value + '个';
        }
      },
      label: {
        show: true,
        position: 'top',
        textStyle: {
          fontSize: 14,
          color: '#969bb7'
        }
      },
    }
  ]
};
myChart.setOption(option);  