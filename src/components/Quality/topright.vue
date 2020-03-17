<template>
    <div id="top-right-cmp">
        <dv-active-ring-chart :config="config"/>

        <div class="five-radar">
            <dv-charts class="first-test" :option="option1"/>
            <dv-charts class="function-test" :option="option2"/>
            <dv-charts class="appearance" :option="option3"/>
        </div>
    </div>
</template>

<script>
    // import { changeDefaultConfig } from '@jiaminghi/charts'
    export default {
        name: "topright",

        data() {
            return {
                config: {
                    data: [
                        {
                            name: '周口',
                            value: 55
                        },
                        {
                            name: '南阳',
                            value: 120
                        },
                        {
                            name: '西峡',
                            value: 78
                        },
                        {
                            name: '驻马店',
                            value: 66
                        },
                        {
                            name: '新乡',
                            value: 80
                        }
                    ],
                    lineWidth: 10
                },

                option1: {
                    radar: {
                        polygon: true,
                        indicator: [
                            {name: '西峡', max: 300},
                            {name: '周口', max: 300},
                            {name: '南阳', max: 300},
                            {name: '驻马店', max: 300},
                            {name: '郑州', max: 300},
                        ]
                    },
                    series: [
                        {
                            type: 'radar',
                            data: [111, 256, 178, 152, 266,],
                            animationCurve: 'easeOutBack'
                        }
                    ]
                },
                option2: {
                    radar: {
                        polygon: true,
                        indicator: [
                            {name: '西峡', max: 300},
                            {name: '周口', max: 300},
                            {name: '南阳', max: 300},
                            {name: '驻马店', max: 300},
                            {name: '郑州', max: 300},
                        ]
                    },
                    series: [
                        {
                            type: 'radar',
                            data: [111, 256, 178, 152, 266,],
                            animationCurve: 'easeOutBack'
                        }
                    ]
                },
                option3: {
                    radar: {
                        polygon: true,
                        indicator: [
                            {name: '西峡', max: 300},
                            {name: '周口', max: 300},
                            {name: '南阳', max: 300},
                            {name: '驻马店', max: 300},
                            {name: '郑州', max: 300},
                        ]
                    },
                    series: [
                        {
                            type: 'radar',
                            data: [111, 256, 178, 152, 266,],
                            animationCurve: 'easeOutBack'
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


        .dv-active-ring-chart {
            float: left;
            height: 100%;
            width: 34%;
        }

        .five-radar {
            float: right;
            height: 100%;
            width: 66%;
            display: flex;
            flex-direction: row;

            .first-test .function-test .appearance {
                float: left;
                width: 33%;
                margin: 0;
                padding: 0;
            }

        }
    }


</style>
