var myChart = echarts.init(document.getElementById('timeline_cartoon'));

option = {
  graphic: {
    elements: [
      {
        type: 'group',
        left: 'center',
        top: 'center',
        children: new Array(8).fill(0).map((val, i) => ({
          type: 'rect',
          x: i * 20,
          shape: {
            x: 0,
            y: -40,
            width: 13,
            height: 80,
          },
          style: {
            fill: '#d3ddff'
          },
          keyframeAnimation: {
            duration: 1000,
            delay: i * 200,
            loop: true,
            keyframes: [
              {
                percent: 0.5,
                scaleY: 0.3,
                easing: 'cubicIn'
              },
              {
                percent: 1,
                scaleY: 1,
                easing: 'cubicOut'
              }
            ]
          }
        }))
      }
    ]
  }
};
myChart.setOption(option);
