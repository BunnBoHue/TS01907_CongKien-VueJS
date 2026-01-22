<template>
  <h4 class="text-info mb-3">Về tôi</h4>

  <div class="card mb-3">
    <img :src="avatarSrc" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">Giới thiệu bản thân</h5>
      <p class="card-text">
        TS. Trần Hoàng, Tổ chức tư vấn sức khỏe độc lập<br />
        Châm ngôn: Ta không được chọn nơi mình sinh ra,
        nhưng ta được chọn cách mình sẽ sống
      </p>
    </div>
  </div>
</template>

<script setup>
const avatarSrc = '/vite.svg'
</script>
