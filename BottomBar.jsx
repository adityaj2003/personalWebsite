// BottomBar.jsx
import React from 'react';
import './BottomBar.css'; // Ensure you have the CSS file created

const BottomBar = () => {
  return (
    <div id="bottomBar">
      <a href="https://github.com/adityaj2003" className="socialLink" target="_blank" rel="noopener noreferrer">
        <img src="/github.png" alt="GitHub" />
      </a>
      <a href="https://twitter.com/Adi_not_Aadi" className="socialLink" target="_blank" rel="noopener noreferrer">
        <img src="/twitter.png" alt="Twitter" />
      </a>
      <a href="https://www.linkedin.com/in/adityarjadhav" className="socialLink" target="_blank" rel="noopener noreferrer">
        <img src="/linkedin.png" alt="LinkedIn" />
      </a>
      <a href="mailto:adityaj2003@gmail.com" className="socialLink" target="_blank" rel="noopener noreferrer">
        <img src="/gmail.png" alt="Mail" />
      </a>
    </div>
  );
};

export default BottomBar;

