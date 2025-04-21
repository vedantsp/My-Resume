import React from 'react';
import ResumeViewer from './components/ResumeViewer';
// ① Import the Analytics component
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
<<<<<<< HEAD
    <div className="app-container">
      <h1>Vedant's Resume</h1>
      <ResumeViewer />
    </div>
=======
    <>
      <div className="app-container">
        <h1>
          Vedant&apos;s Resume
        </h1>
        <ResumeViewer />
      </div>

      {/* ② Add Analytics at the root of your tree */}
      <Analytics />
    </>
>>>>>>> 85c3e66 (Integrate Vercel Analytics React wrapper into App.jsx)
  );
}

export default App;
