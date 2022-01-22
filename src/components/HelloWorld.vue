<script setup lang="ts">
  let count: number;
</script>

<template>
  <h1>{{ Math.pow(count, count) }}</h1>

  <p>
    <a v-if="true === true" href="https://code.visualstudio.com/">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <div>
    <p>See <code>README.md</code> for more information</p>
  </div>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>

  <div>
    <div>
      <code>components/HelloWorld.vue</code> to test hot module replacement.
    </div>
  </div>
</template>

<style lang="postcss"></style>
