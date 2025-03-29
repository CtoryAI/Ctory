import axios from 'axios';

const AI_API_ENDPOINT = process.env.REACT_APP_AI_API_ENDPOINT;

export const aiService = {
  generateStory: async (prompt, options = {}) => {
    try {
      const response = await axios.post(`${AI_API_ENDPOINT}/generate-story`, {
        prompt,
        ...options
      });
      return response.data;
    } catch (error) {
      console.error('Error generating story:', error);
      throw error;
    }
  },

  generateVideo: async (storyData, options = {}) => {
    try {
      const response = await axios.post(`${AI_API_ENDPOINT}/generate-video`, {
        storyData,
        ...options
      });
      return response.data;
    } catch (error) {
      console.error('Error generating video:', error);
      throw error;
    }
  },

  generateAudio: async (text, options = {}) => {
    try {
      const response = await axios.post(`${AI_API_ENDPOINT}/generate-audio`, {
        text,
        ...options
      });
      return response.data;
    } catch (error) {
      console.error('Error generating audio:', error);
      throw error;
    }
  }
}; 