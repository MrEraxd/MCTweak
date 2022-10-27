import type * as CSS from 'csstype';

/**
 * Props for option in dropdown menu.
 * @param {string} value - Value of input.
 * @param {string} label - Label of input.
 */
export interface IBaseDropdownOption {
  value: string;
  label: string;
}

/**
 * Props for base dropdown.
 * @param {string} dropdownLabel - Label for dropdown.
 * @param {Array<IBaseDropdownOption>} options - Array of options to choose from.
 * @param {(newValue): boolean} void - Callback function to execute after option change.
 */
export interface IBaseDropdownProps {
  dropdownLabel: string;
  options: Array<IBaseDropdownOption>;
  callback: (newValue: string) => void;
}

/**
 * Props for base input.
 * @param {string} inputLabel - Label for input.
 * @param {(inputValue: string): void} callback - Callback on input change.
 * @param {string} [placeholder] - Placeholder of input.
 * @param {string} [defaultValue] - Default value.
 */
export interface IBaseInputProps {
  inputLabel: string;
  callback: (
    inputValue: string,
    objectToChange: AddinationalInput | undefined
  ) => void;
  placeholder?: string;
  defaultValue?: string;
  objectToChange?: AddinationalInput;
}

export interface IBaseButtonProps {
  buttonName: string;
  isErrorButton?: boolean;
}

export interface IBaseItemCell {
  displayName: string;
  fullName: string;
}

export interface IBaseRadio {
  displayName: string;
  name: string;
  index: number;
  callback: (functionSyntax: string) => void;
  value: string;
}

export interface IBaseCheckboxProps {
  initiallyChecked?: boolean;
}

export interface IBaseCheckboxEmits {
  (e: 'toggle'): void;
}

export interface Canvas {
  style: {
    backgroundColor: string;
  };
  slots: Array<IBaseCraftingCell>;
  bottomTitle: string;
  bottomSlots: Array<IBaseCraftingCell>;
}

export interface Crafting {
  name?: string;
  displayName?: string;
  canvas?: Canvas;
  recipeTypes?: Array<{
    name: string;
    displayName: string;
    functionSyntax: string;
  }>;
  addinationalInputs?: Array<AddinationalInput>;
  activeSlotPreview?: IBaseCraftingCell;
  activeRecipeTypeSyntax?: string;
  recipeName?: string;
}

export interface AddinationalInput {
  type: string;
  displayName: string;
  syntaxName: string;
  value?: string;
  defaultValue?: string;
}

export interface IBaseCraftingCell {
  type: 'craftingCell';
  displayName: string;
  syntaxName: string;
  addinationalInputs?: Array<AddinationalInput>;
  style?: CSS.Properties;
  item?: Item;
}

export interface Item {
  name: string;
  displayName: string;
  type: 'item';
  modName: string;
  fullName: string;
}

export interface SavedRecipe {
  recipeName: string;
  recipeString: string;
  export: boolean;
  craftingName: string;
}
