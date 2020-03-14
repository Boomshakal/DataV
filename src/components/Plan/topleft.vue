<template>
    <div id="top-left-content">
        <div class="gauge">
            <div class="top-gauge">
                <dv-charts :option="option1" />
            </div>
            <div class="bottom-gauge">
                <dv-charts :option="option2"/>
            </div>
        </div>
        <div class="ring">
            <dv-charts :option="option3"/>
        </div>
        <div class="bar-line">
            <dv-charts :option="option4"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "topleft",
        data() {
            return {
                option1: {
                    title: {
                        text: '剩余油量表'
                    },
                    series: [
                        {
                            type: 'gauge',
                            data: [{name: 'itemA', value: 55}],
                            axisLabel: {
                                formatter: '{value}%'
                            },
                            details: {
                                show: true,
                                offset: [0, 40],
                                formatter: '剩余{value}%'
                            },
                            animationCurve: 'easeOutBack'
                        }
                    ]
                },
                option2: {
                    title: {
                        text: '剩余油量表'
                    },
                    series: [
                        {
                            type: 'gauge',
                            data: [{name: 'itemA', value: 55}],
                            axisLabel: {
                                formatter: '{value}%'
                            },
                            details: {
                                show: true,
                                offset: [0, 40],
                                formatter: '剩余{value}%'
                            },
                            animationCurve: 'easeOutBack'
                        }
                    ]
                },
                option3: {
                    series: [
                        {
                            type: 'gauge',
                            startAngle: -Math.PI / 2,
                            endAngle: Math.PI * 1.5,
                            arcLineWidth: 25,
                            data: [
                                {name: 'itemA', value: 65, gradient: ['#03c2fd', '#1ed3e5', '#2fded6']}
                            ],
                            axisLabel: {
                                show: false
                            },
                            axisTick: {
                                show: false
                            },
                            pointer: {
                                show: false
                            },
                            dataItemStyle: {
                                lineCap: 'round'
                            },
                            details: {
                                show: true,
                                formatter: '{value}%',
                                style: {
                                    fill: '#1ed3e5',
                                    fontSize: 35
                                }
                            }
                        }
                    ]
                },
                option4: {
                    title: {
                        text: '气温与降雨量走势图'
                    },
                    legend: {
                        data: ['降雨量', '气温'],
                        bottom: 10
                    },
                    xAxis: {
                        data: [
                            '一月份', '二月份', '三月份', '四月份', '五月份', '六月份',
                            '七月份', '八月份', '九月份', '十月份', '十一月份', '十二月份'
                        ],
                        axisLabel: {
                            style: {
                                rotate: 20,
                                textAlign: 'left',
                                textBaseline: 'top'
                            }
                        },
                        axisTick: {
                            show: false
                        }
                    },
                    yAxis: [
                        {
                            name: '降雨量',
                            data: 'value',
                            min: 0,
                            max: 300,
                            interval: 50,
                            splitLine: {
                                style: {
                                    lineDash: [3, 3]
                                }
                            },
                            axisLabel: {
                                formatter: '{value} ml'
                            },
                            axisTick: {
                                show: false
                            }
                        },
                        {
                            name: '气温',
                            data: 'value',
                            position: 'right',
                            min: 0,
                            max: 30,
                            interval: 5,
                            splitLine: {
                                show: false
                            },
                            axisLabel: {
                                formatter: '{value} °C',
                            },
                            axisTick: {
                                show: false
                            }
                        }
                    ],
                    series: [
                        {
                            name: '降雨量',
                            data: [
                                175, 125, 90, 130, 45, 65,
                                65, 47, 50, 52, 45, 37
                            ],
                            type: 'bar',
                            gradient: {
                                color: ['#37a2da', '#67e0e3']
                            },
                            animationCurve: 'easeOutBounce'
                        },
                        {
                            name: '气温',
                            data: [
                                23, 18, 16, 14, 10, 8,
                                6, 6, 6, 6, 6, 5
                            ],
                            type: 'line',
                            yAxisIndex: 1,
                            animationCurve: 'easeOutBounce'
                        }
                    ]
                }

            }
        },
        methods: {},
        created() {

        }
    }
</script>

<style lang="less" scoped>
    #top-left-content {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
        background-color: rgba(6, 30, 93, 0.5);
        border-top: 2px solid rgba(1, 153, 209, .5);


        .gauge {
            height: 100%;
            width: 33%;
            margin: 0;
            padding: 0;

            float: left;

            .top-gauge {
                height: 50%;
                width: 100%;
            }

            .bottom-gauge {
                height: 50%;
                width: 100%;
            }
        }

        .ring {
            height: 100%;
            width: 33%;
            float: left;
        }

        .bar-line {
            height: 100%;
            width: 33%;
            float: left;
        }
    }
</style>
