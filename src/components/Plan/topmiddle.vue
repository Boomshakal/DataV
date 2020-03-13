<template>
    <div>
        <dv-active-ring-chart :config="config" style="width:200px;height:200px"/>
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

<style scoped>

</style>