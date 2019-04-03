<template>
<div >
  <div >
    <!-- header-->
    <gc_header></gc_header>
  </div>
  <div>
    <!-- content-->
    <el-carousel indicator-position="outside" height="700px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <div class="middle-part">
      <div class="middle-part__left-part">

      </div>
      <el-collapse v-model="activeName" class="el-collapse__diy" accordion>
        <el-collapse-item title="个人简介" name="1" >
          <el-card class="box-card">
            <div v-for="o in 4" :key="o" class="text item">
              {{'列表内容 ' + o }}
            </div>
          </el-card>
        </el-collapse-item>
        <el-collapse-item title="兴趣爱好" name="2">
          <el-card class="box-card">
            <div v-for="o in 4" :key="o" class="text item">
              {{'列表内容 ' + o }}
            </div>
          </el-card>
        </el-collapse-item>
        <el-collapse-item title="个人理想" name="3">
          <el-card class="box-card">
            <div v-for="o in 4" :key="o" class="text item">
              {{'列表内容 ' + o }}
            </div>
          </el-card>
        </el-collapse-item>
        <el-collapse-item title="预期目标" name="4">
          <el-card class="box-card">
            <div v-for="o in 4" :key="o" class="text item">
              {{'列表内容 ' + o }}
            </div>
          </el-card>
        </el-collapse-item>
      </el-collapse>
    </div>
    </div>
  <div>
    <!-- footer-->
    <gc_footer></gc_footer>
  </div>
</div>
</template>

<script>
  import gc_footer from "../Layout/Footer"
  import gc_header from "../Layout/Header"
    export default {
        name: "index",
      data(){
          return {

          }
      },
      created() {

      },
      components:{gc_header,gc_footer}
    }
</script>

<style scoped>
  .el-collapse__diy{
    color: blue !important;
    padding-left: 20px;
    padding-right: 20px;
    width: 700px;
    height: 100%;
  }
  .middle-part{
    display: flex;
    flex-direction: row;
  }
  .middle-part__left-part{
    width: 700px;
    height: 455px;
  }
  .el-collapse__diy /deep/ .el-collapse-item__header{
    font-size: 20px;
    height: 115px;
  }
</style>
