<template>
<div >
  <div >
    <!-- header-->
    <gc_header></gc_header>
  </div>
  <div>
    <!-- content-->
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item title="一致性 Consistency" name="1">
        <el-card class="box-card">
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </el-collapse-item>
      <el-collapse-item title="反馈 Feedback" name="2">
        <el-card class="box-card">
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </el-collapse-item>
      <el-collapse-item title="效率 Efficiency" name="3">
        <el-card class="box-card">
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </el-collapse-item>
      <el-collapse-item title="可控 Controllability" name="4">
        <el-card class="box-card">
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </el-collapse-item>
    </el-collapse>
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
.gc_content--img{
  width: 1536px;
  height: 400px;
}
</style>
