<template>
  <div class="row justify-content-center">
    <div class="col-12 col-lg-9">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h3 class="m-0">Đăng bài viết</h3>
        <RouterLink class="btn btn-outline-secondary btn-sm" to="/posts">Quay lại</RouterLink>
      </div>

      <form class="card card-body">
        <div class="mb-3">
          <label class="form-label">Tiêu đề</label>
          <input class="form-control" placeholder="Nhập tiêu đề bài viết..." />
        </div>

        <div class="mb-3">
          <label class="form-label">Nội dung</label>
          <textarea class="form-control" rows="8" placeholder="Nhập nội dung..."></textarea>
        </div>

        <div class="mb-3">
          <label class="form-label">Ảnh minh họa (tùy chọn)</label>
          <input type="file" class="form-control" />
          <div class="form-text">Chỉ là giao diện (Y1), chưa upload thật.</div>
        </div>

        <div class="d-flex gap-2">
          <button type="button" class="btn btn-primary">Đăng bài</button>
          <button type="button" class="btn btn-outline-secondary">Lưu nháp</button>
        </div>
      </form>
    </div>
  </div>
</template>
