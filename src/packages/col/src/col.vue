<template>
  <div :class="classList" :style="style">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'LnCol',
  props: {
    span: {
      type: Number,
      default: 0
    },
    offset: {
      type: Number,
      default: 0
    }
  },
  computed: {
    classList () {
      let classList = []

      if (this.span <= 0) {
        classList.push('ln-col')
      } else {
        classList.push(`ln-col-${this.span}`)
      }

      if (this.offset > 0) {
        classList.push(`ln-offset-${this.offset}`)
      }

      return classList
    },
    style () {
      let parent = this.$parent
      while (parent && parent.$options.name !== 'LnRow') {
        parent = parent.$parent
      }
      let gutter = parent ? parent.gutter : 0

      let style = {}

      if (gutter) {
        style.paddingLeft = gutter / 2 + 'px'
        style.paddingRight = style.paddingLeft
      }

      return style
    }
  }
}
</script>
