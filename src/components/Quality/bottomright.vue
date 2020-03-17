<template>
    <div id="bar-line">
        <dv-charts class="bottom-right-bar-line" :option="option"/>
    </div>
</template>

<script>
    export default {
        name: "bottomleft",
        data() {
            return {
                option: {
                    title: {
                        text: '月部件车间走势图'
                    },
                    legend: {
                        data: ['百分比',],
                        bottom: 10
                    },
                    xAxis: {
                        data: [
                            '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15',
                            '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'
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
                            name: '百分比',
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
                    ],
                    series: [
                        {
                            name: '降雨量',
                            data: [
                                98, 96, 90, 99, 100, 96, 98, 96, 90, 99, 100, 96, 98, 96, 90, 99, 100, 96,
                                98, 96, 90, 99, 100, 96, 98, 96, 90, 99, 100, 96, 89
                            ],
                            type: 'bar',
                            stack: 'a',
                            gradient: {
                                color: ['#37a2da', '#67e0e3']
                            },
                            animationCurve: 'easeOutBounce'
                        },

                        {
                            name: '百分比',
                            data: [
                                98, 96, 90, 99, 100, 96, 98, 96, 90, 99, 100, 96, 98, 96, 90, 99, 100, 96,
                                98, 96, 90, 99, 100, 96, 98, 96, 90, 99, 100, 96, 89

                            ],
                            type: 'line',
                            // stack: 'a',
                            gradient: {
                                color: ['#ff9f7f', '#ffdb5c']
                            },
                            animationCurve: 'easeOutBounce'
                        },
                    ]
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    #bar-line {
        height: 100%;
        margin: 0px;
        padding: 0px;

        .bottom-right-bar-line {
            height: 100%;

        }

    }
</style>