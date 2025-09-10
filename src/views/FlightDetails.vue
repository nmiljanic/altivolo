<template>
  <section v-if="flight" class="bg-white shadow rounded-xl p-4">
    <h2 class="text-lg font-semibold mb-3">Let {{ flight.broj }} → {{ flight.destinacija }}</h2>
    <div class="grid sm:grid-cols-2 gap-4 text-sm">
      <div>
        <p><span class="font-semibold">Aviokompanija:</span> {{ flight.kompanija }}</p>
        <p><span class="font-semibold">Gate:</span> {{ flight.gate ?? 'TBA' }}</p>
        <p><span class="font-semibold">Status:</span> {{ flight.status }}</p>
        <p><span class="font-semibold">Planirano:</span> {{ flight.planirano }}</p>
        <p v-if="flight.kasnjenje"><span class="font-semibold">Kašnjenje:</span> {{ flight.kasnjenje }} min</p>
      </div>
      <div>
        <p class="font-semibold mb-1">Prtljaga</p>
        <p>Status: {{ baggageStatus }}</p>
      </div>
    </div>
  </section>
  <section v-else class="text-gray-500">Let nije pronađen.</section>
</template>

<script setup>
import { computed } from 'vue'
import { useLetoviStore } from '../stores/letovi'
import { usePrtljagaStore } from '../stores/prtljaga'
import { useRoute } from 'vue-router'

const route = useRoute()
const letovi = useLetoviStore()
const prtljaga = usePrtljagaStore()

const flightId = Number(route.params.id)
const flight = computed(() => letovi.getById(flightId))
const baggageStatus = computed(() => prtljaga.statusByFlightId(flightId) ?? 'N/A')
</script>