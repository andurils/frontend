<template>
  <div class="user">
    <h1>router.push</h1>
    <div>
      <router-link to="/newuser/foo">/newuser/foo</router-link>
      <router-link to="/newuser/foo/info/123"
        >/newuser/foo/info/123</router-link
      >
      <router-link :to="{ name: 'newuser', params: { username: 'test-user' } }"
        >/newuser/test-user</router-link
      >
    </div>
    <div>
      <button @click="pushPath1">/newuser/foobtn</button>
      <button @click="pushPath2">/newuser/foo/info/:infoId</button>
      <button @click="pushPath3">/newuser/foo/register?plan=private</button>
    </div>

    <h1>router.replace</h1>
    <div>
      <router-link to="/newuser/foo" replace>/newuser/foo</router-link>
      <router-link to="/newuser/foo/info/123" replace
        >/newuser/foo/info/123</router-link
      >
    </div>
    <div>
      <button @click="replacePath1">/newuser/foobtn</button>
      <button @click="replacePath2">/newuser/foo/info/:infoId</button>
      <button @click="replacePath3">/newuser/foo/register?plan=private</button>
    </div>

    <h1>router.go</h1>

    <div>
      <button @click="forward(1)">前进</button>
      <button @click="back(-1)">后退</button>
      <button @click="back(-100)">后退100步记录</button>
    </div>

    <h2>hello,{{ username }}!</h2>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  computed: {
    username() {
      return this.$route.params.username
    },
  },
  methods: {
    pushPath1() {
      // 字符串
      // this.$router.push('foobtn')
      // 对象
      this.$router.push({ path: '/newuser/foobtn' })
    },
    pushPath2() {
      const infoId = '001'
      this.$router.push({ name: 'user-info', params: { infoId } }) // -> /info/123
      // this.$router.push({ path: `/newuser/${this.username}/info/${infoId}` }) // -> /info/123

      // 如果提供了 path，params 会被忽略 这里的 params 不生效
      // this.$router.push({
      //   path: `/newuser/${this.username}/info`,
      //   params: { infoId },
      // }) // -> /info
    },
    pushPath3() {
      // 带查询参数，变成 /register?plan=private
      this.$router.push({
        path: `/newuser/${this.username}/register`,
        query: { plan: 'private' },
      })
    },

    replacePath1() {
      // 字符串
      // this.$router.push('foobtn')
      // 对象
      this.$router.replace({ path: '/newuser/foobtn' })
    },
    replacePath2() {
      const infoId = '001'
      this.$router.replace({ name: 'user-info', params: { infoId } }) // -> /info/123
    },
    replacePath3() {
      // 带查询参数，变成 /register?plan=private
      this.$router.replace({
        path: `/newuser/${this.username}/register`,
        query: { plan: 'private' },
      })
    },
    forward(n) {
      this.$router.go(n)
    },
    back(n) {
      this.$router.go(n)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  margin-right: 10px;
}
button {
  margin-right: 10px;
}
</style>
