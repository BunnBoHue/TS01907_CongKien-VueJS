<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">Kiến thức sức khỏe cộng đồng</h1>

    <div class="row">
      <div class="col-sm-4" v-for="(item, index) in items" :key="index">
        <div class="card mb-3">
          <!-- v-bind -->
          <img :src="item.image" class="card-img-top" alt="Hình ảnh" />

          <div class="card-body">
            <!-- interpolation -->
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">{{ item.content }}</p>

            <!-- v-on -->
            <button class="btn btn-info" @click="xemChiTiet(item.title)">
              Xem chi tiết
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Import hình ảnh
import img1 from '../assets/images/img1.jpg'
import img2 from '../assets/images/img2.jpg'
import img3 from '../assets/images/img3.jpg'

// Mảng bài viết
const items = [
  {
    title: '8 loại rau củ quả giàu canxi',
    content: 'Canxi là khoáng chất cần thiết cho cơ thể...',
    image: img1
  },
  {
    title: 'Các loại gia vị tốt cho sức khỏe',
    content: 'Một số loại gia vị giúp tăng sức đề kháng...',
    image: img2
  },
  {
    title: '9 loại đậu bổ dưỡng nên dùng nhiều',
    content: 'Đậu giàu đạm, chất xơ và vitamin...',
    image: img3
  }
]

// Xử lý sự kiện
function xemChiTiet(title) {
  alert('Bạn chọn bài: ' + title)
}
</script>
