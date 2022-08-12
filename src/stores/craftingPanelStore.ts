import { queryData } from '@plugins/dbConnection';
import { defineStore } from 'pinia';
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
      return queryData(availableCraftings).then(
        (res) => (this.availableCraftings = res.data.availableCraftings)
      );
    },
    loadCraftingByName(name: string) {
      return queryData(craftingByName, { name: name }).then(
        (res) => (this.loadedCrafting = res.data.craftingByName)
      );
    },
  },
});
