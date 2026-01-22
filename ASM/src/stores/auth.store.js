import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') || '',
    user: JSON.parse(localStorage.getItem('user') || 'null'),
  }),
  getters: {
    isAuthenticated: (s) => !!s.token,
  },
  actions: {
    // ✅ ĐĂNG KÝ THẬT (lưu vào localStorage)
    register({ name, email, password }) {
      const users = JSON.parse(localStorage.getItem('users') || '[]')
      const existed = users.some((u) => u.email === email)
      if (existed) throw new Error('Email đã tồn tại')

      users.push({ id: Date.now(), name, email, password })
      localStorage.setItem('users', JSON.stringify(users))
    },

    // ✅ ĐĂNG NHẬP THẬT
    login({ email, password }) {
      const users = JSON.parse(localStorage.getItem('users') || '[]')
      const found = users.find((u) => u.email === email && u.password === password)
      if (!found) throw new Error('Sai email hoặc mật khẩu')

      this.token = 'token-' + Date.now()
      this.user = { id: found.id, name: found.name, email: found.email }
      localStorage.setItem('token', this.token)
      localStorage.setItem('user', JSON.stringify(this.user))
    },

    // ✅ ĐĂNG NHẬP DEMO (GIỮ NGUYÊN)
    loginFake() {
      this.token = 'demo-token'
      this.user = { id: 1, name: 'Huế (Demo)', email: 'demo@gmail.com' }
      localStorage.setItem('token', this.token)
      localStorage.setItem('user', JSON.stringify(this.user))
    },

    logout() {
      this.token = ''
      this.user = null
      localStorage.removeItem('token')
      localStorage.removeItem('user')
    },
  },
})
