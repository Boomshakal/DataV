<template>
    <div id="top-right-cmp">
        <!--        <div class="chart-name">-->
        <!--            近7天产能达成率-->
        <!--        </div>-->
        <dv-charts class="dv-bar" :option="option"/>
    </div>
</template>

<script>
    // import { changeDefaultConfig } from '@jiaminghi/charts'
    export default {
        name: "topright",

        data() {
            return {
                option : {
                    title: {
                        text: '周销售额趋势'
                    },
                    xAxis: {
                        name: '第一周',
                        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                    },

                    yAxis: {
                        name: '销售额',
                        data: 'value',
                        max: 4000
                    },
                    series: [
                        {
                            data: [1200, 2130, 1900, 2100, 1500, 4200, 4485],
                            type: 'bar',
                            stack: 'a',
                            gradient: {
                                color: ['#37a2da', '#67e0e3']
                            }
                        },
                        {
                            data: [2100, 2230, 1900, 2500, 2581, 2200, 1985],
                            type: 'bar',
                            stack: 'b',
                            gradient: {
                                color: ['#e062ae', '#e690d1']
                            }
                        },
                        {
                            data: [1200, 2230, 1200, 2100, 2311, 4200, 2285],
                            type: 'bar',
                            stack: 'c',
                            gradient: {
                                color: ['#ff9f7f', '#ffdb5c']
                            }

                        }
                    ]
                }
            }
        },

    }
</script>

<style lang="less" scoped>
    #top-right-cmp {
        display: flex;
        height: 100%;
        background-color: rgba(6, 30, 93, 0.5);
        border-top: 2px solid rgba(1, 153, 209, .5);

    }

    .dv-bar {
        height: 100%;
    }

</style>
