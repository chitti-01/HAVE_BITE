import React, { createContext, useState, useContext, useMemo, useCallback } from 'react';
import { EntertainmentVideo } from '../types';
import { DUMMY_VIDEOS as initialVideos, addDummyVideo, removeDummyVideo } from '../data/dummyData';

interface VideoContextType {
  videos: EntertainmentVideo[];
  addVideo: (video: Omit<EntertainmentVideo, 'id'>) => void;
  deleteVideo: (videoId: string) => void;
}

const VideoContext = createContext<VideoContextType | null>(null);

export const VideoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [videos, setVideos] = useState<EntertainmentVideo[]>(initialVideos);

  const addVideo = useCallback((newVideoData: Omit<EntertainmentVideo, 'id'>) => {
    const newVideo: EntertainmentVideo = {
        id: `vid-${Date.now()}`,
        ...newVideoData,
    };
    addDummyVideo(newVideo); // for persistence in dummy data
    setVideos(prevVideos => [newVideo, ...prevVideos]);
  }, []);

  const deleteVideo = useCallback((videoId: string) => {
    removeDummyVideo(videoId); // for persistence in dummy data
    setVideos(prevVideos => prevVideos.filter(video => video.id !== videoId));
  }, []);

  const value = useMemo(() => ({ videos, addVideo, deleteVideo }), [videos, addVideo, deleteVideo]);

  return (
    <VideoContext.Provider value={value}>
      {children}
    </VideoContext.Provider>
  );
};

export const useVideos = () => {
  const context = useContext(VideoContext);
  if (!context) {
    throw new Error('useVideos must be used within a VideoProvider');
  }
  return context;
};
