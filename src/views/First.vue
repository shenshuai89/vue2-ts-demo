<template>
  <!-- 结构示例，指令基础用法同vue -->
  <div class="first">
    <h3 v-if="hideHeader">结构示例</h3>
    <span>{{ selfKey1 }}</span>
    <ul>
      <li :key="item" v-for="item in fatherKey">{{ item }}</li>
    </ul>
    <button @click="addText">追加文字</button>
    <div>
      <p>使用过滤器filterNumberToString</p>
      <span>{{12345678923 | filterNumberToString}}</span>
    </div>
    <div>
      <p class="use_sass">使用sass样式</p>
      <span class="mixin">这是比较重要的文章</span>
    </div>
    <Zizujian :oneKey="oneKeyObj" @toSon="FuChuanZi"></Zizujian>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { Route } from "vue-router";
import Zizujian from "@/components/Zizujian.vue";
@Component({
  // 组件注册
  components: {
    Zizujian
    // 'another-vue': AnotherVue
  },
  // 过滤器
  filters: {
    filterNumberToString(value: Number) {
      return Number(value).toLocaleString();
    }
  },
  // 属性传递
  props: {
    hideHeader: {
      type: Boolean,
      required: false,
      default: false // 默认属性的默认值
    }
  }
})
export default class First extends Vue {
  @Prop({
    type: Boolean,
    required: false,
    default: false // 默认属性的默认值
  })
  private hideHeader!: boolean | undefined;

  protected fatherKey?: string[] = ["a", "b", "c"]; // 其他没有默认值的传值
  public oneKeyObj: Object = { name: "key", age: 1 };
  selfKey1: string = "自己的一个变量";
  // 生命周期
  created() {}
  mounted() {
    console.log("this.selfKey1.length", this.selfKey1.length);
  }
  // 计算属性
  get computedKey() {
    return this.selfKey1.length;
  }
  // 监听器
  @Watch("computedKey")
  getcomputedKey(newVal: any) {
    console.log("selfKey1.length newVal", newVal);
  }
  // 监听路由变化
  @Watch("$route", { immediate: true })
  private changeRouter(route: Route) {
    console.log("监听路由route对象变化", route);
  }

  // 导航守卫函数
  beforeRouteEnter(to: Route, from: Route, next: () => void): void {
    console.log("beforeRouteEnter", to, from);
    next();
  }
  beforeRouteLeave(to: Route, from: Route, next: () => void): void {
    console.log("beforeRouteLeave", to, from);
    next();
  }

  // 方法
  addText() {
    this.selfKey1 += "，追加文字！";
  }
  FuChuanZi() {
    console.log("父组件的方法，等待子组件触发");
  }
}
</script>

<style lang="scss">
@import "@/assets/styles/_variable.scss";
.first{
  .use_sass{
    color: $red;
  }
  .mixin{
    @include important-text;
    @include bordered(#12F67F,3px)
  }
}
</style>