import { defineStore } from 'pinia'

export const useVrijemeStore = defineStore('vrijeme', {
  actions: {
    async getWeather(location) {

      await new Promise(r => setTimeout(r, 300))
      const seed = location.toLowerCase().charCodeAt(0) % 10
      return {
        temp: (18 + seed).toFixed(1),
        wind: (2 + seed / 3).toFixed(1),
        humidity: 55 + seed,
        summary: ['Vedro', 'Sunčano', 'Naoblaka', 'Kiša'][seed % 4]
      }
    }
  }
})