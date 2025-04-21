import React from 'react';
import ResumeViewer from './components/ResumeViewer';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <div className="app-container">
        <h1>Vedant&apos;s Resume</h1>
        <ResumeViewer />
      </div>
      <Analytics />
    </>
  );
}

export default App;
