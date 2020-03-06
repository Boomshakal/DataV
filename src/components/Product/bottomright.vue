<template>
    <div class="product-board">

                <dv-scroll-board :config="config" style="size: auto" />

    </div>
</template>

<script>
    export default {
        name: "bottomright",
        data() {
            return {
                // data写好默认配置
                config: {
                    header: ['列1', '列2', '列3','列4', '列5', '列6','列7', '列8'],
                    data: [],
                    index: true,
                    columnWidth: [80],
                    align: ['center']
                }
            }
        },
        methods: {
            updateHandler() {
                const {config, getScrollBoardData} = this

                const data = getScrollBoardData()

                // 生成新的config 并使用新的data覆盖原有config中的data
                this.config = {
                    ...config,
                    data
                }
            },
            getScrollBoardData() {
                return [
                    ['行1列1', '行1列2', '行1列3','行1列4', '行1列5', '行1列6','行1列7', '行1列8'],
                    ['行2列1', '行2列2', '行2列3','行2列4', '行2列5', '行2列6','行2列7', '行2列8'],
                    ['行3列1', '行3列2', '行3列3','行3列4', '行3列5', '行3列6','行3列7', '行3列8'],
                    ['行4列1', '行4列2', '行4列3','行4列4', '行4列5', '行4列6','行4列7', '行4列8'],
                    ['行5列1', '行5列2', '行5列3','行5列4', '行5列5', '行5列6','行5列7', '行5列8'],
                    ['行6列1', '行6列2', '行6列3','行6列4', '行6列5', '行6列6','行6列7', '行6列8'],
                    ['行7列1', '行7列2', '行7列3','行7列4', '行7列5', '行7列6','行7列7', '行7列8'],
                    ['行8列1', '行8列2', '行8列3','行8列4', '行8列5', '行8列6','行8列7', '行8列8'],
                    ['行9列1', '行9列2', '行9列3','行9列4', '行9列5', '行9列6','行9列7', '行9列8'],
                    ['行10列1', '行10列2', '行10列3','行10列4', '行10列5', '行10列6','行10列7', '行10列8'],
                ]
            }
        },
        created() {
            this.updateHandler()
        }
    }
</script>

<style scoped>

</style>
