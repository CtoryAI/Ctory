import { ethers } from 'ethers';
import { Story, Video, User } from '@/types';

class BlockchainService {
  private provider: ethers.Provider;
  private signer: ethers.Signer | null;
  private contract: ethers.Contract | null;

  constructor() {
    this.provider = new ethers.BrowserProvider(window.ethereum);
    this.signer = null;
    this.contract = null;
  }

  async connect(): Promise<void> {
    try {
      this.signer = await this.provider.getSigner();
      this.contract = new ethers.Contract(
        import.meta.env.VITE_CONTRACT_ADDRESS,
        JSON.parse(import.meta.env.VITE_CONTRACT_ABI),
        this.signer
      );
    } catch (error) {
      console.error('Error connecting to blockchain:', error);
      throw error;
    }
  }

  async createUser(user: User): Promise<string> {
    if (!this.contract) {
      throw new Error('Contract not initialized');
    }

    try {
      const tx = await this.contract.createUser(
        user.id,
        user.address,
        user.username,
        user.email,
        user.createdAt
      );
      await tx.wait();
      return tx.hash;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }

  async getUser(address: string): Promise<User | null> {
    if (!this.contract) {
      throw new Error('Contract not initialized');
    }

    try {
      const user = await this.contract.getUser(address);
      if (!user) {
        return null;
      }
      return {
        id: user.id,
        address: user.address,
        username: user.username,
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      };
    } catch (error) {
      console.error('Error getting user:', error);
      throw error;
    }
  }

  async updateUser(user: User): Promise<string> {
    if (!this.contract) {
      throw new Error('Contract not initialized');
    }

    try {
      const tx = await this.contract.updateUser(
        user.id,
        user.username,
        user.email,
        user.updatedAt
      );
      await tx.wait();
      return tx.hash;
    } catch (error) {
      console.error('Error updating user:', error);
      throw error;
    }
  }

  async storeStory(story: Story): Promise<string> {
    if (!this.contract) {
      throw new Error('Contract not initialized');
    }

    try {
      const tx = await this.contract.storeStory(
        story.id,
        story.title,
        story.prompt,
        story.style,
        story.duration,
        story.createdAt,
        story.userId
      );
      await tx.wait();
      return tx.hash;
    } catch (error) {
      console.error('Error storing story:', error);
      throw error;
    }
  }

  async storeVideo(video: Video): Promise<string> {
    if (!this.contract) {
      throw new Error('Contract not initialized');
    }

    try {
      const tx = await this.contract.storeVideo(
        video.id,
        video.storyId,
        video.url,
        video.thumbnail,
        video.status,
        video.createdAt,
        video.duration,
        JSON.stringify(video.metadata),
        video.userId
      );
      await tx.wait();
      return tx.hash;
    } catch (error) {
      console.error('Error storing video:', error);
      throw error;
    }
  }

  async getStory(id: string): Promise<Story> {
    if (!this.contract) {
      throw new Error('Contract not initialized');
    }

    try {
      const story = await this.contract.getStory(id);
      return {
        id: story.id,
        title: story.title,
        prompt: story.prompt,
        style: story.style,
        duration: story.duration,
        status: story.status,
        createdAt: story.createdAt,
        updatedAt: story.updatedAt,
        userId: story.userId,
      };
    } catch (error) {
      console.error('Error getting story:', error);
      throw error;
    }
  }

  async getVideo(id: string): Promise<Video> {
    if (!this.contract) {
      throw new Error('Contract not initialized');
    }

    try {
      const video = await this.contract.getVideo(id);
      return {
        id: video.id,
        storyId: video.storyId,
        url: video.url,
        thumbnail: video.thumbnail,
        status: video.status,
        createdAt: video.createdAt,
        duration: video.duration,
        metadata: JSON.parse(video.metadata),
        userId: video.userId,
      };
    } catch (error) {
      console.error('Error getting video:', error);
      throw error;
    }
  }

  async getVideosByStory(storyId: string): Promise<Video[]> {
    if (!this.contract) {
      throw new Error('Contract not initialized');
    }

    try {
      const videos = await this.contract.getVideosByStory(storyId);
      return videos.map((video: any) => ({
        id: video.id,
        storyId: video.storyId,
        url: video.url,
        thumbnail: video.thumbnail,
        status: video.status,
        createdAt: video.createdAt,
        duration: video.duration,
        metadata: JSON.parse(video.metadata),
        userId: video.userId,
      }));
    } catch (error) {
      console.error('Error getting videos by story:', error);
      throw error;
    }
  }

  async deleteVideo(id: string): Promise<void> {
    if (!this.contract) {
      throw new Error('Contract not initialized');
    }

    try {
      const tx = await this.contract.deleteVideo(id);
      await tx.wait();
    } catch (error) {
      console.error('Error deleting video:', error);
      throw error;
    }
  }
}

export const blockchainService = new BlockchainService(); 