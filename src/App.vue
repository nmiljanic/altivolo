<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-blue-600 text-white">
      <div class="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 class="text-xl font-semibold">Altivolo – Letovi Pula</h1>
        <div class="flex items-center gap-6">
          <nav class="flex gap-4 text-sm">
            <RouterLink to="/" class="hover:underline">Početna</RouterLink>
            <RouterLink to="/arrivals" class="hover:underline">Dolazni</RouterLink>
            <RouterLink to="/departures" class="hover:underline">Odlazni</RouterLink>
            <RouterLink to="/baggage" class="hover:underline">Prtljaga</RouterLink>
            <RouterLink to="/terminal-map" class="hover:underline">Karta terminala</RouterLink>
            <RouterLink to="/weather" class="hover:underline">Vrijeme</RouterLink>

            
            <RouterLink
              v-if="auth.ready && auth.isAdmin"
              to="/admin"
              class="hover:underline text-yellow-300 font-semibold"
            >
              Admin panel
            </RouterLink>
          </nav>

          <AuthBar />
        </div>
      </div>
    </header>

    <main class="container mx-auto px-4 py-6 flex-1">
      <NotificationsPanel class="mb-4" />
      <RouterView />
    </main>

    <footer class="border-t bg-white">
      <div class="container mx-auto px-4 py-4 text-xs text-gray-500">
        © {{ new Date().getFullYear() }} Altivolo. Ne službeni podaci.
      </div>
    </footer>
  </div>
</template>

<script setup>
import NotificationsPanel from './components/NotificationsPanel.vue'
import AuthBar from './components/AuthBar.vue'
import { RouterLink, RouterView } from 'vue-router'


import { onMounted } from 'vue'
import { useAuthStore } from './stores/auth'
const auth = useAuthStore()
onMounted(() => auth.init())
</script>
