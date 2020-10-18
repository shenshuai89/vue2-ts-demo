<template>
  <div>
    <h1> user </h1>
    <p>{{$route.params.username}}+{{$route.query.aaa}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  mounted () {},

  methods: {}
}
</script>

<style lang='scss' scoped>
</style>