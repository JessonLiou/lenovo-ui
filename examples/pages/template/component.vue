<template>
  <div class="component-wrapper">
    <section class="component-nav">
      <side-nav :data="navData" :base="`/${lang}/component`"></side-nav>
    </section>

    <section class="component-content">
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import SideNav from 'examples/components/side-nav'
import navConfig from 'examples/config/nav'

export default {
  components: {
    SideNav
  },
  data () {
    return {
      lang: this.$route.meta.lang,
      navData: navConfig[this.$route.meta.lang]
    }
  }
}
</script>

<style lang="scss">
.component-wrapper {
  position: relative;
  height: 100%;

  .component-nav {
    position: absolute;
    box-sizing: border-box;
    width: 240px;
    height: 100%;
    padding: 50px 0 50px 12px;
    overflow-y: scroll;
    overflow-x: auto;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .component-content {
    box-sizing: border-box;
    height: 100%;
    padding: 50px 12px 50px 270px;
    overflow-y: scroll;
    overflow-x: auto;

    &::-webkit-scrollbar {
      display: none;
    }

    h3 {
      margin: 55px 0 20px;
    }

    table {
      border-collapse: collapse;
      width: 100%;
      background-color: #fff;
      font-size: 14px;
      margin-bottom: 45px;
      line-height: 1.5em;

      strong {
        font-weight: normal;
      }

      td, th {
        border-bottom: 1px solid #dcdfe6;
        padding: 15px;
        max-width: 250px;
      }

      th {
        text-align: left;
        white-space: nowrap;
        color: #909399;
        font-weight: normal;
      }

      td {
        color: #606266;
      }

      th:first-child, td:first-child {
        padding-left: 10px;
      }
    }
  }
}
</style>
