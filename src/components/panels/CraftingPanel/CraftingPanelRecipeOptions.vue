<script setup lang="ts">
  import { useCraftingPanelStore } from '@stores/craftingPanelStore';
  import BaseRadio from '@base/BaseRadio.vue';
  import BaseInput from '@base/BaseInput.vue';
  import { AddinationalInput } from '@types';

  const craftingPanelStore = useCraftingPanelStore();

  const changeInputValue = (
    newValue: string,
    objectToChange: AddinationalInput | undefined
  ) => {
    (objectToChange as AddinationalInput).value = newValue;
  };

  const changeRecipeType = (newSyntax: string) => {
    craftingPanelStore.loadedCrafting.activeRecipeTypeSyntax = newSyntax;
  };
</script>

<template>
  <div class="crafting-panel-recipe-options">
    <div class="crafting-panel-recipe-options__recipe-type-wrapper">
      <BaseRadio
        v-for="(recipeType, index) in craftingPanelStore.loadedCrafting
          .recipeTypes"
        :key="recipeType.name"
        :display-name="recipeType.displayName"
        :name="'recipeType'"
        :index="index"
        :value="recipeType.functionSyntax"
        :callback="changeRecipeType"
      />
    </div>

    <div class="crafting-panel-recipe-options__addinational-inputs-wrapper">
      <div
        v-for="addinationalInput in craftingPanelStore.loadedCrafting
          .addinationalInputs"
        :key="addinationalInput.syntaxName"
      >
        <BaseInput
          v-if="addinationalInput.type === 'text'"
          :input-label="addinationalInput.displayName"
          :object-to-change="addinationalInput"
          :callback="changeInputValue"
          :default-value="
            addinationalInput.defaultValue ?? addinationalInput.value
          "
        />
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
  .crafting-panel-recipe-options {
    display: flex;
    flex-flow: column;

    &__recipe-type-wrapper {
      display: flex;
      flex-flow: column;
      row-gap: 16px;
    }

    &__addinational-inputs-wrapper {
      margin-top: 32px;

      .base-input input {
        width: 100%;
      }
    }
  }
</style>
