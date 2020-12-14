<template>
  <div id="app">
    <h1>Transitions</h1>
    <ul>
      <li><router-link to="/tran/parent">/parent</router-link></li>
      <li><router-link to="/tran/parent/foo">/parent/foo</router-link></li>
      <li><router-link to="/tran/parent/bar">/parent/bar</router-link></li>
    </ul>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Transitions',
  computed: {},
  methods: {},
}
</script> 
<style scoped>
</style>
