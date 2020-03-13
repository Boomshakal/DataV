<template>
    <div id="data-view">
        <dv-full-screen-container>
            <TopHeader/>
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
                    <div class="bottom-left">
                        <bottomleft/>
                    </div>

                    <div class="bottom-right">
                        <bottomright/>
                    </div>


                </div>


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
            Bottomright

        }
    }
</script>

<style scoped>
</style>
