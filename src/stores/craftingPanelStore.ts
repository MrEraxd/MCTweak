import { queryData } from '@plugins/dbConnection';
import { defineStore, acceptHMRUpdate } from 'pinia';
import availableCraftings from '@graphql/availableCraftings.query.gql';
import craftingByName from '@graphql/craftingByName.query.gql';
import { Crafting } from '@types';

export const useCraftingPanelStore = defineStore('CraftingPanelStore', {
  state: () => {
    return {
      availableCraftings: [],
      loadedCrafting: <Crafting>{},
    };
  },
  actions: {
    async getAvailableCraftings() {
      if (this.availableCraftings.length === 0) {
        return queryData(availableCraftings).then(
          (res) => (this.availableCraftings = res.data.availableCraftings)
        );
      } else {
        return this.availableCraftings;
      }
    },
    loadCraftingByName(name: string) {
      return queryData(craftingByName, { name: name }).then((res) => {
        this.loadedCrafting = res.data.craftingByName;
        this.loadedCrafting.activeRecipeTypeSyntax =
          res.data.craftingByName.recipeTypes[0].functionSyntax;
      });
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(
    acceptHMRUpdate(useCraftingPanelStore, import.meta.hot)
  );
}
