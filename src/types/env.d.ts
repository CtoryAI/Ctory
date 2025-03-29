/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_CONTRACT_ADDRESS: string;
  readonly VITE_CONTRACT_ABI: string;
  readonly VITE_AI_API_KEY: string;
  readonly VITE_AI_API_URL: string;
  readonly VITE_IPFS_GATEWAY: string;
  readonly VITE_IPFS_PROJECT_ID: string;
  readonly VITE_IPFS_PROJECT_SECRET: string;
  readonly VITE_APP_NAME: string;
  readonly VITE_APP_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare global {
  interface Window {
    ethereum: any;
  }
} 