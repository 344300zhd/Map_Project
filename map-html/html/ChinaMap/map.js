function init(){
    // 模拟数据
    let data = [
        { name: '河北',value: 5842304,selected: true },
        { name: '广东',value: 2662852,selected: true },
        { name: '江苏',value: 1828578,selected: true },
        { name: '陕西',value: 938375,selected: true  },
        { name: '天津',value: 378337,selected: true  },
        { name: '湖南',value: 102810,selected: true  },
        { name: '北京',value: 35180,selected: true   },
        { name: '重庆',value: 11130,selected: true   }
    ]

    let option = {
      title: {
        text: "中国地图",
        left: "center",
        top: "5%"
      },
      tooltip: {
        show: true,
        /**
         * 1.字符串模板：
         *   {a}:系列名
         *   {b}:数据名
         *   {c}:数据值
         * 2.回调函数：
         *   seriesName:系列名
         *   name:数据名
         *   data.value:数据值
         */
        formatter: (val) => {
          return val.data ? `${val.name}:${val.data.value}` : `${val.name}:暂无数据`
        },
      },
      series: [
        {
          type: 'map',
          mapType: 'china',
          label: {
            // 普通
            normal: {
              show: true,
              textStyle: { 
                color: "green" 
              }
            },
            // 高亮
            emphasis: {
              show: true,
              textStyle: { 
                color: "#fff" 
              }
            }
          },
          itemStyle: {
            normal: {
              borderWidth: .3,
              areaColor: "#C7FFEC",
            },
            emphasis: {
              borderWidth: .3,
              borderColor: '#00FF80',
              areaColor: "#7CFC00",
            }

          },
          data: data
        }]
      };

    const element = document.getElementById("map-box");
    const instance = echarts.init(element);

    instance && instance.setOption(option)
    window.onresize = function(){
        instance.resize();
      }
}