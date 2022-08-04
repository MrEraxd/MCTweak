<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import SlimSelect from 'slim-select';

  /**
   * Props for base dropdown
   * @param {string} dropdownLabel - Label for dropdown
   * @param {Array<string>} options - Array of options to choose from
   * @param {(newValue): boolean} void - Callback function to execute after option change
   */
  interface IBaseDropDownProps {
    dropdownLabel: string;
    options: Array<string>;
    callback: (newValue: string) => void;
  }

  const props = withDefaults(defineProps<IBaseDropDownProps>(), {
    dropdownLabel: 'No label',
    options: () => ['No options provided'],
    callback: () => {
      console.error('No callback function provided');
      return false;
    },
  });

  const el = ref();
  const labelElem = ref();

  /**
   * Creates name for select based on label
   */
  const selectName = props.dropdownLabel.toLocaleLowerCase().replace(/\s/g, '');

  /**
   * Creates slim select instance after object is mounted
   */
  onMounted(() => {
    new SlimSelect({
      select: el.value,
      showSearch: false,
      hideSelectedOption: true,
      // eslint-disable-next-line  @typescript-eslint/no-explicit-any
      onChange: (info: any) => {
        props.callback(info.value);
      },
      beforeOpen: () => {
        labelElem.value.classList.add('base-dropdown__label--active');
      },
      beforeClose: () => {
        labelElem.value.classList.remove('base-dropdown__label--active');
      },
    });
  });
</script>

<template>
  <div class="base-dropdown">
    <label
      ref="labelElem"
      :for="selectName"
      class="base-dropdown__label caption"
      >{{ props.dropdownLabel }}</label
    >

    <select id="select" ref="el" :name="selectName">
      <option
        v-for="option in props.options"
        :key="option"
        :value="option"
        class="body-txt body-txt--2"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>

<style lang="postcss">
  .base-dropdown {
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

      &--active {
        color: hsl(var(--color-cc-blue-50));
      }
    }

    .ss-main {
      height: 100%;
      width: 220px;
      display: flex;
      font-size: var(--button);

      .ss-single-selected {
        background-color: hsl(var(--color-cc-black));
        border: 1px solid hsl(var(--color-cc-grey-40));
        height: 100%;
        padding: 10px 12px;
        column-gap: 12px;
        color: hsl(var(--color-cc-white));
        transition: border-bottom-left-radius 0.15s 0.05s,
          border-bottom-right-radius 0.15s 0.05s, border-color 0.15s;

        &.ss-open-below {
          transition: border-bottom-left-radius 0s,
            border-bottom-right-radius 0s;
          border-color: hsl(var(--color-cc-blue-50));
        }

        .placeholder {
          width: calc(100%);
          display: block;
          font-family: var(--main-font);
          font-size: 14px;
          line-height: 19px;
          letter-spacing: 0.25px;
          text-transform: capitalize;
        }
      }

      .ss-content {
        top: calc(100% + 1px);
        border: none;

        .ss-list {
          border: 1px solid hsl(var(--color-cc-blue-50));
          border-top: none;

          &::-webkit-scrollbar {
            width: 8px;
            background-color: hsl(var(--color-cc-grey-70));
          }

          &::-webkit-scrollbar-thumb {
            background-color: hsl(var(--color-cc-blue-50));

            &:hover {
              background-color: hsl(var(--color-cc-blue-60));
            }
          }

          .ss-option {
            background-color: hsl(var(--color-cc-black));
            padding: 10px 12px;
            transition: background-color 0.2s, color 0.2s;
            text-transform: capitalize;

            &:hover,
            &.ss-highlighted {
              background-color: hsl(var(--color-cc-grey-70));
            }
          }
        }
      }
    }
  }
</style>
