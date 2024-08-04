// components/EyesOnMe.js
import React from 'react';

function EyesOnMe() {
  // Event handler for when the button gains focus
  const handleFocus = () => {
    console.log('Good!');
  };

  // Event handler for when the button loses focus
  const handleBlur = () => {
    console.log('Hey! Eyes on me!');
  };

  return (
    <button 
      onFocus={handleFocus}  // Attach focus event handler
      onBlur={handleBlur}    // Attach blur event handler
    >
      Eyes on me
    </button>
  );
}

export default EyesOnMe;
