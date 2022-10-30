<script setup lang="ts">
  /// <reference types="vite-svg-loader" />

  import './assets/styles/main.pcss';
  import TheHeader from './components/TheHeader.vue';
  import SwappablePanel from './components/panels/SwappablePanel.vue';
  import ItemPanel from './components/panels/ItemPanel/ItemPanel.vue';
  import TheOverlay from './components/TheOverlay.vue';
</script>

<template>
  <TheHeader />

  <main class="panels-wrapper">
    <SwappablePanel />
    <ItemPanel />
  </main>

  <TheOverlay />
</template>

<style lang="postcss">
  .panels-wrapper {
    display: flex;
    flex: 1;
    flex-shrink: 0;
    overflow: auto;
    padding-top: 12px;
    column-gap: 32px;
  }
</style>
