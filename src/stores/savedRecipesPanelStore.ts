import { SavedRecipe } from '@types';
import { defineStore, acceptHMRUpdate } from 'pinia';
import { useStorage } from '@vueuse/core';

export const useSavedRecipesPanelStore = defineStore('RecipePanelStore', {
  state: () => {
    return {
      searchString: '',
      savedRecipes: useStorage('savedRecipes', <SavedRecipe[]>[]),
    };
  },
  actions: {
    addRecipe(recipeName: string, recipeString: string, craftingName: string) {
      this.savedRecipes.push({
        recipeName: recipeName,
        recipeString: recipeString,
        craftingName: craftingName,
        export: true,
      });
    },
    removeRecipeByName(recipeNameToRemove: string) {
      this.savedRecipes = this.savedRecipes.filter((recipe) => {
        return recipe.recipeName !== recipeNameToRemove;
      });
    },
    toggleRecipeExportStatus(recipeNameToToggle: string) {
      this.savedRecipes = this.savedRecipes.map((recipe) =>
        recipe.recipeName === recipeNameToToggle
          ? { ...recipe, export: !recipe.export }
          : recipe
      );
    },
    removeSavedRecipes() {
      this.savedRecipes = [];
    },
    checkIfRecipeNameExists(recipeName: string) {
      return this.savedRecipes.some(
        (recipe) => recipe.recipeName === recipeName
      );
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(
    acceptHMRUpdate(useSavedRecipesPanelStore, import.meta.hot)
  );
}
