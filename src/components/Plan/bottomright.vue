<template>
    <div id="table">
        <dv-scroll-board class="plan-table" :config="config"/>
    </div>
</template>

<script>
    export default {
        name: "bottomright",
        data() {
            return {
                config: {
                    header: ['列1', '列2', '列3', '列4', '列5', '列6', '列7', '列8', '列9', '列10', '列11'],
                    data: [],
                    index: true,
                    columnWidth: [90],
                    align: ['center']
                }
            }
        },
        methods: {
            updateHandler() {
                const {config, getScrollBoardData, getheader} = this
                const data = getScrollBoardData()
                const header = getheader()

                // 生成新的config 并使用新的data覆盖原有config中的data
                this.config = {
                    ...config,
                    data,
                    header
                }
                console.log(this.config)
            },
            getScrollBoardData() {
                let lists = []

                lists.push(["LINE1（包装）", "MO20020001", "分体机/C9205遥控版/ / ", 200, "200", null, null, null, null, null, null])
                lists.push(["LINE1（包装）", "MO20020001", "分体机/C9205遥控版/ / ", 200, "200", null, null, null, null, null, null])
                lists.push(["LINE1（包装）", "MO20020001", "分体机/C9205遥控版/ / ", 200, "200", null, null, null, null, null, null])
                lists.push(["LINE1（包装）", "MO20020001", "分体机/C9205遥控版/ / ", 200, "200", null, null, null, null, null, null])
                lists.push(["LINE1（包装）", "MO20020001", "分体机/C9205遥控版/ / ", 200, "200", null, null, null, null, null, null])
                lists.push(["LINE1（包装）", "MO20020001", "分体机/C9205遥控版/ / ", 200, "200", null, null, null, null, null, null])
                lists.push(["LINE1（包装）", "MO20020001", "分体机/C9205遥控版/ / ", 200, "200", null, null, null, null, null, null])
                lists.push(["LINE1（包装）", "MO20020001", "分体机/C9205遥控版/ / ", 200, "200", null, null, null, null, null, null])
                lists.push(["LINE1（包装）", "MO20020001", "分体机/C9205遥控版/ / ", 200, "200", null, null, null, null, null, null])
                lists.push(["LINE1（包装）", "MO20020001", "分体机/C9205遥控版/ / ", 200, "200", null, null, null, null, null, null])


                // this.$http.getjihua()
                //     .then(res => {
                //             // lists=res.data
                //             // console.log(res.data)
                //             let datas = res.data.slice(0,8)
                //             for (var i = 0; i < datas.length; i++) {
                //                 // console.log(datas[i])
                //                 lists.push(datas[i])
                //             }
                //         }
                //     )
                //     .catch(err => {
                //         console.log(err);
                //     });
                console.log(lists)
                return lists
            },
            getheader() {
                let list = ['线别', '工单', '描述', '计划数量']
                var dateTime = new Date();
                // console.log(dateTime.toLocaleDateString());     //获取当前日期

                for (var i = 0; i < 7; i++) {
                    list.push(dateTime.toLocaleDateString())
                    dateTime.setDate(dateTime.getDate() + 1)
                    dateTime = new Date(dateTime)
                }
                // console.log(list)
                return list
            },
        },
        created() {
            this.updateHandler()
        }
    }
</script>

<style lang="less" scoped>
    #table {
        height: 100%;

        .plan-table {
            height: 100%;
            width: 100%;
        }
    }
</style>
