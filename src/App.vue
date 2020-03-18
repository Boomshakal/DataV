<template>
    <div id="app">
        <div v-if="$route.meta.keepAlive">
            <Header/>
            <router-view/>
        </div>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
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
