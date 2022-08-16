<script setup lang="ts">
  import { useSavedRecipesPanelStore } from '@stores/savedRecipesPanelStore';

  const savedRecipesPanelStore = useSavedRecipesPanelStore();
</script>

<template>
  <div class="saved-recipes-panel-list">
    <table class="saved-recipes-panel-list__table">
      <tr>
        <th class="subtitle subtitle--1">RECIPE NAME</th>
        <th class="subtitle subtitle--1">CRAFTING TYPE</th>
        <th class="subtitle subtitle--1">EXPORT?</th>
        <th class="subtitle subtitle--1">DELETE</th>
      </tr>

      <tr
        v-for="savedRecipe in savedRecipesPanelStore.savedRecipes"
        :key="savedRecipe.recipeName"
        class="body-txt body-txt--2"
      >
        <td>{{ savedRecipe.recipeName }}</td>
        <td>{{ savedRecipe.craftingName }}</td>
        <td>X</td>
        <td>X</td>
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

      th,
      td {
        padding-left: 12px;
        padding-right: 12px;
        border: 1px solid hsl(var(--color-cc-grey-30));
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      th {
        color: hsl(var(--color-cc-grey-30));
        font-weight: 400;
        padding-top: 4px;
        padding-bottom: 4px;
        border-top: none;
      }

      tr {
        *:first-child {
          border-left: none;
          width: 100%;
          max-width: 340px;
          overflow: hidden;
        }

        *:last-child {
          border-right: none;
        }
      }

      tr:nth-of-type(2n) {
        background-color: hsl(var(--color-cc-grey-60));
      }

      td {
        padding-top: 12px;
        padding-bottom: 12px;
      }
    }
  }
</style>
