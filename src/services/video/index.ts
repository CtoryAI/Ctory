import axios from 'axios';
import { Video } from '@/types';
import { aiService } from '../ai';
import { blockchainService } from '../blockchain';

class VideoService {
  private apiKey: string;
  private baseUrl: string;

  constructor() {
    this.apiKey = import.meta.env.VITE_AI_API_KEY;
    this.baseUrl = import.meta.env.VITE_AI_API_URL;
  }

  async generateVideo(storyId: string, story: string, style: string, duration: number): Promise<Video> {
    try {
      // 1. Generate video using AI service
      const videoUrl = await aiService.generateVideo({
        storyId,
        story,
        style,
        duration,
      });

      // 2. Create video metadata
      const video: Video = {
        id: crypto.randomUUID(),
        storyId,
        url: videoUrl,
        thumbnail: `${videoUrl}/thumbnail.jpg`, // Assuming the AI service provides a thumbnail
        status: 'processing',
        createdAt: new Date().toISOString(),
        duration,
        metadata: {
          prompt: story,
          style,
          resolution: '1920x1080',
          fps: 30,
        },
      };

      // 3. Store video metadata on blockchain
      await this.storeVideo(video);

      // 4. Update video status to ready
      video.status = 'ready';
      await this.storeVideo(video);

      return video;
    } catch (error) {
      console.error('Error generating video:', error);
      throw error;
    }
  }

  async storeVideo(video: Video): Promise<string> {
    try {
      return await blockchainService.storeVideo(video);
    } catch (error) {
      console.error('Error storing video:', error);
      throw error;
    }
  }

  async getVideo(id: string): Promise<Video> {
    try {
      return await blockchainService.getVideo(id);
    } catch (error) {
      console.error('Error getting video:', error);
      throw error;
    }
  }

  async getVideosByStory(storyId: string): Promise<Video[]> {
    try {
      return await blockchainService.getVideosByStory(storyId);
    } catch (error) {
      console.error('Error getting videos by story:', error);
      throw error;
    }
  }

  async deleteVideo(id: string): Promise<void> {
    try {
      await blockchainService.deleteVideo(id);
    } catch (error) {
      console.error('Error deleting video:', error);
      throw error;
    }
  }
}

export const videoService = new VideoService(); 