<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import SlimSelect from 'slim-select';

  /**
   * Props for base dropdown
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
    });
  });
</script>

<template>
  <div class="base-dropdown">
    <label :for="selectName" class="base-dropdown__label caption">{{
      props.dropdownLabel
    }}</label>
    <select id="select" ref="el" :name="selectName">
      <option
        v-for="option in props.options"
        :key="option"
        :value="option"
        class="subtitle subtitle--2"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>

<style lang="postcss">
  .base-dropdown {
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
    }

    .ss-main {
      height: 100%;
      width: 220px;
      display: flex;
      font-size: var(--button);

      .ss-single-selected {
        background-color: hsl(var(--color-cc-grey-70));
        border: 2px solid hsl(var(--color-cc-grey-40));
        height: 100%;
        padding: 14px 12px;
        column-gap: 12px;
        color: hsl(var(--color-cc-white));
        transition: border-bottom-left-radius 0.15s 0.05s,
          border-bottom-right-radius 0.15s 0.05s;

        &.ss-open-below {
          transition: border-bottom-left-radius 0s,
            border-bottom-right-radius 0s;
        }

        .placeholder {
          width: calc(100%);
          display: block;
          font-family: var(--secondary-font);
          font-weight: 500;
          font-size: 14px;
          line-height: 16px;
          letter-spacing: 0.1px;
        }
      }

      .ss-content {
        top: calc(100% + 1px);
        border: none;

        .ss-list {
          border: 2px solid hsl(var(--color-cc-grey-40));
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
            background-color: hsl(var(--color-cc-grey-70));
            padding: 12px;
            transition: background-color 0.2s, color 0.2s;

            &:hover {
              background-color: hsl(var(--color-cc-grey-60));
            }
          }
        }
      }
    }
  }
</style>
