var myChart = echarts.init(document.getElementById('loop'));
var dataMap = {};
function dataFormatter(obj) {
  var pList = ['自由式滑雪','花样滑冰','短道速滑','速度滑冰','冰壶','单板滑雪','钢架雪车'];
  var temp;
  for (var year = 2001; year <= 2008; year++) {
    var max = 0; var sum = 0; temp = obj[year];
    for (var i = 0, l = temp.length; i < l; i++) {
      max = Math.max(max, temp[i]);
      sum += temp[i];
      obj[year][i] = {
        name: pList[i],
        value: temp[i]};
    }obj[year + 'max'] = Math.floor(max / 100) * 100;
    obj[year + 'sum'] = sum;
  }return obj;
}
//数据顺序：自由式滑雪 花样滑冰 短道速滑  速度滑冰 冰壶 单板滑雪 雪车
dataMap.medals = dataFormatter({//奖牌总数
    2008: [6,1,4,1,0,2,1],2007: [3,1,3,1,0,1,0],2006: [2,0,6,1,0,0,0],
    2005: [3,2,4,1,1,0,0], 2004: [2,2,5,2,0,0,0],2003: [0,1,7,0,0,0,0],
    2002: [1,1,6,0,0,0,0],2001: [0,1,1,1,0,0,0],
});
dataMap.Gold = dataFormatter({//金牌总数
    2008: [4,1,2,1,0,1,0],2007: [0,0,1,0,0,0,0],2006: [0,0,2,1,0,0,0],
    2005: [0,1,4,0,0,0,0],2004: [1,0,1,0,0,0,0],2003: [0,0,2,0,0,0,0],
    2002: [0,0,0,0,0,0,0],2001: [0,0,0,0,0,0,0],
});
dataMap.Sliver = dataFormatter({//银牌总数
    2008: [2,0,1,0,0,1,0],2007: [2,1,2,0,0,1,0],2006: [1,0,3,0,0,0,0],
    2005: [1,1,0,0,0,0,0],2004: [1,1,1,1,0,0,0],2003: [0,0,2,0,0,0,0],
    2002: [1,0,5,0,0,0,0],2001: [0,0,1,0,0,0,0],
});
dataMap.Bronze = dataFormatter({//铜牌总数
    2008: [0,0,1,0,0,0,1],2007: [1,0,0,1,0,0,0],2006: [1,0,1,0,0,0,0],
    2005: [2,0,0,1,1,0,0],2004: [0,1,3,1,0,0,0],2003: [0,1,3,0,0,0,0],
    2002: [0,1,1,0,0,0,0],2001: [0,1,0,1,0,0,0],
});

option = {
  baseOption: {
    timeline: { axisType: 'category', autoPlay: true,playInterval: 2000,
      data: [
		{ value: '1994', tooltip: { formatter: '{b}年 冬奥会'},symbolSize: 14},
		{ value: '1998', tooltip: { formatter: '{b}年 冬奥会'},symbolSize: 14},
		{ value: '2002', tooltip: { formatter: '{b}年 冬奥会'},symbolSize: 14},
		{ value: '2006', tooltip: { formatter: '{b}年 冬奥会'},symbolSize: 14},
		{ value: '2010', tooltip: { formatter: '{b}年 冬奥会'},symbolSize: 14},
		{ value: '2014', tooltip: { formatter: '{b}年 冬奥会'},symbolSize: 14},
		{ value: '2018', tooltip: { formatter: '{b}年 冬奥会'},symbolSize: 14},
		{ value: '2022', tooltip: { formatter: '{b}年 冬奥会'},symbolSize: 14}],
    lineStyle:{color:'#d3d5d4'},
    itemStyle:{color:'#d3d5d4'},
    controlStyle:{color:'#d3d5d4',borderColor:'#d3d5d4'},
    checkpointStyle:{color:'#fb9e55', shadowOffsetX:0, shadowOffsetY:0, borderWidth:1, borderColor:'#fffef9'},
    progress:{lineStyle:{color:'#d3d5d4'},itemStyle:{color:'#d3d5d4'}},
    emphasis:{
      label:{color:'#ffad5e'},
      itemStyle:{color:'#ffad5e'},
      controlStyle:{
        color:'#ffad5e',
        borderColor:'#ffad5e',
      }
    },
      label: {color:'#6f778d',formatter: function (s) {  return new Date(s).getFullYear();} } },
    title: { subtext: '数据来源：国际奥委会',subtextStyle:{fontSize:'1rem'}},
    tooltip: {show:true},
    legend: { top:32,right:0,
      data: ['金牌', '银牌', '铜牌', '奖牌总数'],
      // selected: {奖牌总数: false}
      textStyle:{
        fontSize:'0.8rem',
      }
    },
    textStyle:{
      fontSize:'0.8rem',
    },
    calculable: true,
    grid: { top: 80, bottom: 100,
      tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow',label: {show: true,formatter: function (params) {return params.value.replace('\n', '');}}},
		  }
    },
	
    xAxis: [{ type: 'category',axisLabel: { interval: 0, fontSize:'0.8rem' },
        data: ['自由式滑雪','花样滑冰','短道速滑','速度滑冰','冰壶','单板滑雪','钢架雪车' ],splitLine: { show: false }}],
		
    yAxis: [ {type: 'value',
        min: 0,
        max: 10,
        interval: 2,
        name: '奖牌(个数)',
        axisLabel:{
          fontSize:'1rem',
        },

    }],
        series: [
        {
          name: '奖牌总数', type: 'bar',
          // showBackground: true,
          // backgroundStyle: {color: 'rgba(245, 245, 245, 0.8)'},
          itemStyle:
          {
            barBorderRadius: 3,
            borderWidth: 1,
            color:'#FE8D6F',
            borderType: 'solid',
            // borderColor: '#dbdbdb',
            shadowColor: '#d2d2d2',
            shadowBlur: 2,
        }},
	      { 
          name: '金牌', type: 'bar' ,
          // showBackground: true,
          // backgroundStyle: {color: 'rgba(245, 245, 245, 0.8)'},
          itemStyle:
          {
            barBorderRadius: 3,
            borderWidth: 1,
            color:'#fbc51e',
            borderType: 'solid',
            // borderColor: '#c7d9ff',
            shadowColor: '#bedcff',
            shadowBlur: 2
          }
        }, 
	   { name: '银牌', type: 'bar',
	  //  showBackground: true,
	  //  backgroundStyle: {color: 'rgba(245, 245, 245, 0.8)'},
		itemStyle:
		{
		    barBorderRadius: 3,
		    borderWidth: 1,
			  color:'#d0cdcd',
		    borderType: 'solid',
		    // borderColor: '#95beff',
		    shadowColor: '#9dbbff',
		    shadowBlur: 2
		  }}, 
		  { name: '铜牌', type: 'bar',
		  // showBackground: true,
		  // backgroundStyle: {color: 'rgba(245, 245, 245, 0.8)'},
		   itemStyle:
		   {
		       barBorderRadius: 3,
		       borderWidth: 1,
		   	   color:'#fb9e55',
		       borderType: 'solid',
		       // borderColor: '#5e7cff',
		       shadowColor: '#9dbbff',
		       shadowBlur: 2
		     }},
     { name: '奖牌占比',type: 'pie',center: ['75%', '30%'], radius: '25%', z: 200 ,color:['#fbc51e','#d0cdcd', '#fb9e55'], textStyle:{fontSize:14,}}]},
  
  options: [
	{ title: { text: '1994年利勒哈默尔冬奥会',left:'center',textStyle:{fontSize:'1.5rem',color:'#3d3d3d'}},
	  series: [
		{ data: dataMap.medals['2001'] },{ data: dataMap.Gold['2001'] },{ data: dataMap.Sliver['2001'] },{ data: dataMap.Bronze['2001'] },
		{ data: [{ name: '金牌', value: dataMap.Gold['2001sum']},{ name: '银牌', value: dataMap.Sliver['2001sum'] },{ name: '铜牌', value: dataMap.Bronze['2001sum'] }]}]
	},
    { title: { text: '1998年长野冬奥会',left:'center',textStyle:{fontSize:'1.5rem',color:'#3d3d3d'}},
      series: [
        { data: dataMap.medals['2002'] },{ data: dataMap.Gold['2002'] },{ data: dataMap.Sliver['2002'] },{ data: dataMap.Bronze['2002'] },
        { data: [{ name: '金牌', value: dataMap.Gold['2002sum'] },{ name: '银牌', value: dataMap.Sliver['2002sum'] },{ name: '铜牌', value: dataMap.Bronze['2002sum'] }]}]
    },
    { title: { text: '2002年盐湖城冬奥会',left:'center',textStyle:{fontSize:'1.5rem',color:'#3d3d3d'}},
      series: [
        { data: dataMap.medals['2003'] },{ data: dataMap.Gold['2003'] },{ data: dataMap.Sliver['2003'] },{ data: dataMap.Bronze['2003'] },
        {data: [ { name: '金牌', value: dataMap.Gold['2003sum'] },{ name: '银牌', value: dataMap.Sliver['2003sum'] }, { name: '铜牌', value: dataMap.Bronze['2003sum'] }] }] },
    { title: { text: '2006年都灵冬奥会',left:'center',textStyle:{fontSize:'1.5rem',color:'#3d3d3d'}},
      series: [
        { data: dataMap.medals['2004'] },{ data: dataMap.Gold['2004'] },{ data: dataMap.Sliver['2004'] },{ data: dataMap.Bronze['2004'] },
        {data: [{ name: '金牌', value: dataMap.Gold['2004sum'] },{ name: '银牌', value: dataMap.Sliver['2004sum'] },{ name: '铜牌', value: dataMap.Bronze['2004sum'] }]}]
    },
    { title: { text: '2010年温哥华冬奥会',left:'center',textStyle:{fontSize:'1.5rem',color:'#3d3d3d'}},
      series: [
        { data: dataMap.medals['2005'] },{ data: dataMap.Gold['2005'] },{ data: dataMap.Sliver['2005'] },{ data: dataMap.Bronze['2005'] },
        {data: [ { name: '金牌', value: dataMap.Gold['2005sum'] },{ name: '银牌', value: dataMap.Sliver['2005sum'] },{ name: '铜牌', value: dataMap.Bronze['2005sum'] },]}]
    },
    { title: { text: '2014年索契冬奥会',left:'center',textStyle:{fontSize:'1.5rem',color:'#3d3d3d'}},
      series: [
        { data: dataMap.medals['2006'] },{ data: dataMap.Gold['2006'] },{ data: dataMap.Sliver['2006'] },{ data: dataMap.Bronze['2006'] },
        {data: [ { name: '金牌', value: dataMap.Gold['2006sum'] }, { name: '银牌', value: dataMap.Sliver['2006sum'] }, { name: '铜牌', value: dataMap.Bronze['2006sum'] }] }]
    },
    { title: { text: '2018年平昌冬奥会',left:'center',textStyle:{fontSize:'1.5rem',color:'#3d3d3d'}},
      series: [
        { data: dataMap.medals['2007'] }, { data: dataMap.Gold['2007'] },{ data: dataMap.Sliver['2007'] }, { data: dataMap.Bronze['2007'] },
        {data: [ { name: '金牌', value: dataMap.Gold['2007sum'] },{ name: '银牌', value: dataMap.Sliver['2007sum'] }, { name: '铜牌', value: dataMap.Bronze['2007sum'] }] } ]
    },
    { title: { text: '2022年北京冬奥会',left:'center',textStyle:{fontSize:'1.5rem',color:'#3d3d3d'}},
      series: [
        { data: dataMap.medals['2008'] }, { data: dataMap.Gold['2008'] }, { data: dataMap.Sliver['2008'] }, { data: dataMap.Bronze['2008'] },
        { data: [{ name: '金牌', value: dataMap.Gold['2008sum'] }, { name: '银牌', value: dataMap.Sliver['2008sum'] }, { name: '铜牌', value: dataMap.Bronze['2008sum'] }]}]
    }
  ]
};
myChart.setOption(option);