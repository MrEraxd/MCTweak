import { defineStore } from 'pinia';
import { queryData } from '@plugins/dbConnection';
import itemsByModIdQuery from '../graphql/itemsByModId.query.gql';
import availableItemsListQuery from '../graphql/availableItemsList.query.gql';

interface IItem {
  id: string;
  displayName: string;
}

export const useItemPanelStore = defineStore('ItemPanelStore', {
  state: () => {
    return {
      searchString: '',
      loadedItems: <IItem[]>[],
      availableModIds: [],
    };
  },
  actions: {
    loadItemsByModId(modId: string) {
      return queryData(itemsByModIdQuery, { modId: modId }).then(
        (res) => (this.loadedItems = res.data.itemsByModId)
      );
    },
    async getAvailableModIds() {
      return queryData(availableItemsListQuery).then(
        (res) => (this.availableModIds = res.data.availableItemsList)
      );
    },
  },
});
