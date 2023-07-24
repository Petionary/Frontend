/// <reference types="vite/client" />

/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_CUSTOM_ENV_VARIABLE: string;
}

// eslint-disable-next-line no-unused-vars
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
