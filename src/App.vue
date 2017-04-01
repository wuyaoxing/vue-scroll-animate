<template>
  <div id="idexample">
    <div class="classexample"></div>
    <button @click="scrollById">body</button>
    <button>id</button>
    <button>class</button>
  </div>
</template>
<script>
  export default {
    name: 'app',
    data () {
      return {}
    },
    components: {},
    methods: {
      scrollById () {
        this.$scroll(0, 'top')
      }
    }
  }
</script>
<style>
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    line-height: 1.5;
    width: 3000px;
    height: 2000px;
  }
  #idexample {

  }
  .classexample{

  }
</style>
