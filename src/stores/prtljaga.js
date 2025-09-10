import { defineStore } from 'pinia'

export const usePrtljagaStore = defineStore('prtljaga', {
  state: () => ({
    lista: [
      { id: 1, flightId: 1, brojLeta: 'PU123', oznaka: 'BAG-001', status: 'Zaprimljena' },
      { id: 2, flightId: 2, brojLeta: 'PU456', oznaka: 'BAG-002', status: 'U dolasku' },
      { id: 3, flightId: 4, brojLeta: 'PU321', oznaka: 'BAG-003', status: 'Izgubljena' },
    ]
  }),
  actions: {
    updateStatus(id, status) {
      const i = this.lista.find(b => b.id === id)
      if (i) i.status = status
    }
  },
  getters: {
    statusByFlightId: (s) => (flightId) => s.lista.find(b => b.flightId === flightId)?.status
  }
})