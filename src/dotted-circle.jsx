import React from 'react';

const BgDottedCircle = ({ top, left, bottom, right, width='200px', height='200px',degrees = 135 }) => {
  const style = {
    position: 'absolute',
    zIndex: -1,
    top,
    left,
    bottom,
    right,
    width,
    height,
    borderRadius: '50%',
    background: `linear-gradient(${degrees}deg, #2D5CFF 0%, rgba(45, 49, 144, 0) 90%)`,
    WebkitMask: `
      radial-gradient(farthest-side, transparent calc(100% - 3px), black calc(100% - 1px)) 
      0 0/100% 100%, 
      repeating-conic-gradient(transparent 0deg, transparent 10deg, black 10deg, black 20deg)
    `,
    maskComposite: 'intersect',
    WebkitMaskComposite: 'source-in',
  };

  return <div className='bg-dotted-circle' style={style} />;
};

export default BgDottedCircle;