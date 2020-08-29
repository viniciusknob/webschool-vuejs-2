<template>
  <div class="phone-viewport">
    <md-tollbar>
      <h1 class="md-title">{{ title }}</h1>
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
    }
  }
</script>

<style>

</style>
