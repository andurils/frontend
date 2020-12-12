<template>
  <div class="parallax">
    <div class="q-parallax" style="height: 500px">
      <div class="q-parallax__media absolute-full">
        <img
          src="https://cdn.quasar.dev/img/parallax2.jpg"
          style="display: initial; transform: translate3d(-50%, 341px, 0px)"
        />
      </div>
      <div class="q-parallax__content absolute-full column flex-center">
        <h1 class="text-white">Basic</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ParallaxScrolling',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.q-parallax {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: inherit;
}

.q-parallax__media > img,
.q-parallax__media > video {
  position: absolute;
  left: 50%;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  will-change: transform;
  display: none;
}
</style>
