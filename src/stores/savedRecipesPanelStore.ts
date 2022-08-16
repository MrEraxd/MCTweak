import { SavedRecipe } from '@types';
import { defineStore } from 'pinia';

export const useSavedRecipesPanelStore = defineStore('RecipePanelStore', {
  state: () => {
    return {
      savedRecipes: <SavedRecipe[]>[],
    };
  },
  actions: {},
});
