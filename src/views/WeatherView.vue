<template>
  <section class="grid md:grid-cols-2 gap-6">
    <div class="bg-white shadow rounded-xl p-4">
      <h2 class="text-lg font-semibold mb-3">Vrijeme – Pula</h2>
      <WeatherWidget location="Pula" />
    </div>
    <div class="bg-white shadow rounded-xl p-4">
      <h2 class="text-lg font-semibold mb-3">Vrijeme – Odredište (odaberi let)</h2>
      <div class="mb-3 text-sm text-gray-500">Klikni na let u tablici da vidiš vrijeme na odredištu.</div>
      <FlightTable />
    </div>
  </section>
</template>

<script setup>
import WeatherWidget from '../components/WeatherWidget.vue'
import FlightTable from '../components/FlightTable.vue'
</script>