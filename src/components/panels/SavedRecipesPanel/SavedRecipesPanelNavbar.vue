<script setup lang="ts">
  import BaseInput from '@base/BaseInput.vue';
  import BaseButton from '@base/BaseButton.vue';
</script>

<template>
  <div class="saved-recipes-panel-navbar">
    <BaseInput input-label="Search"></BaseInput>
    <BaseButton button-name="IMPORT"></BaseButton>
    <BaseButton button-name="EXPORT"></BaseButton>
    <BaseButton button-name="RESET"></BaseButton>
  </div>
</template>

<style lang="postcss">
  .saved-recipes-panel-navbar {
    display: flex;
    column-gap: 24px;

    .base-button:last-of-type {
      margin-left: auto;
    }
  }
</style>
