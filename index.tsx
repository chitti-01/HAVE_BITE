import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './hooks/useAuth';
import { DonationProvider } from './hooks/useDonations';
import { CompostProvider } from './hooks/useCompost';
import { VideoProvider } from './hooks/useVideos';
import { HashRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <HashRouter>
      <AuthProvider>
        <DonationProvider>
          <CompostProvider>
            <VideoProvider>
              <App />
            </VideoProvider>
          </CompostProvider>
        </DonationProvider>
      </AuthProvider>
    </HashRouter>
  </React.StrictMode>
);