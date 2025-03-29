export interface User {
    id: string;
    address: string;
    username: string;
    avatar?: string;
    bio?: string;
    createdAt: number;
    updatedAt: number;
}

export interface Story {
    id: string;
    title: string;
    content: string;
    authorId: string;
    coverImage?: string;
    tags: string[];
    status: 'draft' | 'published';
    createdAt: number;
    updatedAt: number;
    publishedAt?: number;
}

export interface Comment {
    id: string;
    content: string;
    authorId: string;
    storyId: string;
    createdAt: number;
    updatedAt: number;
}

export interface Like {
    id: string;
    userId: string;
    storyId: string;
    createdAt: number;
}

export type ChainType = 'ethereum' | 'polygon';

export interface Web3Config {
    chainId: number;
    chainName: string;
    nativeCurrency: {
        name: string;
        symbol: string;
        decimals: number;
    };
    rpcUrls: string[];
    blockExplorerUrls: string[];
} 