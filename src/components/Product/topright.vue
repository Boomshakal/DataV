<template>
    <div class="top-right-cmp">
        <!--        <div class="chart-name">-->
        <!--            近7天产能达成率-->
        <!--        </div>-->
        <dv-charts :option="option" style="size: auto"/>
    </div>
</template>

<script>
    export default {
        name: "topright",
        data() {
            return {
                option: {
                    title: {
                        text: '近7天产能达成率'
                    },
                    legend: {
                        data: ['降雨量', '气温'],
                        bottom: 10
                    },
                    xAxis: {
                        data: [
                            '周一', '周二', '周三', '周四', '周五', '周六',
                            '周日'
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
                            max: 100,
                            interval: 20,
                            splitLine: {
                                style: {
                                    lineDash: [3, 3]
                                }
                            },
                            axisLabel: {
                                formatter: '{value} %'
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
                                94, 91, 90, 85, 75, 85,
                                65,
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
                                6,
                            ],
                            type: 'line',
                            yAxisIndex: 1,
                            animationCurve: 'easeOutBounce'
                        }
                    ]
                }
            }
        }
    }
</script>

<style lang="less">
.top-right-cmp{
    width: 100%;
    height: 100%;
}
</style>
