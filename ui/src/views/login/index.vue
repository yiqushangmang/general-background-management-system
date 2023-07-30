<template>
   <div class="common-layout">
    <el-container>
      <el-header class="header-wrapped">
        <div class="header-content">
            <h3>后台管理系统</h3>
            <span class="welcome">欢迎登录</span>
        </div>
      </el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.header-wrapped{
    .header-content{
      width: 1200px;
      margin: 0 auto;
      display: flex;  
      justify-content: space-between;
      align-items: center;
      .welcome{
        font-size: 12px;
      }
    }
}
</style>