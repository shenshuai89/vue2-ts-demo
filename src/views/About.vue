<template>
<div class="about">
    <h1>This is an about page</h1>
    <p>通过eventBus给Alert组件传递数据</p>
    <button @click="greet(message)">点击显示弹出框</button>
</div>
</template>

<script>
export default {
    name: "about",
    data() {
        return {
            message: "about页面欢迎访问！"
        }
    },
    methods: {
        greet(msg) {
            this.$bus.$emit("alert", msg)
        }
    }
}
</script>
