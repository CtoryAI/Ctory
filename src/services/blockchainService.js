import { ethers } from 'ethers';
import { CTRY_TOKEN_ABI, CTRY_NFT_ABI } from '../constants/contracts';

export const blockchainService = {
  initialize: async (provider) => {
    const signer = provider.getSigner();
    const address = await signer.getAddress();
    return { signer, address };
  },

  getTokenBalance: async (contract, address) => {
    try {
      const balance = await contract.balanceOf(address);
      return ethers.utils.formatEther(balance);
    } catch (error) {
      console.error('Error getting token balance:', error);
      throw error;
    }
  },

  mintNFT: async (contract, metadata) => {
    try {
      const tx = await contract.mint(metadata);
      return await tx.wait();
    } catch (error) {
      console.error('Error minting NFT:', error);
      throw error;
    }
  },

  transferToken: async (contract, to, amount) => {
    try {
      const tx = await contract.transfer(to, ethers.utils.parseEther(amount));
      return await tx.wait();
    } catch (error) {
      console.error('Error transferring tokens:', error);
      throw error;
    }
  }
}; 