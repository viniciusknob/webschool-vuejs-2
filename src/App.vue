<template>
  <div class="phone-viewport">

    <md-tollbar>
      <div class="md-toolbar-row">
        <md-menu>
          <md-button md-menu-trigger class="md-icon-button" v-on:click.native="toogleLeftSideNav">
            <md-icon>menu</md-icon>
          </md-button>

          <md-menu-content>
            <md-menu-item>My Item 1</md-menu-item>
            <md-menu-item>My Item 2</md-menu-item>
            <md-menu-item>My Item 3</md-menu-item>
          </md-menu-content>

        </md-menu>
        <h1 class="md-title">{{ title }}</h1>
      </div>
    </md-tollbar>
  </div>
</template>

<script>
  export default {
    name: 'WebschoolComponent',
    data() { // two-way data binding
      return {
        title: 'Ecommerce Webschool with Vue.JS 2'
      }
    },
    methods: {
      toogleLeftSideNav() {

      }
    }
  }
</script>

<style>

</style>
