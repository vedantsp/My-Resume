import React from 'react';

const ResumeViewer = () => {
  // PDF URL from public folder
  const pdfUrl = process.env.PUBLIC_URL + '/Vedant_SDE_Resume.pdf';

  return (
    <div className="resume-viewer">
      {/* Download button above the viewer */}
      <a href={pdfUrl} download className="download-button">
        Download Resume
      </a>
      <iframe
        src={pdfUrl}
        title="Resume"
        className="resume-frame"
      />
    </div>
  );
};

export default ResumeViewer;