import type { GateObject, GateSchema, Gate } from "~/data/interfaces";

export const useGateStore = defineStore("gate", {
  state: () => ({
    gates: {} as GateObject,
  }),

  actions: {
    addGates(data: GateObject) {
      this.gates = { ...data };
    },
    async getGates() {
      const { data: gates }: any = await useFetch("/api/gates");
      if (gates.value.success) {
        this.gates = { ...gates.value.data };
      }
    },
    removeGates(id: string) {
      if (this.gates.vartonas.some((item) => item._id === id)) {
        this.gates.vartonas = this.gates.vartonas.filter(
          (item) => item._id !== id
        );
      }
      if (this.gates.gigasta.some((item) => item._id === id)) {
        this.gates.gigasta = this.gates.gigasta.filter(
          (item) => item._id !== id
        );
      }
    },
    addGate(data: GateSchema, value: string) {
      if (value === "vartonas") this.gates.vartonas.push(data);
      else if (value === "gigasta") this.gates.gigasta.push(data);
    },
  },

  getters: {},
});
