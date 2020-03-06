<template>
    <dv-full-screen-container>
        <TopHeader/>
        <el-row class="top-view">
            <el-col :span="10">
                <div class="grid-content bg-purple">
                    <topleft/>
                </div>
            </el-col>
            <el-col :span="14">
                <div class="grid-content bg-purple-light">
                    <topright/>
                </div>
            </el-col>
        </el-row>
        <el-row class="bottom-view">
            <el-col :span="9">
                <div class="grid-content bg-purple">
                    <bottomleft/>
                </div>
            </el-col>
            <el-col :span="15">
                <div class="grid-content bg-purple-light">
                    <bottomright/>
                </div>
            </el-col>
        </el-row>


    </dv-full-screen-container>
</template>

<script>
    import Topleft from "@/components/Product/topleft";
    import Topright from "@/components/Product/topright";
    import TopHeader from "@/components/Product/topHeader";
    import Bottomleft from "@/components/Product/bottomleft"
    import Bottomright from "@/components/Product/bottomright"

    export default {
        name: "Product",
        components: {
            Bottomright,
            Bottomleft,
            TopHeader,
            Topright,
            Topleft
        }
    }
</script>

<style lang="less" scoped>
    .el-row {
        margin-bottom: 20px;

        &:last-child {
            margin-bottom: 0;
        }
    }

    .el-col {
        border-radius: 4px;
    }

    .bg-purple-dark {
        /*background: #99a9bf;*/
    }

    .bg-purple {
        /*background: #d3dce6;*/
    }

    .bg-purple-light {
        /*background: #e5e9f2;*/
    }

    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }

    .row-bg {
        padding: 10px 0;
        /*background-color: #f9fafc;*/
    }
</style>
