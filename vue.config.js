// vue.config.js
module.exports = {
    css: {
      // css预设器配置项
      loaderOptions: {
        sass: {
          prependData: `
            @import "@/assets/styles/_variable.scss";
          `
        }
      }
    }
  };