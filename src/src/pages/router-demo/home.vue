<template>
  <div class="home">
    <h1>Hello {{ username }}!</h1>
    <button @click="goBack">goBack</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    username() {
      // 我们很快就会看到 `params` 是什么
      return this.$route.params.username
    },
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
