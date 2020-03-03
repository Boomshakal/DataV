<template>
    <div id="channeng">
        <dv-charts class="charts-1" :option="option1" style="width: 300px;height: 300px;"/>
        <div class="card-footer">
            <div class="card-footer-item">
                <div class="footer-title">目标产能</div>
                <div class="footer-detail">
                    <dv-digital-flop :config="total" style="width:70%;height:35px;"/>
                </div>
            </div>
            <div class="card-footer-item">
                <div class="footer-title">实际产能</div>
                <div class="footer-detail">
                    <dv-digital-flop :config="num" style="width:70%;height:35px;"/>
                </div>
            </div>
        </div>
        <dv-charts class="charts-2" :option="option2" style="width: 300px;height: 300px;"/>
        <div class="card-footer">
            <div class="card-footer-item">
                <div class="footer-title">目标产能</div>
                <div class="footer-detail">
                    <dv-digital-flop :config="total" style="width:70%;height:35px;"/>
                </div>
            </div>
            <div class="card-footer-item">
                <div class="footer-title">实际产能</div>
                <div class="footer-detail">
                    <dv-digital-flop :config="num" style="width:70%;height:35px;"/>
                </div>
            </div>
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
                total:  {
                    number: [1256],
                    content: '{nt}个'
                },
                num:{
                    number: [998],
                    content: '{nt}个'
                }
            }
        }
    }
</script>

<style scoped>
    #channeng {
        display: flex;
        /*justify-content: space-between;*/
        height: 45%;


    }
</style>