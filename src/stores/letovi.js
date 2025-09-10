import { defineStore } from 'pinia'
import { useNotifStore } from './notifikacije'

export const useLetoviStore = defineStore('letovi', {
  state: () => ({
    dolazni: [
      { id: 1, broj: 'PU123', destinacija: 'Zagreb', kompanija: 'Croatia Airlines', status: 'Na vrijeme', gate: 'A1', planirano: '14:30', kasnjenje: null },
      { id: 2, broj: 'PU456', destinacija: 'Split', kompanija: 'Croatia Airlines', status: 'Kašnjenje', gate: 'B2', planirano: '15:10', kasnjenje: 25 },
    ],
    odlazni: [
      { id: 3, broj: 'PU789', destinacija: 'Rim', kompanija: 'Ryanair', status: 'Na vrijeme', gate: 'C1', planirano: '16:45', kasnjenje: null },
      { id: 4, broj: 'PU321', destinacija: 'London', kompanija: 'easyJet', status: 'Otkazan', gate: 'D4', planirano: '17:20', kasnjenje: null },
    ],
  }),
  getters: {
    getById: (state) => (id) => {
      return [...state.dolazni, ...state.odlazni].find(f => f.id === id)
    },
  },
  actions: {
    refresh() {
      const notif = useNotifStore()
      notif.push({ type: 'info', message: 'Podaci osvježeni.' })
    },
    simulateDelay() {
      const all = [...this.dolazni, ...this.odlazni]
      const target = all[Math.floor(Math.random() * all.length)]
      const delay = [10, 15, 20, 30, 45][Math.floor(Math.random() * 5)]
      target.status = 'Kašnjenje'
      target.kasnjenje = delay
      const notif = useNotifStore()
      notif.push({ type: 'warning', message: `Let ${target.broj} kasni ${delay} min (gate ${target.gate}).` })
    },
    changeGate(id, newGate) {
      const f = this.getById(id)
      if (!f) return
      f.gate = newGate
      const notif = useNotifStore()
      notif.push({ type: 'info', message: `Promjena gatea za let ${f.broj}: ${newGate}` })
    },
    cancelFlight(id) {
      const f = this.getById(id)
      if (!f) return
      f.status = 'Otkazan'
      f.kasnjenje = null
      const notif = useNotifStore()
      notif.push({ type: 'error', message: `Let ${f.broj} je otkazan.` })
    }
  }
})