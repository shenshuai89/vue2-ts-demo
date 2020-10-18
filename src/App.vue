<template>
<div id="app">
    <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/first">first</router-link> |
        <router-link to="/todo">todo</router-link> |
        <router-link :to="{path:'/users/小明',query:{aaa:'bbb'}}">xiaoming</router-link>
    </div>
    <!-- 使用keep-alive缓存起来的组件，无法更新数据的变化，新增两个生命周期激活状态：activated和失效状态deActivied -->
    <keep-alive>
        <router-view />
    </keep-alive>
    <hr>
    <About></About>
    <Alert></Alert>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import About from "@/views/About.vue";
import Alert from "@/components/Alert.vue";

export default Vue.extend({
    name: 'app',
    components: {
        About,
        Alert
    },
    mounted() {
        console.log("this", this.$gloNum)
    },

});
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
