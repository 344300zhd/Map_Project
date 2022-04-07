function init(){
    const element = document.getElementById("map-box");
    const instance = echarts.init(element);

    let data = [
        { name: "南宁市",value: 2030,selected: true },
        { name: "百色市",value: 9239,selected: true },
        { name: "玉林市",value: 1232,selected: true },
        { name: "柳州市",value: 2212,selected: true }
    ]

    let option = {
        title: {
            text: "广西省地图",
            left: "center",
            top: "5%"
        },
        tooltip: {
            show: true,
            formatter: (val) => {
                return val.data ? `${val.name}:${val.data.value}` : `${val.name}:暂无数据`
            }
        },
        series: [
            {
                type: "map",
                mapType: "广西",
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            color: "green"
                        }
                    },
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
                        areaColor:"#C7FFEC",
                    },
                    emphasis: {
                        borderWidth: .3,
                        borderColor: "#C7FFEC",
                        areaColor: "#7CFC00"
                    }
                },
                data: data
            }
        ]
    }

    instance && instance.setOption(option);
    window.onresize = function(){
        instance.resize()
    }
}