<template>
  <div class="row justify-content-center">
    <div class="col-12 col-md-7 col-lg-5">
      <h3 class="mb-3">Đăng nhập</h3>

      <form class="card card-body">
        <div class="mb-3">
          <label class="form-label">Email</label>
          <input type="email" class="form-control" placeholder="example@gmail.com" />
        </div>

        <div class="mb-3">
          <label class="form-label">Mật khẩu</label>
          <input type="password" class="form-control" placeholder="Nhập mật khẩu" />
        </div>

        <div class="d-flex justify-content-between align-items-center mb-3">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="remember" />
            <label class="form-check-label" for="remember">Ghi nhớ</label>
          </div>
          <a href="#" class="small text-decoration-none">Quên mật khẩu?</a>
        </div>

        <button type="button" class="btn btn-primary w-100">
          Đăng nhập
        </button>

        <div class="text-center mt-3">
          Chưa có tài khoản?
          <RouterLink to="/register">Đăng ký</RouterLink>
        </div>
      </form>
    </div>
  </div>
</template>
