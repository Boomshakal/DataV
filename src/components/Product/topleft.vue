<template>
    <div id="cards">

        <div
                class="card-item"
                v-for="(card, i) in cards"
                :key="card.title"
        >
            <div class="card-header">
                <div class="card-header-left">{{ card.title }}</div>
                <div class="card-header-right">{{ '0' + (i + 1) }}</div>
            </div>
            <dv-charts class="ring-charts" :option="card.ring" style="white-space: normal"/>
            <div class="card-footer">
                <div class="card-footer-item">
                    <div class="footer-title">目标产能</div>
                    <div class="footer-detail">
                        <dv-digital-flop :config="card.total" style="width:70%;height:35px;"/>
                        个
                    </div>
                </div>
                <div class="card-footer-item">
                    <div class="footer-title">实际产能</div>
                    <div class="footer-detail">
                        <dv-digital-flop :config="card.num" style="width:70%;height:35px;"/>
                        个
                    </div>
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
                cards: []
            }
        },
        methods: {
            createData() {
                const {randomExtend} = this

                this.cards = new Array(2).fill(0).map((foo, i) => ({
                    title: 'Line' + (i + 1),
                    total: {
                        number: [randomExtend(9000, 10000)],
                        content: '{nt}',
                        textAlign: 'right',
                        style: {
                            fill: '#ea6027',
                            fontWeight: 'bold'
                        }
                    },
                    num: {
                        number: [randomExtend(30, 60)],
                        content: '{nt}',
                        textAlign: 'right',
                        style: {
                            fill: '#26fcd8',
                            fontWeight: 'bold'
                        }
                    },
                    ring: {
                        series: [
                            {
                                type: 'gauge',
                                startAngle: -Math.PI / 2,
                                endAngle: Math.PI * 1.5,
                                arcLineWidth: 13,
                                radius: '80%',
                                data: [
                                    {name: '产能达成率', value: randomExtend(40, 60)}
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
                                backgroundArc: {
                                    style: {
                                        stroke: '#224590'
                                    }
                                },
                                details: {
                                    show: true,
                                    formatter: '产',
                                    style: {
                                        fill: '#1ed3e5',
                                        fontSize: 40
                                    }
                                }
                            }
                        ],
                        color: ['#03d3ec']
                    }
                }))
            },
            randomExtend(minNum, maxNum) {
                if (arguments.length === 1) {
                    return parseInt(Math.random() * minNum + 1, 10)
                } else {
                    return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
                }
            }
        },
        created() {
            const {createData} = this

            createData()

            setInterval(this.createData, 30000)
        }
    }
</script>

<style lang="less" scoped>
    #cards {
        display: flex;
        justify-content: space-between;
        height: 50%;
        width: 50%;

        .card-item {
            background-color: rgba(6, 30, 93, 0.5);
            border-top: 2px solid rgba(1, 153, 209, .5);
            width: 50%;
            display: flex;
            flex-direction: column;
        }

        .card-header {
            display: flex;
            height: 20%;
            align-items: center;
            justify-content: space-between;

            .card-header-left {
                font-size: 18px;
                font-weight: bold;
                padding-left: 20px;
            }

            .card-header-right {
                padding-right: 20px;
                font-size: 40px;
                color: #03d3ec;
            }
        }

        .ring-charts {
            height: 60%;
        }

        .card-footer {
            height: 20%;
            display: flex;
            align-items: center;
            justify-content: space-around;
        }

        .card-footer-item {
            padding: 5px 10px 0px 10px;
            box-sizing: border-box;
            width: 40%;
            background-color: rgba(6, 30, 93, 0.7);
            border-radius: 3px;

            .footer-title {
                font-size: 15px;
                margin-bottom: 5px;
            }

            .footer-detail {
                font-size: 20px;
                color: #1294fb;
                display: flex;
                align-items: center;

                .dv-digital-flop {
                    margin-right: 5px;
                }
            }
        }
    }
</style>
