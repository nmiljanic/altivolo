<template>
  <tr class="border-b last:border-0">
    <td class="py-2">{{ flight.id }}</td>
    <td>{{ flight.broj }}</td>
    <td>{{ flight.destinacija }}</td>
    <td>{{ flight.kompanija }}</td>
    <td>{{ flight.gate ?? '—' }}</td>
    <td>{{ flight.planirano }}</td>
    <td>
      <span :class="badgeClass">{{ flight.status }}</span>
    </td>
    <td>{{ flight.kasnjenje ? flight.kasnjenje + ' min' : '—' }}</td>
    <td>
      <RouterLink :to="`/flight/${flight.id}`" class="text-blue-600 hover:underline">Detalji</RouterLink>
    </td>
  </tr>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({ flight: { type: Object, required: true } })

const badgeClass = computed(() => {
  const base = 'px-2 py-0.5 rounded text-xs'
  switch (props.flight.status) {
    case 'Na vrijeme': return base + ' bg-green-100 text-green-700'
    case 'Kašnjenje': return base + ' bg-yellow-100 text-yellow-700'
    case 'Otkazan': return base + ' bg-red-100 text-red-700'
    default: return base + ' bg-gray-100 text-gray-700'
  }
})
</script>