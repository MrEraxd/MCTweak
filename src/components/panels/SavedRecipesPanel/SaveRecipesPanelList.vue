<script setup lang="ts">
  import { useSavedRecipesPanelStore } from '@stores/savedRecipesPanelStore';
  import IconExit from '@svg/icon-exit.svg?component';

  const savedRecipesPanelStore = useSavedRecipesPanelStore();

  const handleRemoveSavedRecipeButton = (recipeNameToRemove: string) => {
    savedRecipesPanelStore.removeRecipeByName(recipeNameToRemove);
  };
</script>

<template>
  <div class="saved-recipes-panel-list">
    <table class="saved-recipes-panel-list__table">
      <tr class="saved-recipes-panel-list__row">
        <th
          class="saved-recipes-panel-list__cell saved-recipes-panel-list__cell--header subtitle subtitle--1"
        >
          RECIPE NAME
        </th>
        <th
          class="saved-recipes-panel-list__cell saved-recipes-panel-list__cell--header subtitle subtitle--1"
        >
          CRAFTING TYPE
        </th>
        <th
          class="saved-recipes-panel-list__cell saved-recipes-panel-list__cell--header saved-recipes-panel-list__cell--center subtitle subtitle--1"
        >
          EXPORT?
        </th>
        <th
          class="saved-recipes-panel-list__cell saved-recipes-panel-list__cell--header saved-recipes-panel-list__cell--center subtitle subtitle--1"
        >
          DELETE
        </th>
      </tr>

      <tr
        v-for="savedRecipe in savedRecipesPanelStore.savedRecipes"
        v-show="
          savedRecipe.recipeName
            .toLocaleLowerCase()
            .search(savedRecipesPanelStore.searchString.toLocaleLowerCase()) !=
          -1
        "
        :key="savedRecipe.recipeName"
        class="saved-recipes-panel-list__row body-txt body-txt--2"
      >
        <td class="saved-recipes-panel-list__cell">
          {{ savedRecipe.recipeName }}
        </td>
        <td class="saved-recipes-panel-list__cell">
          {{ savedRecipe.craftingName }}
        </td>
        <td
          class="saved-recipes-panel-list__cell saved-recipes-panel-list__cell--center"
        >
          X
        </td>
        <td
          class="saved-recipes-panel-list__cell saved-recipes-panel-list__cell--center"
        >
          <button
            class="saved-recipes-panel-list__remove-recipe-btn"
            @click="handleRemoveSavedRecipeButton(savedRecipe.recipeName)"
          >
            <IconExit />
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<style lang="postcss">
  .saved-recipes-panel-list {
    height: 100%;
    overflow-y: auto;
    padding-right: 10px;

    &__table {
      width: 100%;
      text-align: left;
      border-collapse: collapse;
      display: grid;
      gap: 1px;
      background-color: hsl(var(--color-cc-grey-30));

      td {
        padding-top: 12px;
        padding-bottom: 12px;
      }
    }

    &__cell {
      padding-left: 12px;
      padding-right: 12px;
      white-space: nowrap;
      text-overflow: ellipsis;
      display: flex;
      align-items: center;

      &--header {
        color: hsl(var(--color-cc-grey-30));
        font-weight: 400;
        padding-top: 4px;
        padding-bottom: 4px;
        border-top: none;
        background-color: hsl(var(--color-cc-grey-70));
        border-bottom: 1px solid hsl(var(--color-cc-grey-30));
      }

      &--center {
        justify-content: center;
      }
    }

    &__row {
      display: grid;
      grid-template-columns: 6fr 4fr 2fr 2fr;
      gap: 1px;
      background-color: hsl(var(--color-cc-grey-30));

      *:first-child:not(button) {
        border-left: none;
        width: 100%;
        max-width: 340px;
        overflow: hidden;
      }

      &:nth-of-type(2n) > td {
        background-color: hsl(var(--color-cc-grey-60));
      }

      &:nth-of-type(2n - 1) > td {
        background-color: hsl(var(--color-cc-grey-70));
      }

      *:last-child {
        box-shadow: none;
      }
    }

    &__remove-recipe-btn {
      border: none;
      background-color: transparent;
      cursor: pointer;
    }
  }
</style>
