<template>
  <h3 class="mb-4 text-center">Bài viết mới nhất</h3>

  <div class="row g-4">
    <!-- Bài viết 1 -->
    <div class="col-md-6">
      <div class="card h-100 shadow-sm">
        <img src="/vite.svg" class="card-img-top" alt="post image">
        <div class="card-body">
          <h5 class="card-title">Lợi ích của việc tập thể dục mỗi ngày</h5>
          <p class="card-text text-muted">
            Tập thể dục giúp nâng cao sức khỏe thể chất và tinh thần, giảm stress và tăng tuổi thọ.
          </p>
        </div>
        <div class="card-footer bg-white border-0">
          <RouterLink to="/posts/1" class="btn btn-outline-primary btn-sm">
            Xem chi tiết
          </RouterLink>
        </div>
      </div>
    </div>

    <!-- Bài viết 2 -->
    <div class="col-md-6">
      <div class="card h-100 shadow-sm">
        <img src="/vite.svg" class="card-img-top" alt="post image">
        <div class="card-body">
          <h5 class="card-title">Chế độ dinh dưỡng lành mạnh</h5>
          <p class="card-text text-muted">
            Dinh dưỡng hợp lý giúp cơ thể khỏe mạnh, phòng ngừa bệnh tật và duy trì năng lượng.
          </p>
        </div>
        <div class="card-footer bg-white border-0">
          <RouterLink to="/posts/2" class="btn btn-outline-primary btn-sm">
            Xem chi tiết
          </RouterLink>
        </div>
      </div>
    </div>

    <!-- Bài viết 3 -->
    <div class="col-md-6">
      <div class="card h-100 shadow-sm">
        <img src="/vite.svg" class="card-img-top" alt="post image">
        <div class="card-body">
          <h5 class="card-title">Cách cân bằng cuộc sống</h5>
          <p class="card-text text-muted">
            Cân bằng giữa công việc và cuộc sống giúp bạn hạnh phúc và làm việc hiệu quả hơn.
          </p>
        </div>
        <div class="card-footer bg-white border-0">
          <RouterLink to="/posts/3" class="btn btn-outline-primary btn-sm">
            Xem chi tiết
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
