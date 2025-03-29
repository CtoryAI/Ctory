import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import StoryEditor from './components/StoryEditor';
import VideoPreview from './components/VideoPreview';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<StoryEditor />} />
        <Route path="/preview/:id" element={<VideoPreview />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default App; 