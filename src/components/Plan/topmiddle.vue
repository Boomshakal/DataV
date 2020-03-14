<template>
    <div class="top-middle-ring">
        <dv-active-ring-chart class="dv-ring" :config="config"/>
    </div>
</template>

<script>
    export default {
        name: "topmiddle",
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
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .top-middle-ring {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;

        background-color: rgba(6, 30, 93, 0.5);
        border-top: 2px solid rgba(1, 153, 209, .5);

    }

    .dv-ring {
        height: 100%;
    }
</style>
