<template>
  <div id="idexample">
    body
    <div class="classexample">
      id
      <div class="h">
        class
      </div>
    </div>
    <div class="btn">
      <button @click="scrollByBody">body</button>
      <button @click="scrollById">id</button>
      <button @click="scrollByClass">class</button>
      <button @click="scrollByBodyLeft">bodyLeft</button>
    </div>
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
      scrollByBody () {
        this.$scroll(0, 'scrollTop', 'body', 4)
      },
      scrollById () {
        this.$scroll(0, 'scrollTop', 'idexample', 8)
      },
      scrollByClass () {
        this.$scroll(0, 'scrollTop', 'classexample', 2)
      },
      scrollByBodyLeft () {
        this.$scroll(0, 'scrollLeft', null, 6)
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
    border: 1px solid red;
    width: 600px;
    height: 600px;
    overflow: scroll;
  }
  .classexample {
    height: 900px;
    border: 1px solid #333;
    width: 400px;
    margin: 0 auto;
    overflow: scroll;
  }
  .h {
    height: 1200px;
    border: 3px solid #311b92;
    width: 200px;
    margin: 0 auto;
  }
  .btn {
    position: absolute;
    bottom: 0;
    right: 0;
  }
</style>
