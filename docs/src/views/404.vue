<template>
  <div class="p-5">
    <div class="d-flex justify-content-center">
      <div class="w-75">
        <div class="text-center">
          <div class="text-primary display-1 fw-bold">404</div>
          <h4>未找到页面</h4>
          <p class="text-secondary">
            对不起，您正在寻找的页面不存在。尝试检查URL的错误，然后按浏览器上的刷新按钮或尝试在我们的应用程序中找到其他内容。
          </p>
          <button class="btn btn-primary" @click="$router.back()">返回</button>
        </div>
        <!-- end /.text-center-->
      </div>
      <!-- end col-->
    </div>
  </div>
</template>
