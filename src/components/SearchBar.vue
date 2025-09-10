<template>
  <div class="flex items-center gap-2">
    <input
      v-model="model"
      type="text"
      placeholder="Broj leta, destinacija ili kompanija"
      class="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring focus:border-blue-300"
    />
    <button @click="$emit('search', model)" class="px-3 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700">Traži</button>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: { type: String, default: '' }
})
const emit = defineEmits(['update:modelValue', 'search'])
const model = computed({
  get: () => props.modelValue,
  set: v => emit('update:modelValue', v)
})
</script>