<template>
<div class="alert">
    <p>这是alert弹窗层</p>
    {{message}}
</div>
</template>

<script>
export default {
    name: "alert",
    data() {
        return {
            message: ""
        };
    },
    created() {
        this.$bus.$on("alert", msg => {
            this.showMessage(msg)
        })
    },
    beforeDestroy() {
        this.$bus.$off("alert")
    },
    methods: {
        showMessage(msg) {
            alert(msg);
            this.message = msg
        }
    }
}
</script>

<style lang="scss" scoped>
.alert {
    position: absolute;
    z-index: 999;

}
</style>
