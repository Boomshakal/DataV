<template>
    <div id="data-view">
        <dv-full-screen-container>
            <div class="tophead">
                <TopHeader/>
            </div>
            <div class="main-content">
                <div class="top-contnet">
                    <div class="top-left">
                        <topleft/>
                    </div>
                    <div class="top-middle">
                        <topmiddle/>
                    </div>
                    <div class="top-right">
                        <topright/>
                    </div>

                </div>
                <div class="bottom-content">
                    <div class="bottom-ranking">
                        <Bottomranking/>
                    </div>
                    <div class="bottom-left">
                        <bottomleft/>
                    </div>
                    <div class="bottom-right">
                        <bottomright/>
                    </div>


                </div>
            </div>
            <div class="bottomfoot">
                <BottomFoot/>
            </div>
        </dv-full-screen-container>
    </div>
</template>

<script>
    import Topleft from "@/components/Plan/topleft";
    import Topmiddle from "@/components/Plan/topmiddle"
    import Topright from "@/components/Plan/topright";
    import TopHeader from "@/components/Plan/topHeader";
    import Bottomleft from "@/components/Plan/bottomleft"
    import Bottomright from "@/components/Plan/bottomright"
    import Bottomranking from "@/components/Plan/bottom-ranking"
    import BottomFoot from "@/components/Plan/bottomfoot"

    export default {
        name: "Plan",
        data() {
            return {
                plan: "我是计划"
            }
        },
        components: {
            TopHeader,
            Topleft,
            Topmiddle,
            Topright,
            Bottomleft,
            Bottomright,
            Bottomranking,
            BottomFoot

        }
    }
</script>

<style lang="less" scoped>
    #data-view {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        background-color: #030409;
        color: #fff;

        #dv-full-screen-container {
            background-image: url('./img/bg.png');
            background-size: 100% 100%;
            box-shadow: 0 0 3px blue;
            display: flex;
            flex-direction: column;
        }

        .main-content {
            height: 85%;
            flex: 1;
            display: flex;
            flex-direction: column;

            .top-contnet {
                height: 45%;
                margin: 0;
                padding: 0;
            }

            .bottom-content {
                height: 55%;
            }
        }

        .tophead {
            height: 10%;
            margin: 0;
            padding: 0;
        }

        .bottomfoot {
            height: 5%;
        }


        .top-left {
            height: 100%;
            float: left;
            width: 45%;
        }

        .top-middle {
            height: 100%;
            width: 15%;
            float: left;
        }

        .top-right {
            height: 100%;
            float: left;
            width: 40%;
        }

        .bottom-left {
            height: 100%;
            float: left;
            width: 0%;
        }

        .bottom-right {
            height: 100%;
            float: left;
            width: 100%;
        }

        .bottom-ranking {
            height: 100%;
            float: left;
            width: 0%;
        }

    }
</style>
