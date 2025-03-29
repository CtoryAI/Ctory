import { ethers } from 'ethers';
import { Web3Config } from '@/types/core';
import { CONFIG } from '@/core/config';

export const getProvider = () => {
    if (typeof window === 'undefined') return null;
    if (!window.ethereum) return null;
    return new ethers.BrowserProvider(window.ethereum);
};

export const getSigner = async () => {
    const provider = getProvider();
    if (!provider) return null;
    return await provider.getSigner();
};

export const getContract = async (address: string, abi: any) => {
    const signer = await getSigner();
    if (!signer) return null;
    return new ethers.Contract(address, abi, signer);
};

export const switchNetwork = async (config: Web3Config) => {
    try {
        await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: `0x${config.chainId.toString(16)}` }],
        });
    } catch (error: any) {
        if (error.code === 4902) {
            await window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [config],
            });
        }
        throw error;
    }
};

export const shortenAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
}; 