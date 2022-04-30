<script setup lang="ts">
  /// <reference types="vite-svg-loader" />

  import './assets/styles/main.pcss';
  import TheHeader from './components/TheHeader.vue';
  import SwappablePanel from './panels/SwappablePanel.vue';
  import ItemPanel from './panels/ItemPanel/ItemPanel.vue';
</script>

<template>
  <TheHeader></TheHeader>

  <main class="panels-wrapper">
    <SwappablePanel></SwappablePanel>
    <ItemPanel></ItemPanel>
  </main>
</template>

<style lang="postcss">
  .panels-wrapper {
    display: flex;
    flex: 1;
    flex-shrink: 0;
    overflow: auto;
    padding-top: 12px;
  }
</style>
