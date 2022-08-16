<script setup lang="ts">
  import { IBaseButtonProps } from '@types';

  const props = withDefaults(defineProps<IBaseButtonProps>(), {
    buttonName: 'PLACEHOLDER',
    callback: () => {
      console.warn('No callback provided');
    },
  });
</script>

<template>
  <button class="base-button" @click="props.callback()">
    {{ props.buttonName }}
  </button>
</template>

<style lang="postcss">
  .base-button {
    padding: 10px 28px;
    color: hsl(var(--color-cc-white));
    background-color: hsl(var(--color-cc-blue-50));
    border-radius: 4px;
    font-size: 14px;
    line-height: 19px;
    font-family: 'Open Sans';
    letter-spacing: 1.25px;
    font-weight: 500;
    transition: background-color 0.2s;
    text-transform: uppercase;
    outline: none;
    border: none;

    &:hover {
      cursor: pointer;
      background-color: hsl(var(--color-cc-blue-40));
    }

    &:active {
      background-color: hsl(var(--color-cc-blue-60));
      transition: background-color 0.15s;
    }
  }
</style>
