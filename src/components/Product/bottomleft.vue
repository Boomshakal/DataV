<template>
    <div id="tag">
        <dv-border-box-6>
            <el-tag class="bottom-left-tag" v-for="(item,index) in datas" :key="index">
                <span>{{index}}<br>{{item}}</span>
            </el-tag>
        </dv-border-box-6>
    </div>
</template>

<script>
    export default {
        name: "bottomleft",
        data() {
            return {
                datas: {
                    'name': 'line3(组装)',
                    'respons': '马任红',
                    'ipqc_user': '王南秀',
                    'ie_user': '蔡志雄',
                    'pqe_user': '李雄伟',
                    'te_user': '林叶',
                    'me_user': '翁华中',
                    'pe_user': '王框框',
                    'pe_user1': '王框框',
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    #tag {
        height: 100%;
        margin: 0px;
        padding: 0px;

    }

    .dv-border-box-2 {
        height: 100%;
    }

    .bottom-left-tag {

        margin: 1px;
        height: 33%;

        width: 33%;
        background-color: rgba(6, 30, 93, 0.5);;
        border: 2px solid rgba(1, 153, 209, .5);
        text-align: center;

        span {
            position: relative;
            top: 30%;
            color: white;
            font-size: large;
            font-weight: bold;
        }
    }
</style>
