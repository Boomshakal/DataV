<template>
    <div id="top-left-content">

            <div class="total-ring">
                <dv-charts :option="option1"/>
            </div>
            <div class="branch-ring">
                <dv-charts class="first-test" :option="option2" />

                <dv-charts class="function-test" :option="option3" />

                <dv-charts class="appearance" :option="option4" />
            </div>
    </div>
</template>

<script>
    export default {
        name: "topleft",
        data() {
            return {
                option1: {
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
                option2: {
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

        .total-ring{
            float: left;
            height: 100%;
            width: 34%;
        }
        .branch-ring{
            float: right;
            height: 100%;
            width: 66%;
            display: flex;
            flex-direction: row;

            .first-test .function-test .appearance{
                float: left;
                width: 33%;
                margin: 0;
                padding: 0;
            }
        }
    }
</style>
