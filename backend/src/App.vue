<template>
  <div id="layout">
    <img src="@base/assets/image/logo.png" />
    <HelloWorld />
    <Dialog />
  </div>
</template>

<script>
/**
 * <router-view />
 * <Dialog />
 */
import HelloWorld from '@base/components/HelloWorld.vue'
export default {
  components: { HelloWorld },
}
</script>

<style lang="scss" src="./style/main.scss"></style>
