<script setup lang="ts">
  import { IBaseCheckboxProps } from '@types';
  import IconCheckmark from '@svg/icon-checkmark.svg?component';

  const props = withDefaults(defineProps<IBaseCheckboxProps>(), {
    initiallyChecked: false,
  });

  defineEmits<{
    (e: 'toggle'): void;
  }>();
</script>

<template>
  <label class="base-checkbox">
    <div class="base-checkbox__wrapper">
      <input
        class="base-checkbox__checkbox"
        type="checkbox"
        :checked="props.initiallyChecked"
        @change="$emit('toggle')"
      />
      <span class="base-checkbox__custom-checkbox">
        <IconCheckmark class="base-checkbox__checkmark" />
      </span>
    </div>
    <div class="base-checkbox__label"></div>
  </label>
</template>

<style lang="postcss">
  .base-checkbox {
    &__checkbox {
      display: none;
    }

    &__wrapper {
      display: flex;
      justify-content: center;
    }

    &__checkbox:checked ~ .base-checkbox__custom-checkbox {
      .base-checkbox__checkmark {
        display: flex;
      }
    }

    &__custom-checkbox {
      display: flex;
      width: 20px;
      height: 20px;
      background-color: hsl(var(--color-cc-black));
      border-radius: 2px;
      border: 1px solid hsl(var(--color-cc-grey-30));
      align-items: center;
      justify-content: center;

      &:hover {
        cursor: pointer;
      }
    }

    &__checkmark {
      display: none;
    }
  }
</style>
