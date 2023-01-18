import { Crafting, NotificationTypes } from '@types';
import { useSavedRecipesPanelStore } from '@stores/savedRecipesPanelStore';
import { useNotificationStore } from '@stores/notificationStore';

export const createScript = (loadedCrafting: Crafting) => {
  let tmpActiveRecipeSyntax = loadedCrafting.activeRecipeTypeSyntax;
  const savedRecipesPanelStore = useSavedRecipesPanelStore();
  const notificationStore = useNotificationStore();

  if (!loadedCrafting.recipeName) {
    notificationStore.addNotification(
      'Provide recipe name',
      NotificationTypes.ERROR,
      'Please provide recipe name, each recipe name has to be unique'
    );
    return;
  }

  if (
    savedRecipesPanelStore.checkIfRecipeNameExists(loadedCrafting.recipeName)
  ) {
    notificationStore.addNotification(
      'Recipe name not unique',
      NotificationTypes.ERROR,
      'Please provide unique recipe name'
    );
    return;
  }

  const valuesToSearch =
    loadedCrafting.activeRecipeTypeSyntax?.match(/%(.*?)%/g);

  valuesToSearch?.forEach((syntaxName) => {
    const objWithSyntaxName = searchObjectWithSyntaxName(
      loadedCrafting,
      syntaxName
    );

    if (syntaxName === '%recipeName%') {
      if (loadedCrafting.recipeName != undefined) {
        tmpActiveRecipeSyntax = tmpActiveRecipeSyntax?.replace(
          syntaxName,
          loadedCrafting.recipeName
        );
      }
    }

    if (!objWithSyntaxName != undefined) {
      tmpActiveRecipeSyntax = tmpActiveRecipeSyntax?.replace(
        syntaxName,
        objWithSyntaxName?.item?.fullName ??
          objWithSyntaxName?.value ??
          objWithSyntaxName?.defaultValue ??
          '<item:minecraft:air>'
      );
    }
  });

  if (
    loadedCrafting.recipeName != undefined &&
    tmpActiveRecipeSyntax != undefined &&
    loadedCrafting.displayName != undefined
  ) {
    saveRecipe(
      loadedCrafting.recipeName,
      tmpActiveRecipeSyntax,
      loadedCrafting.displayName
    );
    notificationStore.addNotification(
      'Recipe added',
      NotificationTypes.SUCCESS
    );
  }

  function saveRecipe(
    recipeName: string,
    recipeString: string,
    craftingName: string
  ) {
    savedRecipesPanelStore.addRecipe(recipeName, recipeString, craftingName);
  }

  function searchObjectWithSyntaxName(
    objectToSearch: any,
    searchedValue: string
  ): any {
    let returnValue;

    for (const [key, value] of Object.entries(objectToSearch)) {
      if (typeof value == 'object') {
        returnValue = searchObjectWithSyntaxName(value, searchedValue);

        if (returnValue != null) {
          return returnValue;
        }
      } else {
        if (value === searchedValue) {
          returnValue = objectToSearch;
          break;
        }
      }
    }

    return returnValue;
  }
};

export const exportSavedRecipes = () => {
  console.log('test');
};
