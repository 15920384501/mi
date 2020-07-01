<template>
    <div>
        <van-nav-bar
        :title="$route.name"
        />
        <div class="top">
            <van-row>
                <van-col span="4">
                    <van-image
                        round
                        width="80px"
                        height="80px"
                        src="https://img.yzcdn.cn/vant/cat.jpeg"
                    />
                </van-col>
                <van-col span="20">
                    <div v-if="$store.state.username">
                        <h3 v-text="$store.state.username"></h3>
                        <span @click="$store.state.username=''">退出</span>
                    </div>
                    <div v-else>
                        <router-link to="/login">登陆</router-link>/
                        <router-link to="/register">注册</router-link>
                    </div>
                </van-col>
            </van-row>
        </div>
        
        <van-cell-group>
            <van-cell title="我的订单" to="/orderList/orderAll"  is-link />
            <van-cell title="我的收藏"  is-link />
            <van-cell title="我的地址" to="/address"  is-link />
            <van-cell title="优惠卷"  is-link />
            <van-cell title="设置"  is-link />
        </van-cell-group>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .top{
        background: #F37D0F url("../assets/img/bg11.png");
        background-size: 100% auto ;
        padding: .266667rem;
        .van-image{
            float: right;
        }
        .van-col{
            height: 80px;
            line-height: 80px;
            color:#fff;
            a{
                color:#fff;
            }
        }
        h3{
            height: 20px;
        }
        span{
            font-size: 12px;
        }
    }
</style>