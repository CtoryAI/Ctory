import { Web3Config } from '@/types/core';

export const CHAIN_CONFIGS: Record<string, Web3Config> = {
    ethereum: {
        chainId: 1,
        chainName: 'Ethereum Mainnet',
        nativeCurrency: {
            name: 'Ether',
            symbol: 'ETH',
            decimals: 18,
        },
        rpcUrls: ['https://mainnet.infura.io/v3/YOUR-PROJECT-ID'],
        blockExplorerUrls: ['https://etherscan.io'],
    },
    polygon: {
        chainId: 137,
        chainName: 'Polygon Mainnet',
        nativeCurrency: {
            name: 'MATIC',
            symbol: 'MATIC',
            decimals: 18,
        },
        rpcUrls: ['https://polygon-rpc.com'],
        blockExplorerUrls: ['https://polygonscan.com'],
    },
} as const;

export const SUPPORTED_CHAIN_IDS = Object.values(CHAIN_CONFIGS).map(
    config => config.chainId
); 