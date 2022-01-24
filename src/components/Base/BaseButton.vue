<script setup lang="ts">
  interface Props {
    buttonName: string;
  }

  const props = withDefaults(defineProps<Props>(), {
    buttonName: 'PLACEHOLDER',
  });
</script>

<template>
  <button class="base-button">{{ props.buttonName }}</button>
</template>

<style lang="postcss">
  .base-button {
    padding: 12px 28px;
    color: var(--cc-white);
    background-color: var(--cc-blue--500);
    border-radius: 2px;
    font-size: var(--button);
    letter-spacing: 1.25px;
    font-weight: 500;
    transition: background-color 0.2s;

    &:hover {
      cursor: pointer;
      background-color: var(--cc-blue--400);
    }

    &:active {
      background-color: var(--cc-blue--600);
      transition: background-color 0.15s;
    }
  }
</style>
