import React from 'react';

const GrainTexture = ({
  opacity = 0.04,
  blendMode = 'multiply',
  zIndex = 9999,
  animated = false,
}) => {
  return (
    <div
      className={`grain-overlay${animated ? ' grain-animated' : ''}`}
      aria-hidden="true"
      style={{
        '--grain-opacity': opacity,
        '--grain-blend': blendMode,
        '--grain-z': zIndex,
      }}
    />
  );
};

export default GrainTexture;
