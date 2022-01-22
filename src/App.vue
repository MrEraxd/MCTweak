<script setup lang="ts">
  /// <reference types="vite-svg-loader" />

  import './assets/styles/main.pcss';
  import TheHeader from './components/TheHeader.vue';
  import SwappablePanel from './panels/SwappablePanel.vue';
  import ItemPanel from './panels/ItemPanel/ItemPanel.vue';
</script>

<template>
  <TheHeader></TheHeader>

  <div class="panels-wrapper">
    <SwappablePanel></SwappablePanel>
    <ItemPanel></ItemPanel>
  </div>
</template>

<style lang="postcss">
  .panels-wrapper {
    display: flex;
  }
</style>
