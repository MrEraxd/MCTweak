<script setup lang="ts">
  import { IBaseRadio } from '@types';

  const props = defineProps<IBaseRadio>();
</script>

<template>
  <label class="base-radio">
    <input
      type="radio"
      :name="props.name"
      :checked="props.index === 0"
      :value="props.value"
      @change="props.callback(props.value)"
    />
    <div class="base-radio__checkmark"></div>
    <span>{{ props.displayName }}</span>
  </label>
</template>

<style lang="postcss">
  .base-radio {
    display: flex;
    align-items: center;
    column-gap: 8px;

    &:hover {
      cursor: pointer;
    }

    input {
      display: none;
    }

    input:checked ~ .base-radio__checkmark::after {
      opacity: 1;
    }

    &__checkmark {
      display: flex;
      background-color: hsl(var(--color-cc-black));
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 2px solid hsl(var(--color-cc-grey-40));
      align-items: center;
      justify-content: center;

      &::after {
        content: '';
        width: 10px;
        height: 10px;
        background-color: hsl(var(--color-cc-white));
        border-radius: 50%;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.2s;
      }
    }
  }
</style>
