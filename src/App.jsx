import React from 'react';
import ResumeViewer from './components/ResumeViewer';

function App() {
  return (
    <div className="app-container">
      <h1>Vedant's Resume <span className="subtitle">(He is the best SDE I know lol)</span></h1>
      <ResumeViewer />
    </div>
  );
}

export default App;