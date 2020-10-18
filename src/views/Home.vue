<template>
<div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- 通过下标改变数组值会失败，必须通过$set -->
    <p>显示arr数据<span>{{arr}}</span></p>
    <button @click="update">改变数组</button>
    <!-- 组件绑定v-model时，子组件用value接收数据，用input触发更新事件 -->
    <HelloWorld v-model="inputVal" msg="Welcome to Your Vue.js App" />
    <button @click="changeModel">改变v-model的值</button>
    <!-- watch监听对象的属性时，需要用deep属性，否则无法监听到数据变化 -->
    <p>obj.a: {{obj.a}}</p>
    <p>obj.a: <input type="text" v-model="obj.a"></p>
    <!-- Object.defineProperty实现的双向数据绑定，无法监听到对象的属性，直接修改无法修改值，必须使用$set -->
    <p>objA.val的值{{objA.val}}</p>
    <button @click="objA.val == 2">无法改变对象val的值</button>
    <button @click="$set(objA,'val',6)">改变对象val的值</button>
    <!-- 改变值之后，无法立即获取到dom值的更新。数据更新的diff是一个异步算法的过程，获取dom的值是同步的。要获取需使用nextTick -->
    <p id="txt">{{txt}}</p>
    <button @click="getTxtValue">获取txt值</button>
</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'Home',
    data() {
        return {
            arr: [1, 2, 3],
            inputVal: "modelValue",
            txt: "这是一个字符串文本",
            obj: {
                a: 123
            },
            objA: {
                val: 1,
            }
        }
    },
    activated() {
        console.log("render");
    },
    watch: {
        // obj(newVal, oldVal) {
        // 不会输出值
        //     console.log("obj.a changed", newVal, oldVal);
        // }
        // 上面的例子是值变化时候，watch才执行，我们想让值最初时候watch就执行就用到了handler和immediate属性
        obj: {
            handler(newName, oldName) {
                console.log('obj.a changed', newName, oldName);
            },
            // 立即执行
            immediate: true,
            // 可以监听对象的属性为响应数据
            deep: true
        }
    },
    methods: {
        update() {
            this.$set(this.arr, 0, 5)
        },
        changeModel() {
            this.inputVal = "changed"
        },
        getTxtValue() {
            this.txt = "改变一下文本的内容"
            console.log(document.getElementById("txt").innerText);
        }
    },
    components: {
        HelloWorld
    }
}
</script>
