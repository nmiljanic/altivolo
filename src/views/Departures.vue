<template>
  <section class="bg-white shadow rounded-xl p-4">
    <h2 class="text-lg font-semibold mb-3">Odlazni letovi</h2>
    <SearchBar class="mb-4" v-model="query" />
    <FlightTable type="odlazni" :query="query" />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import SearchBar from '../components/SearchBar.vue'
import FlightTable from '../components/FlightTable.vue'

const query = ref('')
</script>