<script setup lang="ts">
  import { useCraftingPanelStore } from '@stores/craftingPanelStore';
  import { AddinationalInput } from '@types';
  import BaseInput from '@base/BaseInput.vue';

  const craftingPanelStore = useCraftingPanelStore();

  const changeInputValue = (
    newValue: string,
    objectToChange: AddinationalInput | undefined
  ) => {
    (objectToChange as AddinationalInput).value = newValue;
  };
</script>

<template>
  <div class="crafting-panel-slot-options">
    <div
      v-if="!craftingPanelStore.loadedCrafting.activeSlotPreview?.displayName"
    >
      Click any slot with LMB to change its options.
    </div>
    <div v-else>
      <div
        v-if="
          craftingPanelStore.loadedCrafting.activeSlotPreview
            ?.addinationalInputs?.length != 0
        "
      >
        <div
          v-for="addinationalInput in craftingPanelStore.loadedCrafting
            .activeSlotPreview.addinationalInputs"
          :key="addinationalInput.syntaxName"
        >
          <BaseInput
            v-if="addinationalInput.type === 'text'"
            :input-label="addinationalInput.displayName"
            :object-to-change="addinationalInput"
            :callback="changeInputValue"
            :default-value="
              addinationalInput.value ?? addinationalInput.defaultValue
            "
          />
        </div>
      </div>
      <div v-else>There are no addinational input for this slot</div>
    </div>
  </div>
</template>

<style lang="postcss">
  .crafting-panel-slot-options {
    width: 100%;
    padding-top: 10px;

    .base-input input {
      width: 100%;
    }
  }
</style>
