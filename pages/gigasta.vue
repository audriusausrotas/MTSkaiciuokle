<script setup lang="ts">
const gates = useGateStore();
const { setError, setIsError } = useError();

const buttonHandler = async (id: string) => {
  const response: any = await $fetch(
    "/api/gates",
    {
      method: "patch",
      body: { _id: id, provider: "Gigasta" },
    }
  );
  if (response.success) {
    gates.removeGates(id)
    setIsError(false);
    setError(response.message);
  } else {
    setError(response.message);
  }
}
</script>

<template>
  <div class="flex flex-col gap-12">
    <div v-for="(gate, index) in gates.gates.gigasta" :key="gate._id" class="flex flex-col border-b-8 border-red-full">
      <div class="flex justify-between font-semibold border-b border-red-300 py-4">
        <div class="flex flex-col gap-4 justify-between">
          <h3 class="text-xl">Užsakymo duomenys</h3>
          <BaseInput :name="index + 1" width="w-72" label="Užsakymo nr:" :disable="true" />
          <BaseInput :name="gate.dateCreated.slice(0, 10)" width="w-72" label="užsakymo data:" :disable="true" />
          <BaseButtonWithConfirmation name="užsakymas baigtas" @onConfirm="buttonHandler(gate._id)" />
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="text-xl">Klento duomenys</h3>
          <BaseInput :name="gate.client.username" width="w-72" label="klientas" :disable="true" />
          <BaseInput :name="gate.client.address" width="w-72" label="adresas" :disable="true" />
          <BaseInput :name="gate.client.phone" width="w-72" label="telefonas" :disable="true" />
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="text-xl">Vadybininko duomenys</h3>
          <BaseInput :name="gate.creator.username" width="w-72" label="atsakingas asmuo" :disable="true" />
          <BaseInput :name="gate.creator.phone" width="w-72" label="Telefono numeris" :disable="true" />
          <BaseInput :name="gate.creator.email" width="w-72" label="Elektroninis paštas" :disable="true" />
        </div>
      </div>
      <div v-for="(g, i) in gate.gates" :key="g._id" class="flex flex-col pb-4 border-b border-red-300">
        <div class="flex gap-4  flex-wrap py-4 items-center">
          <div class="font-medium text-xl">{{ i + 1 }}</div>
          <BaseInput :name="g.type" width="w-28" label="vartų tipas" :disable="true" />

          <BaseInput :name="g.color" width="w-28" label="vartų spalva" :disable="true" />

          <BaseInput :name="g.width" width="w-28" label="vartų ilgis" :disable="true" />

          <BaseInput :name="g.height" width="w-28" label="vartų aukštis" :disable="true" />

          <BaseInput :name="g.filling" width="w-40" label="vartų užpildas" :disable="true" />

          <BaseInput v-if="g.auto" :name="g.auto" width="w-28" label="automatika" :disable="true" />

          <BaseInput v-if="g.direction" :name="g.direction" width="w-36" label=" atidarymo kryptis" :disable="true" />

          <BaseInput v-if="g.lock" :name="g.lock" width="w-40" label="spyna" :disable="true" />

        </div>
        <div v-if="g.aditional !== ''" class="flex gap-4 text-lg pl-7">
          <p class="font-bold">papildoma informacija:</p>
          <p>
            {{ g.aditional }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
