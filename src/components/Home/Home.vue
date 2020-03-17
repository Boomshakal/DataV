<template>
<div>
    <Header></Header>
    <router-view/>
</div>
</template>

<script>
    import Header from "@/components/Header";
    export default {
        name: 'Home',
        data() {
            return {}
        },
        methods: {
        },
        components:{
            Header
        },
        created() {

        }

    }
</script>