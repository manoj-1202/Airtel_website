import React from 'react';
import logoImage from '../assets/img/logo1.png';

const Logo = ({ height = 60 }) => {
  return (
    <img 
      src={logoImage} 
      alt="Chennai Fibernet" 
      style={{ height: `${height}px`, width: 'auto' }}
      className="transition-transform hover:scale-105 p-1"
    />
  );
};

export default Logo; 