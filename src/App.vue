<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhongyu
 * @Date: 2020-06-06 20:27:16
 * @LastEditors: zhongyu
 * @LastEditTime: 2020-06-07 16:57:06
--> 
<template>
    <div id="app" class="app">
        <el-container>
            <el-aside :width="isCollapse ? '66px' : '200px'">
                <div class="menu-title">
                    前段VUE的DOME
                </div>
                <el-menu :default-active="this.defaultActive" class="el-menu-vertical-demo" :collapse="isCollapse" :style="isCollapse? 'width: 64px' : 'width: auto'">
                    <router-link to="/home" class="menu-item-link">
                        <el-menu-item index="home">
                            <i class="el-icon-s-home"></i>
                            <span slot="title">前往HOME页面</span>
                        </el-menu-item>
                    </router-link>
                    <router-link to="/user" class="menu-item-link">
                        <el-menu-item index="user">
                            <i class="el-icon-user-solid"></i>
                            <span slot="title">前往USER页面</span>
                        </el-menu-item>
                    </router-link>
                </el-menu>
            </el-aside>

            <el-container>
                <el-header>
                    <div class="header-left">
                        <div v-if="!isCollapse" @click="onCollapse()">
                            <i class="collapse-icon el-icon-s-unfold"></i>
                        </div>
                        <div v-else @click="onCollapse()">
                            <i class="collapse-icon el-icon-s-fold"></i>
                        </div>
                    </div>
                    <div class="header-right">
                        <i class="collapse-icon el-icon-setting" style="font-size: 20px"></i>
                    </div>
                </el-header>

                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>

import './app.scss';

export default {
    name: 'app',
    data() {
        return {
            isCollapse: false,
            defaultActive: "home"
        }
    },
    mounted() {
        this.defaultActive = this.$router.history.current.name;
        // console.log()
    },
    methods: {
        onCollapse() {
            this.isCollapse = !this.isCollapse;
        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>

<style lang="scss">
// .el-header {
//     background-color: #b3c0d1;
//     color: #333;
//     line-height: 60px;
// }

// .el-aside {
//     color: #333;
// }
// .el-menu-vertical-demo:not(.el-menu--collapse) {
//     width: 200px;
//     min-height: 400px;
// }
</style>
