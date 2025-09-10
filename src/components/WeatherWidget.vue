<template>
  <div class="text-sm">
    <div class="flex items-center gap-3 mb-2">
      <input v-model="loc" placeholder="Lokacija (npr. Pula)" class="border rounded px-2 py-1" />
      <button @click="load" class="px-3 py-1.5 rounded-lg border">Dohvati</button>
    </div>
    <div v-if="loading" class="text-gray-500">Učitavanje...</div>
    <div v-else class="grid grid-cols-2 sm:grid-cols-4 gap-3">
      <div class="p-3 rounded bg-gray-50">
        <div class="text-xs text-gray-500">Temp</div>
        <div class="text-lg">{{ data.temp }} °C</div>
      </div>
      <div class="p-3 rounded bg-gray-50">
        <div class="text-xs text-gray-500">Vjetar</div>
        <div class="text-lg">{{ data.wind }} m/s</div>
      </div>
      <div class="p-3 rounded bg-gray-50">
        <div class="text-xs text-gray-500">Vlažnost</div>
        <div class="text-lg">{{ data.humidity }} %</div>
      </div>
      <div class="p-3 rounded bg-gray-50">
        <div class="text-xs text-gray-500">Opis</div>
        <div class="text-lg">{{ data.summary }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useVrijemeStore } from '../stores/vrijeme'

const props = defineProps({ location: { type: String, default: 'Pula' } })
const vrijeme = useVrijemeStore()
const loc = ref(props.location)
const loading = ref(false)
const data = ref({ temp: '-', wind: '-', humidity: '-', summary: '-' })

async function load() {
  loading.value = true
  data.value = await vrijeme.getWeather(loc.value)
  loading.value = false
}

watch(() => props.location, v => { loc.value = v; load() })
load()
</script>