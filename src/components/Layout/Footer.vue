<template>
<div class="gc_footer">
<div class="gc_footer--explain">Design By GorgeousCat</div>
</div>
</template>

<script>
    export default {
        name: "footer"
    }
</script>

<style scoped>
  .gc_footer{
    width: 1536px;
    height: 300px;
    background: #000000;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #434343, #000000);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #434343, #000000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    position: relative;
  }
  .gc_footer--explain{
    color: white;
    position: absolute;
    bottom: 10px;
    text-align: center;
    left: 50%;
    margin-left: -150px;

  }
</style>
