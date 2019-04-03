<template>
  <div >
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo gc_nav"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">注册</el-menu-item>
      <el-menu-item index="2"><a href="https://www.ele.me" target="_blank">登录</a></el-menu-item>
    </el-menu>
  </div>
</template>

<script>
    export default {
        name: "header",
      data(){
          return {
          }
      },
      methods:{
      },
      created() {
      },
    }
</script>

<style scoped>
  .gc_nav{
    display: flex;
    flex-direction: row-reverse;
  }
</style>
