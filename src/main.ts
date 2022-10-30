import App from './App.vue';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import BaseButton from '@base/BaseButton.vue';
import BaseCheckbox from '@base/BaseCheckbox.vue';
import BaseDropdown from '@base/BaseDropdown.vue';
import BaseInput from '@base/BaseInput.vue';
import BaseRadio from '@base/BaseRadio.vue';

const app = createApp(App);
app.use(createPinia());

app.component('BaseButton', BaseButton);
app.component('BaseCheckbox', BaseCheckbox);
app.component('BaseDropdown', BaseDropdown);
app.component('BaseInput', BaseInput);
app.component('BaseRadio', BaseRadio);

app.mount('#app');
