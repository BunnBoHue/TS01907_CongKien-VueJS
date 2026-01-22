<script setup>
import PostComposer from '../components/PostComposer.vue'
</script>

<template>
  <!-- Ô đăng bài -->
  <PostComposer />

  <!-- Feed bài đăng -->
  <div class="mt-4">
    <h3 class="mb-3">Bài đăng</h3>

    <!-- Post 1 -->
    <div class="card mb-3 shadow-sm">
      <div class="card-body">
        <div class="d-flex align-items-center gap-2 mb-2">
          <img src="/vite.svg" class="rounded-circle" style="width:40px;height:40px" />
          <div>
            <div class="fw-semibold">Nguyễn Văn A</div>
            <div class="text-muted small">2026-01-22 • Chế độ tập</div>
          </div>
        </div>

        <h5 class="card-title mb-2">Tập thể dục 15 phút mỗi ngày</h5>
        <p class="card-text mb-2">
          Chỉ cần 15 phút mỗi ngày để cải thiện sức khỏe tim mạch và tinh thần. Bắt đầu từ những bài đơn giản.
        </p>

        <div class="d-flex gap-2">
          <button class="btn btn-outline-primary btn-sm" type="button">Thích</button>
          <button class="btn btn-outline-secondary btn-sm" type="button">Bình luận</button>
          <button class="btn btn-outline-success btn-sm" type="button">Chia sẻ</button>
        </div>
      </div>
    </div>

    <!-- Post 2 -->
    <div class="card mb-3 shadow-sm">
      <div class="card-body">
        <div class="d-flex align-items-center gap-2 mb-2">
          <img src="/vite.svg" class="rounded-circle" style="width:40px;height:40px" />
          <div>
            <div class="fw-semibold">Trần Thị B</div>
            <div class="text-muted small">2026-01-21 • Dinh dưỡng</div>
          </div>
        </div>

        <h5 class="card-title mb-2">5 món ăn giúp ngủ ngon hơn</h5>
        <p class="card-text mb-2">
          Chuối, yến mạch, sữa ấm, cá hồi và hạt óc chó có thể hỗ trợ giấc ngủ tốt hơn nếu dùng đúng cách.
        </p>

        <div class="d-flex gap-2">
          <button class="btn btn-outline-primary btn-sm" type="button">Thích</button>
          <button class="btn btn-outline-secondary btn-sm" type="button">Bình luận</button>
          <button class="btn btn-outline-success btn-sm" type="button">Chia sẻ</button>
        </div>
      </div>
    </div>

    <!-- Post 3 -->
    <div class="card mb-3 shadow-sm">
      <div class="card-body">
        <div class="d-flex align-items-center gap-2 mb-2">
          <img src="/vite.svg" class="rounded-circle" style="width:40px;height:40px" />
          <div>
            <div class="fw-semibold">Lê C</div>
            <div class="text-muted small">2026-01-20 • Cẩm nang</div>
          </div>
        </div>

        <h5 class="card-title mb-2">Cách cân bằng cuộc sống và công việc</h5>
        <p class="card-text mb-2">
          Hãy đặt ưu tiên, học cách từ chối và chia nhỏ mục tiêu để tránh quá tải. Sự đều đặn quan trọng hơn hoàn hảo.
        </p>

        <div class="d-flex gap-2">
          <button class="btn btn-outline-primary btn-sm" type="button">Thích</button>
          <button class="btn btn-outline-secondary btn-sm" type="button">Bình luận</button>
          <button class="btn btn-outline-success btn-sm" type="button">Chia sẻ</button>
        </div>
      </div>
    </div>
  </div>
</template>
