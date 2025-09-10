<template>
  <div class="flex items-center gap-3 text-sm">
    <template v-if="auth.ready">
      <template v-if="auth.isLogged">
        <span class="text-white/90">Prijavljen: {{ auth.user.email }} ({{ auth.role }})</span>
        <button class="bg-white text-blue-600 rounded px-2 py-1" @click="auth.logout()">Odjava</button>
      </template>
      <template v-else>
        <RouterLink to="/login" class="bg-white text-blue-600 rounded px-2 py-1">Prijava</RouterLink>
      </template>
    </template>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useAuthStore } from '../stores/auth'
import { RouterLink } from 'vue-router'
const auth = useAuthStore()
onMounted(() => auth.init())
</script>
