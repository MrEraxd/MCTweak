<script setup lang="ts">
  const options = [
    {
      value: '1',
      label: 'Do nothing',
    },
    {
      value: '2',
      label: 'Remove exported',
    },
    {
      value: '3',
      label: 'Remove all',
    },
  ];
</script>

<template>
  <div class="export-saved-recipes-modal">
    <div class="export-saved-recipes-modal__left-column">
      <BaseDropdown dropdown-label="AFter export" :options="options" />
      <BaseInput input-label="filename" />
      <BaseButton button-name="EXPORT" />
    </div>
    <div class="export-saved-recipes-modal__right-column">
      <BaseCheckbox checkbox-label="Add comments" />
      <BaseCheckbox checkbox-label="Minify" />
    </div>
  </div>
</template>

<style lang="postcss">
  .export-saved-recipes-modal {
    display: flex;
    column-gap: 48px;

    &__left-column {
      display: flex;
      flex-flow: column;
      row-gap: 28px;
      align-items: flex-start;
    }

    &__right-column {
      display: flex;
      flex-flow: column;
      row-gap: 16px;
    }
  }
</style>
