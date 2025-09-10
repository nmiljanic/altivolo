<template>
  <section class="bg-white shadow rounded-xl p-6">
    <h2 class="text-lg font-semibold mb-4">Admin panel</h2>
    <p class="text-sm text-gray-500 mb-4">
      Ovdje admin može uređivati ili brisati letove.
    </p>

    <table class="w-full text-sm">
      <thead>
        <tr class="border-b text-left">
          <th>#</th>
          <th>Let</th>
          <th>Destinacija</th>
          <th>Gate</th>
          <th>Status</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="f in flights" :key="f.id" class="border-b">
          <td>{{ f.id }}</td>
          <td>{{ f.broj }}</td>
          <td>{{ f.destinacija }}</td>
          <td>
            <input v-model="f.gate" class="border rounded px-2 py-1 w-20" />
          </td>
          <td>
            <select v-model="f.status" class="border rounded px-2 py-1">
              <option>Na vrijeme</option>
              <option>Kašnjenje</option>
              <option>Otkazan</option>
            </select>
          </td>
          <td>
            <button @click="saveFlight(f)" class="text-blue-600">Spremi</button>
            <button @click="deleteFlight(f.id)" class="text-red-600 ml-2">Obriši</button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useLetoviStore } from '../stores/letovi'
import { db } from '../firebase'
import { doc, setDoc, deleteDoc } from 'firebase/firestore'


const letovi = useLetoviStore()
const flights = computed(() => [...letovi.dolazni, ...letovi.odlazni])


async function saveFlight(f) {
  await setDoc(doc(db, 'flights', String(f.id)), f)
}


async function deleteFlight(id) {
  await deleteDoc(doc(db, 'flights', String(id)))
}
</script>
