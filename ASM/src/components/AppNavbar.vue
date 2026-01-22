<script setup>
import { useAuthStore } from '../stores/auth.store'
const auth = useAuthStore()
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-dark border-bottom" data-bs-theme="dark">
    <div class="container">
      <RouterLink class="navbar-brand fw-bold" to="/">BlogVue</RouterLink>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="menu">
        <ul class="navbar-nav me-auto">
          <li class="nav-item"><RouterLink class="nav-link" to="/">Trang chủ</RouterLink></li>
          <li class="nav-item"><RouterLink class="nav-link" to="/profile">Trang cá nhân</RouterLink></li>
        </ul>

        <div class="d-flex gap-2 align-items-center">
          <template v-if="!auth.isAuthenticated">
            <button class="btn btn-outline-info btn-sm" @click="auth.loginFake()">
              Đăng nhập (demo)
            </button>

            <RouterLink class="btn btn-outline-primary btn-sm" to="/login">
              Đăng nhập
            </RouterLink>

            <RouterLink class="btn btn-primary btn-sm" to="/register">
              Đăng ký
            </RouterLink>
          </template>

          <template v-else>
            <span class="text-white-50 small me-2">
              Xin chào, <b class="text-white">{{ auth.user?.name }}</b>
            </span>
            <button class="btn btn-outline-danger btn-sm" @click="auth.logout()">
              Đăng xuất
            </button>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>
