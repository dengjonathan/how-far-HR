import React from 'react';

const Hiker = ({image, location}) => {
  let style = {
    zIndex: 999,
    width: '30%',
    height: '40%',
    position: 'absolute',
  };
  return (
    <div className="hiker" style={style}>
      <img src={image}></img>
    </div>
  );
};

export default Hiker;