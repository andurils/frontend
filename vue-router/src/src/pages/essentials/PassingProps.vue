<template>
  <div class="props-wrap">
    <h1>Route props</h1>
    <ul>
      <li><router-link to="/props">/</router-link></li>
      <li><router-link to="/props/hello/you">/hello/you</router-link></li>
      <li><router-link to="/props/static">/static</router-link></li>
      <li><router-link to="/props/dynamic/1">/dynamic/1</router-link></li>
      <li><router-link to="/props/attrs">/attrs</router-link></li>
    </ul>
    <router-view class="view" foo="123" bar="456"></router-view>
  </div>
</template>

<script>
export default {
  name: 'PassingProps',
  computed: {},
  methods: {},
}
</script> 
<style scoped>
</style>
