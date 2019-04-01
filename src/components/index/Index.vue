<template>
    <p>login</p>
</template>

<script>
    export default {
        name: "index",
      data(){
          return {
            headerShow: true,
          }
      },
      created() {
          this.$emit('header',true);
      }
    }
</script>

<style scoped>

</style>
