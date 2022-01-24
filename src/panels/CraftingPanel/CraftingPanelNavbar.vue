<script setup lang="ts">
  import BaseDropdown from '../../components/Base/BaseDropdown.vue';
  import BaseButton from '../../components/Base/BaseButton.vue';
</script>

<template>
  <div class="crafting-panel-navbar">
    <BaseDropdown></BaseDropdown>
    <BaseButton button-name="Add custom"></BaseButton>
  </div>
</template>

<style lang="postcss">
  .crafting-panel-navbar {
    display: flex;
    column-gap: 32px;
  }
</style>
