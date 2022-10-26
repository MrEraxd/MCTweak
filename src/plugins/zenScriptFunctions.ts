import { Crafting } from '@types';
import { useSavedRecipesPanelStore } from '@stores/savedRecipesPanelStore';

export const createScript = (loadedCrafting: Crafting) => {
  let tmpActiveRecipeSyntax = loadedCrafting.activeRecipeTypeSyntax;
  const savedRecipesPanelStore = useSavedRecipesPanelStore();

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

  console.log(tmpActiveRecipeSyntax);

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
