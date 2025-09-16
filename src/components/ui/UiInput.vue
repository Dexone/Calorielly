<template>
  <input
    class="ui-input"
    :value="modelValue ?? ''"
    @input="onInput"
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: string | number | null
  modelModifiers?: { number?: boolean; trim?: boolean }
}>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
  (e: 'input', ev: Event): void
}>()

function onInput(e: Event) {
  let val: string | number = (e.target as HTMLInputElement).value

  if (props.modelModifiers?.trim) {
    val = (val as string).trim()
  }

  if (props.modelModifiers?.number) {
    const n = parseFloat(val as string)
    if (!Number.isNaN(n)) val = n
  }

  emit('update:modelValue', val)
  emit('input', e)
}
</script>
<style scoped lang="scss">
.ui-input {
  background-color: #f2f2f2;
  border: solid;
  border-color: #c7c7c7;
  border-radius: 7px;
  border-width: 1px;
  font-size: 15px;
  font-weight: 600;
  height: 40px;
  padding-left: 7px;
  width: 100%;

  &::placeholder {
    font-size: 15px;
    font-weight: 600;
  }

  &:focus {
    border: 1px solid #007aff;
    outline: none;
  }
}
</style>
