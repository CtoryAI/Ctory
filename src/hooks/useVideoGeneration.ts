import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { videoService } from '@/services/video';
import { addVideo, updateVideo, setLoading, setError } from '@/store/slices/videoSlice';
import { Video } from '@/types';

interface UseVideoGenerationProps {
  onSuccess?: (video: Video) => void;
  onError?: (error: Error) => void;
}

export const useVideoGeneration = ({ onSuccess, onError }: UseVideoGenerationProps = {}) => {
  const dispatch = useDispatch();
  const [isGenerating, setIsGenerating] = useState(false);

  const generateVideo = async (
    storyId: string,
    story: string,
    style: string,
    duration: number
  ): Promise<void> => {
    try {
      setIsGenerating(true);
      dispatch(setLoading(true));
      dispatch(setError(null));

      const video = await videoService.generateVideo(storyId, story, style, duration);
      dispatch(addVideo(video));

      if (onSuccess) {
        onSuccess(video);
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to generate video';
      dispatch(setError(errorMessage));
      if (onError) {
        onError(error instanceof Error ? error : new Error(errorMessage));
      }
    } finally {
      setIsGenerating(false);
      dispatch(setLoading(false));
    }
  };

  const updateVideoStatus = async (videoId: string, status: Video['status']): Promise<void> => {
    try {
      dispatch(setLoading(true));
      dispatch(setError(null));

      const video = await videoService.getVideo(videoId);
      const updatedVideo = { ...video, status };
      await videoService.storeVideo(updatedVideo);
      dispatch(updateVideo(updatedVideo));
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to update video status';
      dispatch(setError(errorMessage));
      if (onError) {
        onError(error instanceof Error ? error : new Error(errorMessage));
      }
    } finally {
      dispatch(setLoading(false));
    }
  };

  return {
    generateVideo,
    updateVideoStatus,
    isGenerating,
  };
}; 