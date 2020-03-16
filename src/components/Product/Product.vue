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

                    <div class="top-right">
                        <topright/>
                    </div>

                </div>
                <div class="bottom-content">
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
    import Topleft from "@/components/Product/topleft";
    import Topright from "@/components/Product/topright";
    import TopHeader from "@/components/Product/topHeader";
    import Bottomleft from "@/components/Product/bottomleft"
    import Bottomright from "@/components/Product/bottomright"
    import BottomFoot from "@/components/Product/bottomfoot"

    export default {
        name: "Product",
        components: {
            Bottomright,
            Bottomleft,
            TopHeader,
            Topright,
            Topleft,
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
        .tophead {
            height: 10%;
            margin: 0;
            padding: 0;
        }

        .bottomfoot {
            height: 5%;
        }

        .main-content {
            height: 85%;
            flex: 1;
            display: flex;
            flex-direction: column;

            .top-contnet {
                height: 50%;
                margin: 0;
                padding: 0;

                .top-left {
                    height: 100%;
                    float: left;
                    width: 45%;
                }

                .top-right {
                    height: 100%;
                    float: right;
                    width: 55%;
                }
            }

            .bottom-content {
                height: 50%;

                .bottom-left {
                    height: 100%;
                    float: left;
                    width: 40%;
                }

                .bottom-right {
                    height: 100%;
                    float: right;
                    width: 60%;
                }
            }


        }


    }
</style>
