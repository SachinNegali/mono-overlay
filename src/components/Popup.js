import React from 'react';
import './Popup.css';

const Popup = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>×</button>
        <h1>WTF THO</h1>
        <h1>WTF THO</h1>
        <h1>WTF THO</h1>
        <h1>WTF THO</h1>
        <h1>WTF THO</h1>
        <h1>WTF THO</h1>
        <h1>WTF THO</h1>
        <h1>WTF THO</h1>
      </div>
    </div>
  );
};

export default Popup;
