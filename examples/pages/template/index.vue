<template>
  <div class="index-wrapper" :class="{'is-component': isComponent}">
    <div class="page-container">
      <div class="header">
        <h1 class="logo">
          <router-link
            to="/<%= lang >/welcome"
            exact>
            <img class="logo__img" src="~examples/assets/images/common/logo.png">
          </router-link>
        </h1>

        <ul class="menu">
          <li class="menu__item">
            <router-link
              active-class="active"
              to="/<%= lang >/component/installation"
              v-text="'<%= menu-components >'"
              exact>
            </router-link>
          </li>
        </ul>
      </div>

      <div class="main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isComponent: this.$root.isComponent
    }
  }
}
</script>

<style type="scss" scoped>
@import 'examples/assets/styles/mixin.scss';

.index-wrapper {
  .page-container {
    margin: 0 auto;
    width: 1200px;
    padding-top: 80px;
  }

  &.is-component {
    height: 100%;

    .page-container {
      height: 100%;
    }

    .main {
      height: calc(100% - 80px);
    }
  }

  .header {
    position: fixed;
    box-sizing: border-box;
    top: 0;
    z-index: 1500;

    border-bottom: 1px solid #ccc;
    height: 80px;
    width: 1200px;
    padding: 0 12px;
    line-height: 80px;
    background: #fff;

    @include b(logo) {
      float: left;
      margin: 0;
      padding: 0;

      @include e(img) {
        height: 40px;
        vertical-align: sub;
      }
    }

    @include b(menu) {
      float: right;

      @include e(item) {
        a {
          text-decoration: none;
          color: #1989fa;
          opacity: .5;
          display: block;
          padding: 0 22px;

          &.active {
            opacity: 1;
          }
        }
      }
    }
  }

  @media (max-width: 1140px) {
    .page-container {
      width: 100%;
    }

    .header {
      width: 100%;
    }
  }
}
</style>
