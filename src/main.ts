import App from './App.vue';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { DefaultApolloClient } from '@vue/apollo-composable';
import apolloClient from './apollo';

createApp(App)
  .provide(DefaultApolloClient, apolloClient)
  .use(createPinia())
  .mount('#app');
