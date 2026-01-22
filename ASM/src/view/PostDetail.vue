<template>
  <div class="mb-3">
    <h3 class="mb-1">Tiêu đề bài viết (Demo)</h3>
    <div class="text-muted small">Tác giả: Nguyễn Văn A • 2026-01-22</div>
  </div>

  <div class="card card-body mb-4">
    <p class="mb-0" style="white-space: pre-line">
      Đây là nội dung bài viết demo để minh họa giao diện chi tiết.
      (Y1: chỉ làm UI, chưa xử lý dữ liệu động)
    </p>
  </div>

  <div class="d-flex gap-2 mb-4">
    <RouterLink class="btn btn-outline-secondary btn-sm" to="/posts/1/edit">Sửa</RouterLink>
    <button class="btn btn-outline-danger btn-sm" type="button">Xóa</button>
  </div>

  <h5>Bình luận</h5>

  <div class="card card-body mb-3">
    <form>
      <textarea class="form-control mb-2" rows="3" placeholder="Viết bình luận..." required></textarea>
      <button class="btn btn-primary btn-sm" type="button">Gửi bình luận</button>
    </form>
  </div>

  <div class="list-group">
    <div class="list-group-item">
      <div class="d-flex justify-content-between">
        <strong>Trần B</strong>
        <small class="text-muted">2026-01-22 10:30</small>
      </div>
      <div style="white-space: pre-line">Bài viết hay quá!</div>
    </div>

    <div class="list-group-item">
      <div class="d-flex justify-content-between">
        <strong>Lê C</strong>
        <small class="text-muted">2026-01-22 11:05</small>
      </div>
      <div style="white-space: pre-line">Mình học được nhiều điều.</div>
    </div>
  </div>
</template>
