import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Video {
  id: string;
  storyId: string;
  url: string;
  thumbnail: string;
  status: 'processing' | 'ready' | 'error';
  createdAt: string;
  duration: number;
  metadata: {
    prompt: string;
    style: string;
    resolution: string;
    fps: number;
  };
}

interface VideoState {
  videos: Video[];
  currentVideo: Video | null;
  loading: boolean;
  error: string | null;
}

const initialState: VideoState = {
  videos: [],
  currentVideo: null,
  loading: false,
  error: null,
};

const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    setVideos: (state, action: PayloadAction<Video[]>) => {
      state.videos = action.payload;
    },
    addVideo: (state, action: PayloadAction<Video>) => {
      state.videos.push(action.payload);
    },
    updateVideo: (state, action: PayloadAction<Video>) => {
      const index = state.videos.findIndex(video => video.id === action.payload.id);
      if (index !== -1) {
        state.videos[index] = action.payload;
      }
      if (state.currentVideo?.id === action.payload.id) {
        state.currentVideo = action.payload;
      }
    },
    deleteVideo: (state, action: PayloadAction<string>) => {
      state.videos = state.videos.filter(video => video.id !== action.payload);
      if (state.currentVideo?.id === action.payload) {
        state.currentVideo = null;
      }
    },
    setCurrentVideo: (state, action: PayloadAction<Video | null>) => {
      state.currentVideo = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const {
  setVideos,
  addVideo,
  updateVideo,
  deleteVideo,
  setCurrentVideo,
  setLoading,
  setError,
} = videoSlice.actions;

export default videoSlice.reducer; 