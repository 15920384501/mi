<template>
    <div>
        
        <!-- Swiper -->
        <div class="swiper-container containerguidepage">
            <div class="swiper-wrapper">
            <div class="swiper-slide">
                <div v-show="flag">
                    <img class="animated fadeInUpBig" src="../../assets/logo.png" alt="">
                    <h3 class="animated fadeInUpBig delay-2s">渐进式Javascript框架</h3>
                </div>
            </div>
            <div class="swiper-slide">
                <div v-show="flag">
                    <img class="animated fadeInUpBig" src="../../assets/webpack.png" alt="">
                    <h3  class="animated fadeInUpBig delay-2s" >打包所有工具。<br>
                        脚本，图片，样式表，资源。。。
                    </h3>
                </div>
            </div>
            <div class="swiper-slide">
                <div v-show="flag">
                    <img class="animated fadeInUpBig" src="../../assets/vant.png" alt="">
                    <h3 class="animated fadeInUpBig delay-1s">轻量、可靠的移动端 Vue 组件库</h3>
                    <van-button class="animated fadeInUpBig delay-3s" plain hairline type="primary" size="small" to="/home/recommend">点击体验</van-button>
                </div>
            </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination paginationguidepage"></div>
        </div>
    </div>
</template>

<script>
    import Swiper from "swiper";
    export default {
        data(){
            return {
                flag:true
            }
        },
        created(){
            this.$store.state.vanTabbar = false;
        },
        mounted(){
            let _this = this;
            new Swiper('.containerguidepage', {
                pagination: {
                    el: '.paginationguidepage',
                },
                on: {
                    touchStart: function(){
                        console.log(this.activeIndex);  
                    },
                    // 轮播图切换前效果
                    slideChangeTransitionStart:function(){
                        _this.flag = false; //隐藏
                    },
                    // 轮播图切换后效果
                    slideChangeTransitionEnd: function(){
                        // _this.flag[this.activeIndex] = true; //显示
                        _this.flag = true;
                    },
                },
            });
        },
        // 生命周期钩子，最后销毁函数
        destroyed() {
            // 当组件被销毁时候，修改导航数据
            this.$store.state.vanTabbar = true;
        },
    }
</script>

<style lang="scss" scoped>
    .swiper-container{
        position: fixed;
        top:0px;
        left:0px;
        width: 100%;
        height: 100%;
    }
    .swiper-slide{
        text-align: center;
        img{
            margin-left:auto;
            margin-right:auto;
            width: 120px;
            height: 120px;
            margin-top: 200px;
        }
        h3{
            color:#808080;
        }
    }
    
</style>