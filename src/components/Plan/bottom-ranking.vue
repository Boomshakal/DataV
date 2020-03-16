<template>
    <dv-scroll-ranking-board class="ranking" :config="config" />
</template>

<script>
    export default {
        name: "bottom-ranking",
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
                            value: 14
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
                        },
                        {
                            name: '信阳',
                            value: 45
                        },
                        {
                            name: '漯河',
                            value: 29
                        }
                    ]
                }
            }
        }
    }
</script>

<style scoped>
    .ranking{
        height: 100%;
    }
</style>
