import BaseButton from '@base/BaseButton.vue';
import BaseCheckbox from '@base/BaseCheckbox.vue';
import BaseDropdown from '@base/BaseDropdown.vue';
import BaseInput from '@base/BaseInput.vue';
import BaseRadio from '@base/BaseRadio.vue';

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    BaseButton: typeof BaseButton;
    BaseCheckbox: typeof BaseCheckbox;
    BaseDropdown: typeof BaseDropdown;
    BaseInput: typeof BaseInput;
    BaseRadio: typeof BaseRadio;
  }
}
