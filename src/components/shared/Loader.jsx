import React from 'react';
import './Loader.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
const Loader = () => {
  return (
    <div className="loader-overlay">
      <div className="loader-spinner"></div>
    </div>
  );
};

export default Loader;