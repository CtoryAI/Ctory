import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Story {
  id: string;
  title: string;
  prompt: string;
  style: string;
  duration: number;
  status: 'draft' | 'generating' | 'completed' | 'error';
  createdAt: string;
  updatedAt: string;
}

interface StoryState {
  stories: Story[];
  currentStory: Story | null;
  loading: boolean;
  error: string | null;
}

const initialState: StoryState = {
  stories: [],
  currentStory: null,
  loading: false,
  error: null,
};

const storySlice = createSlice({
  name: 'story',
  initialState,
  reducers: {
    setStories: (state, action: PayloadAction<Story[]>) => {
      state.stories = action.payload;
    },
    addStory: (state, action: PayloadAction<Story>) => {
      state.stories.push(action.payload);
    },
    updateStory: (state, action: PayloadAction<Story>) => {
      const index = state.stories.findIndex(story => story.id === action.payload.id);
      if (index !== -1) {
        state.stories[index] = action.payload;
      }
      if (state.currentStory?.id === action.payload.id) {
        state.currentStory = action.payload;
      }
    },
    deleteStory: (state, action: PayloadAction<string>) => {
      state.stories = state.stories.filter(story => story.id !== action.payload);
      if (state.currentStory?.id === action.payload) {
        state.currentStory = null;
      }
    },
    setCurrentStory: (state, action: PayloadAction<Story | null>) => {
      state.currentStory = action.payload;
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
  setStories,
  addStory,
  updateStory,
  deleteStory,
  setCurrentStory,
  setLoading,
  setError,
} = storySlice.actions;

export default storySlice.reducer; 