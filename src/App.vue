<template>
  <div class="phone-viewport">

    <md-tollbar>
      <div class="md-toolbar-row">
        <md-menu>
          <md-button md-menu-trigger class="md-icon-button" v-on:click.native="toogleLeftSideNav">
            <md-icon>menu</md-icon>
          </md-button>

          <md-menu-content>
            <md-menu-item>
              <router-link to="/categories">Categorias</router-link>
            </md-menu-item>
            <md-menu-item>
              <router-link to="/products">Products</router-link>
            </md-menu-item>
          </md-menu-content>

        </md-menu>
        <h1 class="md-title">{{ title }}</h1>
      </div>
    </md-tollbar>

    <md-row>
      <router-view></router-view>
    </md-row>
    
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
