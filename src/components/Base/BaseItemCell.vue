<script setup lang="ts"></script>

<template>
  <div class="base-item-cell">
    <div class="base-item-cell__content"></div>
  </div>
</template>

<style lang="postcss">
  .base-item-cell {
    display: flex;
    width: 100%;
    aspect-ratio: 1;
    background-color: hsl(var(--color-cc-black));
    transition: outline-color 0.2s;
    outline: 1px solid transparent;
    justify-content: center;
    align-items: center;
    padding: 4px;

    &:hover {
      outline-color: hsl(var(--color-cc-blue-50)) !important;
      cursor: pointer;
    }
  }
</style>
