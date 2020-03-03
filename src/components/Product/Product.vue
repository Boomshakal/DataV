<template>
    <dv-full-screen-container>
        <div>
            <Topleft></Topleft>
            <Topright></Topright>
        </div>
    </dv-full-screen-container>

</template>

<script>
    import Topleft from "@/components/Product/topleft";
    import Topright from "@/components/Product/topright";
    export default {
        name: "Product",
        components: {
            Topright,
            Topleft
        }
    }
</script>

<style scoped>

</style>