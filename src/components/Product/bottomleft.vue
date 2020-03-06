<template>
    <el-row :gutter="60">
        <el-col v-for='(item,index) in datas' :key="index" :span="8">
            <div class="grid-content bg-purple">{{index}}:{{item}}</div>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "bottomleft",
        data() {
            return {
                datas: {
                    'name': 'line3(组装)',
                    'responsible_man_id': '马任红',
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

<style  scoped>
    .el-row {
        margin-bottom: 20px;

        &
        :last-child {
            margin-bottom: 0;
        }

    }

    .el-col {
        border-radius: 4px;
    }

    .bg-purple-dark {
        background: #99a9bf;
    }

    .bg-purple {
        background: #d3dce6;
    }

    .bg-purple-light {
        background: #e5e9f2;
    }

    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }

    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
</style>
