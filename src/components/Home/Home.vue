<template>
    <el-carousel indicatorPosition="outside" height="600px" ref="carousel">
        <el-carousel-item class="carousel-item" v-for="item in lunboImgs" :key="item.id">
            <img class="carousel-img" :src="item.imgSrc" alt="">
        </el-carousel-item>
    </el-carousel>
</template>

<script>
    export default {

        name: 'Home',
        data() {
            return {
                lunboImgs: [
                    {
                        id: 1,
                        imgSrc: 'https://www.ikahe.com/uploads/200217/1-20021GH53MA.jpg'
                    },
                    {
                        id: 2,
                        imgSrc: 'https://www.ikahe.com/uploads/200217/1-20021G63339139.jpg'
                    },
                    {
                        id: 3,
                        imgSrc: 'https://www.ikahe.com/uploads/200217/1-20021GHTA92.jpg'
                    },
                    {
                        id: 4,
                        imgSrc: 'https://www.ikahe.com/uploads/190519/1-1Z519125IQ17.jpg'
                    }
                ],
                tableData: null
            };
        },
        created() {
            // console.log(localStorage);
        }
    };
</script>

<style lang="less" scoped>

    .carousel-item {
        width: 100%;
        height: 100%;
        background: white;
        display: flex;
        justify-content: center;

    }

    .carousel-img {
        max-width: 100%;
        max-height: 100%;
    }

</style>
