<template>
  <div class="ln-row" :style="style">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'LnRow',
  props: {
    gutter: {
      type: Number,
      default: 0
    }
  },
  computed: {
    style () {
      let style = {}

      if (this.gutter) {
        style.marginLeft = `-${this.gutter / 2}px`
        style.marginRight = style.marginLeft
      }

      return style
    }
  }
}
</script>
