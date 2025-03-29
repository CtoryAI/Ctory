import React, { useState, useEffect } from 'react';
import { Video, VideoPreviewProps } from '../../types';
import './styles.css';

const VideoPreview: React.FC<VideoPreviewProps> = ({ video, onStatusChange }) => {
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    if (video.status === 'ready') {
      const videoElement = document.getElementById('video-player') as HTMLVideoElement;
      if (videoElement) {
        videoElement.addEventListener('loadedmetadata', () => {
          setDuration(videoElement.duration);
        });

        videoElement.addEventListener('timeupdate', () => {
          setCurrentTime(videoElement.currentTime);
        });
      }
    }
  }, [video.status]);

  const handlePlayPause = (): void => {
    const videoElement = document.getElementById('video-player') as HTMLVideoElement;
    if (videoElement) {
      if (isPlaying) {
        videoElement.pause();
      } else {
        videoElement.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const time = parseFloat(e.target.value);
    const videoElement = document.getElementById('video-player') as HTMLVideoElement;
    if (videoElement) {
      videoElement.currentTime = time;
      setCurrentTime(time);
    }
  };

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="video-preview">
      <div className="video-container">
        {video.status === 'ready' ? (
          <video
            id="video-player"
            src={video.url}
            poster={video.thumbnail}
            className="video-player"
          />
        ) : (
          <div className="video-placeholder">
            <div className="status-message">
              {video.status === 'processing' ? 'Processing video...' : 'Loading video...'}
            </div>
          </div>
        )}
      </div>

      <div className="video-controls">
        <button
          onClick={handlePlayPause}
          className="control-button"
          disabled={video.status !== 'ready'}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>

        <div className="time-control">
          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={handleTimeUpdate}
            className="time-slider"
          />
          <span className="time-display">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>
        </div>
      </div>

      <div className="video-info">
        <h3>Video Details</h3>
        <p>Status: {video.status}</p>
        <p>Created: {new Date(video.createdAt).toLocaleString()}</p>
      </div>
    </div>
  );
};

export default VideoPreview; 