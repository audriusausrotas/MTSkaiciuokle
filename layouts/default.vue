<script setup lang="ts">
const useUser = useUserStore();
</script>

<template>
  <NavMain v-if="useUser?.user" class="print:hidden" />
  <div class="px-4 py-10 flex justify-center max-w-[1200px] m-auto">
    <slot />
  </div>
</template>
<style scoped></style>
