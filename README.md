# vue2之使用Vue CLI3开发时初始化项目不同环境配置

## [vue-ts](https://github.com/shenshuai89/vue-cli3-temp/tree/vue-ts) 使用typescript书写vue项目代码

首先要引用

``` 
import { Component, Vue, Prop, Watch, Emit } from "vue-property-decorator";
@Component({
    components:[
        HelloWorld,
    ]
})
export default class Hi extends Vue{
  // data
  @Prop() private msg:string = "this is home page"

  // computed
  get comMsg(){
      return this.msg+" computed"
  }

  // watch
  @Watch()
  changeName(newV:string, oldV:string){
    console.log(`change txt: ${oldV} to ${newV}`)
  }

   // 生命周期
  created(){
    console.log("created阶段");
  }

  // methods
  private add(){
    this.initNum ++;
  }
  
  @Emit()
  private sendMsg():string{
    console.log("sendmsg");
    msg = "father"
    // 事件的返回值为传递的参数
    return "this is send to father message"
  }
}
```

## [vuecli3multi](https://github.com/shenshuai89/vue-cli3-temp/tree/vuecli3multi) 使用vuecli3开发多页面
新建一个vue.config.js
```
module.exports = {
    pages: {
        console: {
            // 应用入口配置，相当于单页面应用的main.js，必需项
            entry: 'src/modules/console/console.js',

            // 应用的模版，相当于单页面应用的public/index.html，可选项，省略时默认与模块名一致
            template: 'public/console.html',

            // 编译后在dist目录的输出文件名，可选项，省略时默认与模块名一致
            filename: 'console.html',

            // 标题，可选项，一般情况不使用，通常是在路由切换时设置title
            // 需要注意的是使用title属性template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'console page',

            // 包含的模块，可选项
            chunks: ['console']
        },
        // 只有entry属性时，直接用字符串表示模块入口
        client: 'src/modules/client/client.js'
    }
}
```
配置多个页面的入口
必须在public文件夹下，创建client.html和console.html，同时给设置不同的div的id值。

* 在src目录下创建modules
* 在modules中创建client和console文件夹
* 在两个文件夹中分别创建index.js router.js (Client.vue或者Console.vue)

多页面中vuex只能在单独的子模块中共享数据，router只能在单独的子模块中路由跳转。
