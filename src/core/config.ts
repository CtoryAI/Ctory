export const CONFIG = {
    API_BASE_URL: import.meta.env.VITE_API_URL || 'https://api.ctory.xyz',
    CONTRACT_ADDRESS: import.meta.env.VITE_CONTRACT_ADDRESS,
    CONTRACT_ABI: import.meta.env.VITE_CONTRACT_ABI,
    AI_API_KEY: import.meta.env.VITE_AI_API_KEY,
    AI_API_URL: import.meta.env.VITE_AI_API_URL || 'https://ai.ctory.xyz',
    IPFS_GATEWAY: import.meta.env.VITE_IPFS_GATEWAY || 'https://ipfs.ctory.xyz',
} as const;

export const APP_CONFIG = {
    APP_NAME: 'Ctory',
    APP_VERSION: '1.0.0',
    APP_DESCRIPTION: 'Decentralized Storytelling Platform',
    SUPPORTED_CHAINS: ['ethereum', 'polygon'],
    DEFAULT_CHAIN: 'polygon',
    SOCIAL_LINKS: {
        TWITTER: 'https://x.com/Ctory_',
        WEBSITE: 'https://www.ctory.xyz',
        GITHUB: 'https://github.com/CtoryAI/Ctory',
    }
} as const; 