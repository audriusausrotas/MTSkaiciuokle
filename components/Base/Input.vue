<script setup lang="ts">
const props = defineProps([
  "placeholder",
  "label",
  "type",
  "name",
  "width",
  "active",
  "variant",
  "disable",
]);
const emit = defineEmits(["onChange", "EnterPressed"]);

const emitUpdate = (value: string): void => {
  emit("onChange", value);
};

const inputRef = ref<HTMLInputElement | null>(null);

const handleEnterKey = (): void => {
  emit("EnterPressed");
};

onMounted(() => {
  if (props.active && inputRef.value) {
    inputRef.value.focus();
  }
});
</script>

<template>
  <div class="flex flex-col capitalize bg-white">
    <label v-if="props.label" :for="props.label" class="pl-2 pb-1 text-sm">{{
      props.label
    }}</label>

    <div
      class="flex items-center justify-center h-10 gap-3 px-4 overflow-auto border rounded-lg shadow-sm border-dark-light"
      :class="[
        props.width ? props.width : 'w-60',
        props.variant === 'light' ? 'bg-white' : 'bg-gray-ultra-light',
      ]">
      <slot />
      <input :value="props.name" :placeholder="props.placeholder" :id="props.label" :type="props.type || 'text'"
        :disabled="props.disable || false" @input="emitUpdate(($event.target as HTMLInputElement)?.value)"
        @keyup.enter="handleEnterKey" ref="inputRef" class="w-full h-full bg-inherit" />
    </div>
  </div>
</template>
<style scoped></style>
