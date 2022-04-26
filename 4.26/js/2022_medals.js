var myChart = echarts.init(document.getElementById('medals_2022'));
option = {
  title: {
    text:'2022年:北京冬奥会',
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
  series: [
    {
      name: '运动项目获奖牌数',
      type: 'pie',
      radius: '55%',
      center: ['50%', '50%'],
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
          { value: 9, name: '金牌' },
          { value: 4, name: '银牌' },
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
      borderRadius: 4,
      rich: {
          a: {
          color: '#6E7079',
          lineHeight: 22,
          align: 'center'
          },
          hr: {
          borderColor: '#8C8D8E',
          width: '100%',
          borderWidth: 1,
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
          borderRadius: 4
          }
      }
      },
      data: [
        { value: 4, name: '短道速滑' },
        { value: 6, name: '自由式滑雪' },
        { value: 1, name: '花样滑冰' },
        { value: 1, name: '速度滑冰' },
        { value: 2, name: '单板滑雪' },
        { value: 1, name: '钢架雪车' }
      ]
  }
  ]
};
myChart.setOption(option);
