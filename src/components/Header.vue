<template>
    <el-container>
        <el-header height='80px'>
            <div class="header">
                <div class="nav-center">
                    <ul>
                        <li v-for='(list) in headerList' :key='list.id'>
                            <router-link :to='{name:list.name}'>
                                {{list.title}}
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </el-header>
    </el-container>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                headerList: [
                    {id: '1', name: 'Home', title: '首页'},
                    {id: '2', name: 'Plan', title: '计划'},
                    {id: '3', name: 'Product', title: '生产'},
                    {id: '4', name: 'Quality', title: '品质'}
                ],
                // isShow:false
            }
        }
    }
</script>

<style lang="less" scoped>
    .el-header {
        border-bottom: #c9c9c9;
        box-shadow: 0 0.5px 0.5px 0 #c9c9c9;
    }

    .header {
        width: 1200px;
        height: 80px;
        line-height: 80px;
        margin: 0 auto;
    }

    .nav-center {
        float: left;
        margin-left: 100px;
        width: auto;
    }

    .nav-center ul {
        overflow: hidden;
    }

    .nav-center ul li {
        list-style-type: none;
        float: left;
        margin: 0 5px;
        /*width: 100px;*/
        padding: 0 20px;
        height: 80px;
        line-height: 80px;
        text-align: center;
    }

    .nav-center ul li a {
        color: #4a4a4a;
        width: 100%;
        height: 60px;
        display: inline-block;

    }

    .nav-center ul li a:hover {
        color: #B3B3B3;
    }

    .nav-center ul li a.is-active {
        color: #4a4a4a;
        border-bottom: 4px solid #ffc210;
    }
</style>
