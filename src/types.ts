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
  callback: (inputValue: string) => void;
  placeholder?: string;
  defaultValue?: string;
}

export interface IBaseButtonProps {
  buttonName: string;
}

export interface IBaseItemCell {
  displayName: string;
}

export interface Canvas {
  backgroundColor: CSS.Properties;
  slots: Array<IBaseCraftingCell>;
}

export interface Crafting {
  name?: string;
  displayName?: string;
  prefix?: string;
  canvas?: Canvas;
  recipeTypes?: Array<{
    name: string;
    displayName: string;
    functionPrefix: string;
    functionSyntax: string;
  }>;
  addinationalInputs?: Array<{
    todo: string;
  }>;
}

export interface IBaseCraftingCell {
  type: 'craftingCell';
  displayName: string;
  syntaxName: string;
  addinationalInputs?: Array<{
    displayName: string;
    syntaxName: string;
    defaultValue: string;
  }>;
  style?: CSS.Properties;
  item: Item;
}

export interface Item {
  name: string;
  displayName: string;
  type: 'item';
  modName: string;
  fullString: string;
}
