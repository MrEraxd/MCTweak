<script setup lang="ts">
  import { IBaseInputProps } from '@types';

  const props = withDefaults(defineProps<IBaseInputProps>(), {
    inputLabel: 'No label',
    placeholder: 'Type here...',
    defaultValue: '',
    callback: () => {
      return;
    },
  });

  const selectName = props.inputLabel.toLocaleLowerCase().replace(/\s/g, '');
</script>

<template>
  <div class="base-input">
    <input
      ref="inputElem"
      class="base-input__input body-txt body-txt--2"
      :name="selectName"
      :placeholder="props.placeholder"
      :value="props.defaultValue"
      @input="(e) => props.callback((e.target as HTMLInputElement).value.toString(), props.objectToChange)"
    />

    <label :for="selectName" class="base-input__label caption">{{
      props.inputLabel
    }}</label>
  </div>
</template>

<style lang="postcss">
  .base-input {
    position: relative;

    &__label {
      position: absolute;
      left: 10px;
      top: 0;
      z-index: 2;
      transform: translateY(-50%);
      text-transform: uppercase;
      background-color: hsl(var(--color-cc-black));
      padding: 2px 4px;
      border-radius: 4px;
      color: hsl(var(--color-cc-grey-40));
      pointer-events: none;
      transition: color 0.2s;
    }

    &__input {
      border-radius: 4px;
      border: 1px solid hsl(var(--color-cc-grey-40));
      background-color: hsl(var(--color-cc-black));
      height: 100%;
      color: hsl(var(--color-cc-white));
      padding: 10px 12px;
      transition: border-color 0.2s;

      &:focus {
        border-color: hsl(var(--color-cc-blue-50));
        outline: none;

        & ~ label {
          color: hsl(var(--color-cc-blue-50));
        }
      }

      &::placeholder {
        color: hsl(var(--color-cc-grey-40));
      }

      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0 30px hsl(var(--color-cc-black)) inset !important;
        -webkit-text-fill-color: hsl(var(--color-cc-white));
      }
    }
  }
</style>
