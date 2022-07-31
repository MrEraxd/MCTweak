/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module '*.gql' {
  import { DocumentNode } from 'graphql';
  const MyQuery: DocumentNode;
  export default MyQuery;
}

/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MCTWEAK_DB_ADDRESS: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
