<template>
<div class="hello">
    <h1>{{ msg }}</h1>
    <p class="val">子组件接收到v-model的值，{{value}}</p>
    <button @click="changeModelValue">通过子组件的按钮改变v-model的值</button>
    <p class="desc">
        For a guide and recipes on how to configure / customize this project,<br>
        check out the
    </p>
    <img class="image" src="../assets/logo.png" alt="">
    <input type="text" v-model="username">
    <input type="text" v-model="password">
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import {
    resizeFont
} from "../config/utils"

export default Vue.extend({
    name: 'HelloWorld',
    props: {
        msg: String,
        value: {
            default: ""
        }
    },
    data() {
        return {
            username: "",
            password: ""
        }
    },
    created() {
        // 移动端配置html的font-size
        // resizeFont()
    },
    methods: {
        changeModelValue() {
            this.$emit("input", "传递给v-model的新值")
        }
    }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
$titleFontSize:32px;
$red:#ff0000;
/* $rem是根据设计稿的宽度设定，设计稿宽度/10 */
$rem:75;

@function px2rem($px) {
    @return ($px/$rem)*1rem;
}

.hello {
    border: 1px solid #ccc;

    h1 {
        font-size: $titleFontSize;
        color: $red;
    }

    .val {
        @include px2px(font-size, 30)
    }

    .desc {
        @include important-text
    }

    .image {
        width: px2rem(200);
    }
}

h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
