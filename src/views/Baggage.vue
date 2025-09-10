<template>
  <section class="bg-white shadow rounded-xl p-4">
    <h2 class="text-lg font-semibold mb-3">Praćenje prtljage</h2>
    <table class="w-full text-sm">
      <thead>
        <tr class="text-left border-b">
          <th class="py-2">Let</th>
          <th>Oznaka</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="b in prtljaga.lista" :key="b.id" class="border-b last:border-0">
          <td class="py-2">{{ b.brojLeta }}</td>
          <td>{{ b.oznaka }}</td>
          <td>{{ b.status }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script setup>
import { usePrtljagaStore } from '../stores/prtljaga'
const prtljaga = usePrtljagaStore()
</script>