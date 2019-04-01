<template>
  <div>
    <div v-if="header_show" >
      <h2 >header</h2>
    </div>
    <div>
      <router-view v-on:header = "header"  v-on:footer = "footer"></router-view>
    </div>
    <div v-if="footer_show">
      <h2>footer</h2>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Layout",
      data(){
          return {
            header_show:true,
            footer_show:true,
          }
      },
      methods:{
        //是否显示头部
        header:function (bool) {
          this.header_show = bool;
        },
        //是否显示底部
        footer:function (bool) {
          this.footer_show = bool;
        }
      },
      created() {

      },
    }
</script>

<style scoped>

</style>
