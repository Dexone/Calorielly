<template>
  <button class="ui-button">
    {{ text }}
  </button>
</template>

<script setup lang="ts">
defineProps({ text: { type: String } })
</script>

<style scoped lang="scss">
.ui-button {
  background-color: #007aff;
  border: none;
  border-radius: 7px;
  color: white;
  font-size: 15px;
  font-weight: 600;
  height: 40px;
  margin-top: 20px;
  transition: 0.3s;
  width: 100%;

  &:hover {
    background-color: #439eff;
    cursor: pointer;
    transition: 0.3s;
  }
}
</style>
