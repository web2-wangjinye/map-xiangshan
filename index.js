var myChart=echarts.init(document.getElementById("map"))
myChart.showLoading();
var geoCoordMap = {
    '鹤浦镇':[121.9318, 29.1246],
    '贤庠镇':[121.8713,29.5997],
    '西周镇':[121.6763,29.4755],
    '东陈乡':[121.8961,29.3750],
    '定塘镇':[121.8507,29.2517],
    '茅洋乡':[121.8178,29.4061],
    '晓塘乡':[121.8192,29.2025],
    '丹东街道':[121.8974,29.4838],
    '大徐镇':[121.8700,29.5340],
    '新桥镇':[121.8315,29.3427],
    '高塘岛乡':[121.8343,29.1222],
    '爵溪街道':[121.9510,29.4695],
    '墙头镇':[121.7917,29.4970],
    '泗洲头镇':[121.7532,29.3618],
    '石浦镇':[121.9441,29.2373],
    '涂茨镇':[121.9537,29.5890],
    '丹西街道':[121.8672,29.4456],
    '黄避岙乡':[121.7903,29.5806],
}
var data=[
    {name: '鹤浦镇', value: 10,selected:false},
    {name: '贤庠镇', value: 20,selected:false},
    {name: '西周镇', value: 30,selected:false},
    {name: '东陈乡', value: 40,selected:false},
    {name: '定塘镇', value: 50,selected:false},
    {name: '茅洋乡', value: 60,selected:false},
    {name: '晓塘乡', value: 70,selected:false},
    {name: '丹东街道', value: 80,selected:false},
    {name: '大徐镇', value: 90,selected:false},
    {name: '新桥镇', value: 100,selected:false},
    {name: '高塘岛乡', value: 200,selected:false},
    {name: '爵溪街道', value: 300,selected:false},
    {name: '墙头镇', value: 400,selected:false},
    {name: '泗洲头镇', value: 500,selected:false},
    {name: '石浦镇', value: 600,selected:false},
    {name: '涂茨镇', value: 500,selected:false},
    {name: '丹西街道', value:800,selected:false},
    {name: '黄避岙乡', value: 700,selected:false}
]
var max = 480, min = 9; // todo
var maxSize4Pin = 100, minSize4Pin = 20;
var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};
$.get('xiangshan.json', function (usaJson) {
    myChart.hideLoading();

    echarts.registerMap('xiangshan', usaJson);
    option = {
        title: {
            text: 'XXX地图',
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: function (params) {
                if(typeof(params.value)[2] == "undefined"){
                    return params.name + ' : ' + params.value;
                }else{
                    return params.name + ' : ' + params.value[2];
                }

            }
        },
        // tooltip: {
        //     trigger: 'item',
        //     showDelay: 0,
        //     transitionDuration: 0.2,
        //     formatter: function (params) {
        //         var value = (params.value + '').split('.');
        //         value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,');
        //         return params.seriesName + '<br/>' + params.name + ': ' + value;
        //     }
        // },
        visualMap: {
            left: 'right',
            min:0,
            max: 2000,
            inRange: {
                color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026'],
                symbolSize: [30, 100]
            },
            text: ['High', 'Low'],           // 文本，默认为数值文本
            seriesIndex: [1],
            calculable: true
        },
        // visualMap: {
        //     show: false,
        //     min: 0,
        //     max: 500,
        //     left: 'left',
        //     top: 'bottom',
        //     text: ['高', '低'], // 文本，默认为数值文本
        //     calculable: true,
        //     seriesIndex: [1],
        //     inRange: {
        //         color: ['#026bcb', '#0639a0']
        //     }
        // },
        // toolbox: {
        //     show: true,
        //     //orient: 'vertical',
        //     left: 'left',
        //     top: 'top',
        //     feature: {
        //         dataView: {readOnly: false},
        //         restore: {},
        //         saveAsImage: {}
        //     }
        // },
        geo: {
            show: true,
            map: 'xiangshan',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false,
                }
            },
            zoom:1.1,
            roam: false,
            itemStyle: {
                normal: {
                    areaColor: "#031525",
                    shadowColor:"#01273F",
                    shadowOffsetX:0,
                    shadowOffsetY:10
                },
                emphasis: {
                    label:{
                        show:false
                    }
                }
            }
        },
        series: [
            {
                name: 'credit_pm2.5',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: convertData(data),
                symbolSize: 5,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgba(255,255,255,.5)'
                    }
                }
            },
           
            {
                name: 'XXX总量',
                type: 'map',
                map: 'xiangshan',
                zoom:1.1,
                geoIndex: 1,
                aspectScale: 0.75, //长宽比
                roam: false,
                emphasis: {
                    label:{
                        show:false
                    }
                },
                itemStyle: {
                    normal: {
                        areaColor: "#013C62",
                        borderColor: "#0A5E96",
                        borderWidth:1
                    },
                    emphasis: {// 也是选中样式
                        borderWidth:1,
                        borderColor:'#fff',
                        areaColor: '#e74848',
                        // label: {
                        //     show: true,
                        //     textStyle: {
                        //         color: '#fff'
                        //     }
                        // }
                    }
                },
                // 文本位置修正
                // textFixed: {
                //     Alaska: [20, -20]
                // },
                animation: false,
                data:data
            },
            {
                name: '点',
                type: 'scatter',
                coordinateSystem: 'geo',
                symbol: 'pin',
                symbolSize: function (val) {
                    var a = (maxSize4Pin - minSize4Pin) / (max - min);
                    var b = minSize4Pin - a*min;
                    b = maxSize4Pin - a*max;
                    return a*val[2]/10+b;
                },
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            color: '#fff',
                            fontSize: 9,
                        },
                        formatter:function(value){
                            return "XXX总量\n"+value.data.value[2]
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#F62157', //标志颜色
                    }
                },
                zlevel: 6,
                data: convertData(data.sort(function (a, b) {
                    return b.value - a.value;
                }).slice(0, 3))
            },
            {
                name: 'Top 5',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: convertData(data.sort(function (a, b) {
                    return b.value - a.value;
                }).slice(0, 3)),
                symbolSize: function (val) {
                    return val[2] / 120;
                },
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#05C3F9',
                        shadowBlur: 10,
                        shadowColor: '#17e0fc'
                    }
                },
                zlevel: 1
            }
        ]
    };

    myChart.setOption(option);
});