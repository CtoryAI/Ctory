export interface User {
  id: string;
  address: string;
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

export interface Story {
  id: string;
  title: string;
  prompt: string;
  style: string;
  duration: number;
  status: 'draft' | 'generating' | 'completed' | 'error';
  createdAt: string;
  updatedAt: string;
  userId: string;
}

export interface Video {
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
  userId: string;
}

export interface RootState {
  auth: AuthState;
  story: {
    stories: Story[];
    currentStory: Story | null;
    loading: boolean;
    error: string | null;
  };
  video: {
    videos: Video[];
    currentVideo: Video | null;
    loading: boolean;
    error: string | null;
  };
}

export interface VideoPreviewProps {
  video: Video;
  onStatusChange?: (status: string) => void;
} 