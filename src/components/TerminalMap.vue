<template>
  <div class="w-full overflow-x-auto">
    <svg viewBox="0 0 600 300" class="w-full max-w-3xl">
      
      <rect x="20" y="20" width="560" height="260" fill="#f1f5f9" stroke="#94a3b8" />
     
      <rect x="40" y="40" width="240" height="220" fill="#e2e8f0" />
      <text x="50" y="60" font-size="12">Check-in</text>

      <rect x="300" y="40" width="120" height="220" fill="#e2e8f0" />
      <text x="310" y="60" font-size="12">Carina/Security</text>

      <rect x="430" y="40" width="130" height="220" fill="#e2e8f0" />
      <text x="440" y="60" font-size="12">Gateovi</text>

      
      <g v-for="(gate, idx) in gates" :key="gate.id">
        <circle :cx="450" :cy="90 + idx * 40" r="10" fill="#93c5fd" />
        <text :x="468" :y="95 + idx * 40" font-size="12">{{ gate.name }}</text>
      </g>
    </svg>
  </div>
</template>

<script setup>
const gates = [
  { id: 1, name: 'A1' },
  { id: 2, name: 'B2' },
  { id: 3, name: 'C1' },
  { id: 4, name: 'D4' },
]
</script>