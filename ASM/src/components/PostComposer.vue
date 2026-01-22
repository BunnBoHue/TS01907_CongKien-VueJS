<script setup>
import { useAuthStore } from '../stores/auth.store'
const auth = useAuthStore()
</script>

<template>
  <div class="py-3 border-bottom bg-dark" data-bs-theme="dark">
    <div class="container">
      <div class="d-flex align-items-center gap-3 bg-secondary bg-opacity-25 rounded-pill px-3 py-2">
        <img
          src="/vite.svg"
          alt="avatar"
          class="rounded-circle"
          style="width:40px;height:40px;object-fit:cover"
        />

        <!-- ĐÃ LOGIN: hiện input -->
        <input
          v-if="auth.isAuthenticated"
          class="form-control border-0 bg-transparent text-white"
          style="box-shadow:none"
          placeholder="Huế ơi, bạn đang nghĩ gì thế?"
        />

        <!-- CHƯA LOGIN: nhắc -->
        <div v-else class="text-white-50 flex-grow-1">
          Bạn cần đăng nhập để đăng bài viết.
        </div>

        <div class="d-flex gap-2 align-items-center">
          <button class="btn btn-sm btn-success" type="button" :disabled="!auth.isAuthenticated">
            Đăng
          </button>
          <button class="btn btn-sm btn-danger" type="button" :disabled="!auth.isAuthenticated">🎥</button>
          <button class="btn btn-sm btn-success" type="button" :disabled="!auth.isAuthenticated">🖼️</button>
          <button class="btn btn-sm btn-warning" type="button" :disabled="!auth.isAuthenticated">🙂</button>
        </div>
      </div>
    </div>
  </div>
</template>
