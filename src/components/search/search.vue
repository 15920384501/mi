<template>
    <div>
        <!-- $router.go(-1) //-1表示返回上一级 -->
        <!-- $router.go(1) //1表示刷新当前页面，刷新页面，使用路由go刷新-->
        <!-- $router.go(2) //2表示返回下一级 -->
        <van-button @click="$router.go(-1)" type="default">返回</van-button>
        搜索组件
    </div>
</template>

<script>
    export default {
        
        created(){
            this.$store.state.vanTabbar = false;
        },
        // 生命周期钩子，最后销毁函数
        destroyed() {
            // 当组件被销毁时候，修改导航数据
            this.$store.state.vanTabbar = true;
        },
    }
</script>

<style lang="scss" scoped>

</style>