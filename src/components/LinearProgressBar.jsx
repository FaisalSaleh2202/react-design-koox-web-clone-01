import React from 'react';

function LinearProgressBar({ bgcolor, progress, maxWidth }) {
  const Child = {
    height: '5px',
    width: `${progress}px`,
    backgroundColor: bgcolor,
    maxWidth: maxWidth,
    textAlign: 'center',
  };

  return <p style={Child}></p>;
}

export default LinearProgressBar;
