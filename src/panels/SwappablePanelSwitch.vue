<script setup lang="ts">
  const emit = defineEmits<{
    // eslint-disable-next-line no-unused-vars
    (e: 'toggleActivePanel', newPanelName: string): void;
  }>();

  const props = withDefaults(defineProps<{ activePanel: string }>(), {
    activePanel: 'CraftingPanel',
  });

  function togglePanel(newPanelName: string) {
    emit('toggleActivePanel', newPanelName);
  }
</script>

<template>
  <div class="the-active-panel-switch">
    <button
      class="the-active-panel-switch__button"
      :class="{
        'the-active-panel-switch__button--active':
          props.activePanel === 'CraftingPanel',
      }"
      @click="togglePanel('CraftingPanel')"
    >
      <span>Crafting</span>
    </button>

    <button
      class="the-active-panel-switch__button"
      :class="{
        'the-active-panel-switch__button--active':
          props.activePanel === 'SavedRecipesPanel',
      }"
      @click="togglePanel('SavedRecipesPanel')"
    >
      <span>Saved Recipes</span>
    </button>
  </div>
</template>

<style lang="postcss">
  .the-active-panel-switch {
    height: 100%;
    display: flex;
    flex-flow: column;
    row-gap: 28px;

    &__button {
      color: var(--white);
      display: flex;
      justify-content: flex-start;
      border-right: 2px solid;
      border-color: var(--cc-grey--300);
      padding-top: 24px;
      padding-right: 4px;
      transition: border-color 0.2s;

      &--active {
        border-color: var(--cc-blue--500);
      }

      span {
        writing-mode: vertical-lr;
        transform: scale(-1, -1);
        font-size: var(--subtitle-1);
        padding-top: 2px;
      }
    }
  }
</style>
