<script setup lang="ts">
  import { useCraftingPanelStore } from '@stores/craftingPanelStore';

  const craftingPanelStore = useCraftingPanelStore();

  const emit = defineEmits<{
    // eslint-disable-next-line no-unused-vars
    (e: 'toggleActivePanel', newPanelName: string): void;
  }>();

  const props = defineProps<{ activePanel: string }>();

  function togglePanel(newPanelName: string) {
    emit('toggleActivePanel', newPanelName);
  }
</script>

<template>
  <div class="crafting-panel-options-navbar">
    <button
      class="crafting-panel-options-navbar__button subtitle subtitle--1"
      :class="{
        active: props.activePanel === 'SlotOptions',
      }"
      @click="togglePanel('SlotOptions')"
    >
      <span>SLOT</span>
      <span
        v-if="craftingPanelStore.loadedCrafting.activeSlotPreview?.displayName"
        class="overline"
        >{{
          `[${craftingPanelStore.loadedCrafting.activeSlotPreview?.displayName}]`
        }}</span
      >
    </button>
    <button
      class="crafting-panel-options-navbar__button subtitle subtitle--1"
      :class="{
        active: props.activePanel === 'RecipeOptions',
      }"
      @click="togglePanel('RecipeOptions')"
    >
      RECIPE
    </button>
  </div>
</template>

<style lang="postcss">
  .crafting-panel-options-navbar {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 24px;
    margin-bottom: 24px;

    &__button {
      color: var(--white);
      display: flex;
      justify-content: flex-start;
      border: none;
      border-bottom: 2px solid;
      border-color: hsl(var(--color-cc-grey-30));
      background-color: transparent;
      text-transform: uppercase;
      transition: border-color 0.2s;
      outline: none;
      align-items: flex-end;

      &:hover {
        cursor: pointer;
      }

      &.active {
        border-color: hsl(var(--color-cc-blue-50));
      }
    }
  }
</style>
