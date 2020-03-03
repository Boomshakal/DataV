<template>
    <el-container>
        <el-header height = '80px' >
            <div class="header">
                <ul>
                    <li v-for = '(list) in headerList' :key = 'list.id'>
                        <router-link :to = '{name:list.name}'>
                            {{list.title}}
                        </router-link>
                    </li>
                </ul>
            </div>
        </el-header>
    </el-container>
</template>

<script>
    export default {
        name: "Header",
        data(){
            return {
                headerList:[
                    {id:'1',name:'Home',title:'首页'},
                    {id:'2',name:'Plan',title:'计划'},
                    {id:'3',name:'Product',title:'生产'},
                    {id:'4',name:'Quality',title:'品质'}
                ],
                // isShow:false
            }
        }
    }
</script>

<style scoped>

</style>