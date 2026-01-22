<template>
  <div class="row justify-content-center">
    <div class="col-12 col-lg-8">
      <h3 class="mb-3">Thông tin cá nhân</h3>

      <div class="card card-body">
        <div class="row g-3">
          <div class="col-md-4">
            <div class="border rounded p-3 text-center">
              <img
                src="/vite.svg"
                alt="avatar"
                class="img-fluid rounded-circle mb-2"
                style="width: 120px; height: 120px; object-fit: cover"
              />
              <div class="small text-muted mb-2">Ảnh đại diện</div>
              <input type="file" class="form-control form-control-sm" />
            </div>
          </div>

          <div class="col-md-8">
            <div class="mb-3">
              <label class="form-label">Họ và tên</label>
              <input class="form-control" value="Nguyễn Văn A" />
            </div>

            <div class="mb-3">
              <label class="form-label">Email</label>
              <input type="email" class="form-control" value="example@gmail.com" />
            </div>

            <div class="mb-3">
              <label class="form-label">Mật khẩu mới</label>
              <input type="password" class="form-control" placeholder="Để trống nếu không đổi" />
            </div>

            <button type="button" class="btn btn-primary">
              Lưu thay đổi
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
