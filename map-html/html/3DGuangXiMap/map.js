function init(){
    const element = document.getElementById("map-box");
    const instance = echarts.init(element)
    window.onresize = function(){
        instance.resize();
    }

    let option = {
        title: {
            text: "广西省3D地图",
            left: "center",
            top: "5%"
        },
        geo3D: {
            map: "广西",
            viewControl: {
                // autoRotate: true
            },
            label: {
                show: true,
                textStyle: {
                    fontSize: 12,
                    color: "#fff",
                    backgroundColor: "transparent"
                }
            },
            itemStyle: {
                areaColor: "#7cfc00",   
                borderWidth: .3
            },
            emphasis: {
                itemStyle: {
                    areaColor: "#00ff80"
                }
            }
        }
    }

    instance && instance.setOption(option)
}