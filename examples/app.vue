<template>
  <div id="app" :class="{'is-component': isComponent}">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  computed: {
    isComponent () {
      return new RegExp(`/${this.$route.meta.lang}/component`).test(this.$route.path)
    }
  }
}
</script>

<style lang="scss" scoped>
.is-component {
  height: 100%;
  overflow-y: hidden;
}
</style>
