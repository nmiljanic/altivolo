<template>
  <div>
    <div class="flex items-center justify-between mb-3 text-sm">
      <div class="text-gray-500">Prikaz: <span class="font-semibold">{{ label }}</span></div>
      <div class="flex items-center gap-2">
        <button @click="refresh" class="px-3 py-1.5 rounded-lg border">Osvježi</button>
        <button @click="simulateUpdate" class="px-3 py-1.5 rounded-lg border">Simuliraj kašnjenje</button>
      </div>
    </div>

    <div class="overflow-x-auto">
      <table class="w-full text-sm">
        <thead>
          <tr class="text-left border-b">
            <th class="py-2">#</th>
            <th>Let</th>
            <th>Destinacija</th>
            <th>Kompanija</th>
            <th>Gate</th>
            <th>Planirano</th>
            <th>Status</th>
            <th>Kašnjenje</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <FlightRow
            v-for="f in filtered"
            :key="f.id"
            :flight="f"
          />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useLetoviStore } from '../stores/letovi'
import FlightRow from './FlightRow.vue'

const props = defineProps({
  type: { type: String, default: 'all' },
  query: { type: String, default: '' }
})

const store = useLetoviStore()
const label = computed(() => props.type === 'dolazni' ? 'Dolazni' : props.type === 'odlazni' ? 'Odlazni' : 'Svi')

const filtered = computed(() => {
  const q = props.query.trim().toLowerCase()
  let data = props.type === 'dolazni' ? store.dolazni : props.type === 'odlazni' ? store.odlazni : [...store.dolazni, ...store.odlazni]
  if (!q) return data
  return data.filter(f =>
    f.broj.toLowerCase().includes(q) ||
    f.destinacija.toLowerCase().includes(q) ||
    (f.kompanija?.toLowerCase() || '').includes(q)
  )
})

function refresh() {
  store.refresh()
}
function simulateUpdate() {
  store.simulateDelay()
}
</script>