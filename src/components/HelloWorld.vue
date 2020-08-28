<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
    <cIntro></cIntro>
  </div>
</template>

<script>
  import cIntro from './Intro.vue'

  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
    components: {
      cIntro
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    color: red;
  }
</style>
