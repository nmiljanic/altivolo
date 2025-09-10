<template>
  <section class="grid md:grid-cols-2 gap-6">
    <div class="bg-white shadow rounded-xl p-4">
      <h2 class="text-lg font-semibold mb-3">Brza pretraga</h2>
      <SearchBar @search="q => search = q" />
      <div class="mt-4 text-sm text-gray-500">Upiši broj leta, destinaciju ili aviokompaniju.</div>
    </div>

    <div class="bg-white shadow rounded-xl p-4">
      <h2 class="text-lg font-semibold mb-3">Vrijeme</h2>
      <WeatherWidget />
    </div>

    <div class="md:col-span-2 bg-white shadow rounded-xl p-4">
      <h2 class="text-lg font-semibold mb-3">Letovi danas</h2>
      <FlightTable :query="search" />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import FlightTable from '../components/FlightTable.vue'
import SearchBar from '../components/SearchBar.vue'
import WeatherWidget from '../components/WeatherWidget.vue'

const search = ref('')
</script>