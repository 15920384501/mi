<template>
    <div>
        <!-- 轮播图 -->
        <swiper :imgs="Images" ></swiper>

        <!-- 分类 -->
        <van-grid>
            <van-grid-item to="/category?id=0" icon="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/84320cc3316843227870df7dd3950c6c.jpg" text="爆款新品" />
            <van-grid-item to="/category?id=1" icon="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/84320cc3316843227870df7dd3950c6c.jpg" text="众筹" />
            <van-grid-item to="/category?id=2" icon="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/84320cc3316843227870df7dd3950c6c.jpg" text="小米手机" />
            <van-grid-item to="/category?id=3" icon="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/84320cc3316843227870df7dd3950c6c.jpg" text="Redmi" />
            <van-grid-item to="/category?id=4" icon="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/84320cc3316843227870df7dd3950c6c.jpg" text="黑鲨" />
            <van-grid-item to="/category?id=5" icon="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/84320cc3316843227870df7dd3950c6c.jpg" text="电视" />
            <van-grid-item icon="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/84320cc3316843227870df7dd3950c6c.jpg" text="手环手表" />
            <van-grid-item icon="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/84320cc3316843227870df7dd3950c6c.jpg" text="耳机音箱" />
        </van-grid>
        <!-- 分类 end -->

        <!-- 商品列表 -->
        <div class="goodslist">
            <img src="../../assets/img/33.webp" alt="">
        </div>
        <router-link to="/details" tag="a">
            <van-card
                num="2"
                price="2.00"
                desc="描述信息"
                title="商品标题"
                thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
            />
        </router-link>
        <van-card
            num="2"
            price="2.00"
            desc="描述信息"
            title="商品标题"
            thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
        />
        <van-card
            num="2"
            price="2.00"
            desc="描述信息"
            title="商品标题"
            thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
        />
        <!-- 商品列表 end -->
    </div>
</template>

<script>
    import swiper from "../public/swiper.vue";
    export default {
        data:function(){
            return {
                Images:[
                    {
                        img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/50f96c3637684d761cac93f3eecff10d.jpg"
                    },
                    {
                        img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/75519ce86ca28872e9f9b0150ac97a96.jpg"
                    }
                ]
            }
        },
        components:{
            swiper
        }
    }
</script>

<style lang="scss" scoped>

</style>