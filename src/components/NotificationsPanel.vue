<template>
  <div v-if="items.length" class="rounded-xl border bg-yellow-50 border-yellow-200 p-3 text-sm">
    <ul class="list-disc ml-4">
      <li v-for="n in items" :key="n.id" class="py-1">
        <strong>{{ n.type.toUpperCase() }}:</strong> {{ n.message }}
        <span class="text-gray-400 ml-2">({{ new Date(n.time).toLocaleTimeString() }})</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useNotifStore } from '../stores/notifikacije'

const notif = useNotifStore()
const { items } = storeToRefs(notif)
</script>