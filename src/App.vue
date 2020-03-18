<template>
    <div id="app">
        <div class="header" v-if="$route.meta.keepAlive">
            <Header/>
        </div>
        <router-view/>
    </div>
</template>

<script>
    import Header from './components/Header.vue'

    export default {
        name: 'App',
        components: {
            Header
        },
        data() {
            return {}
        }
    }
</script>

<style scoped>

</style>
