<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth.store'

const auth = useAuthStore()
const router = useRouter()

const name = ref('')
const email = ref('')
const password = ref('')
const confirm = ref('')
const error = ref('')

function submit() {
  error.value = ''

  if (password.value !== confirm.value) {
    error.value = 'Mật khẩu nhập lại không khớp'
    return
  }

  try {
    auth.register({ name: name.value, email: email.value, password: password.value })
    router.push('/login')
  } catch (e) {
    error.value = e?.message || 'Đăng ký thất bại'
  }
}
</script>

<template>
  <div class="container py-4" style="max-width: 560px;">
    <h3 class="mb-3">Đăng ký tài khoản</h3>

    <div v-if="error" class="alert alert-danger">{{ error }}</div>

    <form class="card card-body" @submit.prevent="submit">
      <div class="mb-3">
        <label class="form-label">Họ và tên</label>
        <input v-model.trim="name" class="form-control" placeholder="Nhập họ tên..." required />
      </div>

      <div class="mb-3">
        <label class="form-label">Email</label>
        <input v-model.trim="email" type="email" class="form-control" placeholder="example@gmail.com" required />
      </div>

      <div class="mb-3">
        <label class="form-label">Mật khẩu</label>
        <input v-model="password" type="password" class="form-control" placeholder="Tối thiểu 6 ký tự" required />
      </div>

      <div class="mb-3">
        <label class="form-label">Nhập lại mật khẩu</label>
        <input v-model="confirm" type="password" class="form-control" placeholder="Nhập lại mật khẩu" required />
      </div>

      <button class="btn btn-primary w-100" type="submit">
        Tạo tài khoản
      </button>

      <div class="text-center mt-3">
        Đã có tài khoản? <RouterLink to="/login">Đăng nhập</RouterLink>
      </div>
    </form>
  </div>
</template>
