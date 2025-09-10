<template>
  <section class="max-w-md mx-auto bg-white shadow rounded-xl p-6">
    <h2 class="text-lg font-semibold mb-4">Prijava</h2>
    <form @submit.prevent="login" class="space-y-3">
      <input v-model="email" type="email" placeholder="Email" class="w-full border rounded px-3 py-2" />
      <input v-model="password" type="password" placeholder="Lozinka" class="w-full border rounded px-3 py-2" />
      <button class="w-full bg-blue-600 text-white rounded px-3 py-2">Prijavi se</button>
    </form>
    <div class="text-xs text-gray-500 mt-2">
      Nemaš račun?
      <button class="text-blue-600 hover:underline" @click="register">Registriraj se</button>
    </div>
    <div class="mt-4">
      <button @click="google" class="w-full border rounded px-3 py-2">Prijava s Googleom</button>
    </div>
    <p v-if="auth.error" class="text-red-600 text-sm mt-3">{{ auth.error }}</p>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'

const auth = useAuthStore()
const email = ref('')
const password = ref('')

async function login() {
  try {
    await auth.loginEmail(email.value, password.value)
  } catch (e) {
    auth.error = e.message
  }
}
async function register() {
  try {
    await auth.registerEmail(email.value, password.value)
  } catch (e) {
    auth.error = e.message
  }
}
async function google() {
  try {
    await auth.loginGoogle()
  } catch (e) {
    auth.error = e.message
  }
}
</script>
