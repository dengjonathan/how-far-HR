import React from 'react';

const Mountain = ({image, style}) => {
  style['zIndex'] = -1;
  style['position'] = 'absolute';
  return (
    <div className="mountain"><img src={image} style={style}></img></div>
  );
};

export default Mountain