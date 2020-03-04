<template>
    <div id="data-view">

        <dv-full-screen-container>
            <TopHeader/>
            <div class="main-content">
                <div class="top-view">
                    <div class="top-left">
                        <Topleft></Topleft>
                    </div>
                        <Topright></Topright>
                </div>
                <div class="low-view">

                </div>
            </div>
        </dv-full-screen-container>
    </div>
</template>

<script>
    import Topleft from "@/components/Product/topleft";
    import Topright from "@/components/Product/topright";
    import TopHeader from "@/components/Product/topHeader";

    export default {
        name: "Product",
        components: {
            TopHeader,
            Topright,
            Topleft
        }
    }
</script>

<style lang="less" scoped>
    #data-view {
        width: 100%;
        height: 100%;
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
            flex: 1;
            display: flex;
            flex-direction: column;
        }

        .top-view .low-view{
            flex: 1;
            display: flex;
            margin-top: 20px;
            height: 50%;
        }
        .top-left .top-right{
            width: 45%;
        }
    }
</style>
