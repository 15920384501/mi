<template>
    <div>
        <h1>广告页<font style="font-size:40px">{{num}}</font></h1>
        <h2>广告只打三秒</h2>
        <button @click="goHome">跳过</button>
        <img src="../../assets/img/timg.gif" alt="">
    </div>
</template>

<script>
    export default {
        data(){
            return {
                num:3,
                cleardata:null //清除定时器
            }
        },
        methods:{
            goHome(){
                this.$router.push("/home/recommend");//推荐页面
            }
        },
        created(){
            // 倒计时定时器
            this.cleardata = setInterval(() => {
                if(this.num == 0){
                    this.$router.push("/home/recommend");//推荐页面
                }else{
                    this.num--;
                }
            }, 1000);
            this.$store.state.vanTabbar = false;
        },
        // 销毁生命周期函数之前停止
        beforeDestroy() { //销毁vue数据与方法。组件结束执行
            // 定时器属于浏览器对象，属于window。
            clearInterval(this.cleardata);
        },
        // 生命周期钩子，最后销毁函数
        destroyed() {
            // 当组件被销毁时候，修改导航数据
            this.$store.state.vanTabbar = true;
        },
    }
</script>

<style lang="scss" scoped>
    div{
        img{
            margin-top: 150px;
        }
        position: fixed;
        background: #B5FFF5;
        height: 100%;
        width: 100%;
    }
</style>