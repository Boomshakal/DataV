<template>
    <el-container>
        <el-header height='80px'>
            <div class="header">
                <div class="nav-left">
                    <a href="/home">
                        <img src="https://www.ikahe.com//style/images/logo.png" alt="">
                    </a>
                </div>

                <div class="nav-center">
                    <ul>
                        <li v-for='(list) in headerList' :key='list.id'>
                            <router-link :to='{name:list.name}'>
                                {{list.title}}
                            </router-link>
                        </li>
                    </ul>
                </div>

                <div class="nav-right " v-if="userInfo.token" @mouseenter='enterHandler' @mouseleave='leaveHandler'>
                    <span class='el-dropdown-link'>学习中心</span>
                    <span class="user">{{userInfo.username}}</span>
                    <img :src="userInfo.head_img" alt="">
                    <transition name='expand'>
                        <ul class="my_account" v-show='isShow'>
                            <li>
                                我的账户
                                <i>></i>
                            </li>
                            <li @click='myorder'>
                                我的订单
                                <i>></i>
                            </li>
                            <li>
                                我的优惠券
                                <i>></i>
                            </li>
                            <li>
                                我的消息<span class="msg">(40)</span>
                                <i>></i>
                            </li>
                            <li @click='shopCartInfo'>
                                购物车<span class="count">(2)</span>
                                <i>></i>
                            </li>
                            <li @click='logout'>
                                退出
                                <i>></i>
                            </li>
                        </ul>
                    </transition>
                </div>

                <!-- </el-dropdown> -->
                <div class="nav-right" v-else>
                    <span @click='loginHandler'>登录</span>
                    &nbsp;| &nbsp;
                    <span >注册</span>

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
                    {id: '4', name: 'Quality', title: '品质'},
                ],
                // isShow:false
            }
        },
        methods:{
            loginHandler() {
                this.$router.push({
                    name: 'Login'
                })
            },
        },
        computed: {
            userInfo() {
                return this.$store.state.userInfo;
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

        .nav-left {
            float: left;
            width: 30%;
            height: 100%;
        }

        .nav-center {
            float: left;
            width: 40%;
            height: 100%;
        }

        .nav-right {
            float: left;
            width: 30%;
        }
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

    .nav-right {
        float: right;
        position: relative;
        z-index: 100;

    }

    .nav-right span {
        cursor: pointer;
    }

    .nav-right .user {
        margin-left: 15px;
    }

    .nav-right img {
        width: 26px;
        height: 26px;
        border-radius: 50%;
        display: inline-block;
        vertical-align: middle;
        margin-left: 15px;
    }

    .nav-right ul {
        position: absolute;
        width: 221px;
        z-index: 100;
        font-size: 12px;
        top: 80px;
        background: #fff;
        border-top: 2px solid #d0d0d0;
        box-shadow: 0 2px 4px 0 #e8e8e8;
    }

    .nav-right ul li {
        height: 40px;
        color: #4a4a4a;
        padding-left: 30px;
        padding-right: 20px;
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        transition: all .2s linear;
    }

    .nav-right ul li span.msg {
        margin-left: -80px;
        color: red;
    }

    .nav-right ul li span.count {
        margin-left: -100px;
        color: red;
    }
</style>
