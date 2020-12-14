<template>
  <div id="app">
    <h1>Scroll Behavior</h1>
    <ul>
      <li><router-link to="/scroll/foo">/foo</router-link></li>
      <li><router-link to="/scroll/bar">/bar</router-link></li>
      <li><router-link to="/scroll/bar#anchor">/bar#anchor</router-link></li>
      <li><router-link to="/scroll/bar#anchor2">/bar#anchor2</router-link></li>
      <li><router-link to="/scroll/bar#1number">/bar#1number</router-link></li>
    </ul>
    <transition name="fade" mode="out-in" @after-leave="afterLeave">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Transitions',
  computed: {},
  methods: {
    afterLeave() {
      this.$root.$emit('triggerScroll')
    },
  },
}
</script> 
<style scoped>
</style>
