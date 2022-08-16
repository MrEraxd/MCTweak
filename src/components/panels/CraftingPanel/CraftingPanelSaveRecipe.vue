<script setup lang="ts">
  import BaseInput from '@base/BaseInput.vue';
  import BaseButton from '@base/BaseButton.vue';
  import { createScript } from '@plugins/zenScriptFunctions';
  import { useCraftingPanelStore } from '@stores/craftingPanelStore';

  const craftingPanelStore = useCraftingPanelStore();

  const buttonCallback = () => {
    createScript(craftingPanelStore.loadedCrafting);
  };

  const changeRecipeName = (newValue: string) => {
    craftingPanelStore.loadedCrafting.recipeName = newValue;
  };
</script>

<template>
  <div class="crafting-panel-save-recipe">
    <BaseInput
      input-label="Recipe name"
      :callback="changeRecipeName"
    ></BaseInput>
    <BaseButton
      button-name="Save recipe"
      :callback="buttonCallback"
    ></BaseButton>
  </div>
</template>

<style lang="postcss">
  .crafting-panel-save-recipe {
    padding-top: 10px;
    display: flex;
    column-gap: 32px;

    .base-input {
      flex: 1;

      input {
        width: 100%;
        text-transform: lowercase;

        &::placeholder {
          text-transform: none;
        }
      }
    }
  }
</style>
