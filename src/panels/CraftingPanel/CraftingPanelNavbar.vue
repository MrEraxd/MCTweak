<script setup lang="ts">
  import BaseDropdown from '../../components/Base/BaseDropdown.vue';
  import BaseButton from '../../components/Base/BaseButton.vue';

  const craftingOptions = ['a', 'b', 'c', 'd', 'f'];
  const callback = (newValue: string) => {
    console.log('New value: ', newValue);
  };
</script>

<template>
  <div class="crafting-panel-navbar">
    <BaseDropdown
      :options="craftingOptions"
      :callback="callback"
      dropdown-label="crafting name"
    ></BaseDropdown>

    <BaseButton button-name="Add custom"></BaseButton>
  </div>
</template>

<style lang="postcss">
  .crafting-panel-navbar {
    display: flex;
    column-gap: 32px;
  }
</style>
