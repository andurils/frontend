<template>
  <div>
    <h3>ID：{{ $route.params.id }}</h3>
    <h3>结果：{{ result }}</h3>
  </div>
</template>
 
<script>
export default {
  name: 'datafetch',
  data() {
    return {
      result: '',
    }
  },
  //路由进入前调用
  beforeRouteEnter(to, from, next) {
    //传递过来的参数
    var id = to.params.id
    //使用setTimeout模拟数据获取（等待2秒返回）
    setTimeout(function () {
      next((vm) => {
        vm.result = '这个是id=' + id + '的数据(beforeRouteEnter)'
      })
    }, 1000)
  },
  // 路由改变前，组件就已经渲染完了
  // 逻辑稍稍不同
  beforeRouteUpdate(to, from, next) {
    this.result = null
    var id = to.params.id
    this.result = '这个是id=' + id + '的数据(beforeRouteUpdate)'
    setTimeout(() => {
      next((vm) => {
        vm.result = '这个是id=' + id + '的数据(beforeRouteUpdate)'
      })
    }, 1000)
    next()
  },
  created() {
    setTimeout(() => {
      this.$router.push({ path: '/data/10086' })
    }, 4000)
  },
}
</script>