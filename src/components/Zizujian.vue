<template>
  <div>
    {{oneKey}}
    <p>{{somebody}}</p>
    <div>
      <button @click="sendToFu">点击触发父组件的事件</button>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
// 组件传递的props属性
@Component({
  props: {
    oneKey: {
      type: Object
    }
  }
})
export default class Zizujian extends Vue {
  // @Prop定义data数据
  @Prop() private oneKey?: object;
  private somebody: String = "子组件";
  @Watch("oneKey")
  getoneKey(newVal: object, oldVal: object) {
    // 监听成功后要做
    console.log("新值：", newVal, "旧值：", oldVal);
  }
  @Watch("somebody")
  getsomebody(newVal: string, oldVal: string) {
    // 监听成功后要做
    console.log("新值：", newVal, "旧值：", oldVal);
  }

  mounted() {
    setTimeout(() => {
      this.somebody = "zizujian";
    }, 3000);
  }
  sendToFu() {
    this.$emit("toSon", "");
  }
}
</script>
