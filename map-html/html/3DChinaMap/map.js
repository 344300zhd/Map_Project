function init(){
    const element = document.getElementById("map-box");
    const instance = echarts.init(element);
    let option = {
        title: {
            text: '3D中国地图',
            left: 'center',
            top: '20',
            textStyle: {
                color: '#000',
                fontSize: 24,
            },
        },
        geo3D: {
            map: 'china',
            roam: true,
            viewControl: {
                autoRotate: true
            },
            label: {
                show: true,
                textStyle: {
                    fontSize: 12,
                    color: "#fff",
                    backgroundColor: "transparent",
                }
            },
            itemStyle: {
                areaColor: '#7CFC00',
                borderWidth: 0.3,
            },
            emphasis: {
                itemStyle: {
                    areaColor: "#00FF80",
                    borderWidth: 0.3,
                    label: {
                        textStyle: {
                            color: "blue"
                        }
                    }
                }
            }
        },
    };

    instance && instance.setOption(option)

    window.onresize = function(){
        instance.resize();
    }
}