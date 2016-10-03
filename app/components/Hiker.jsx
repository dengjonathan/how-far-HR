import React from 'react';

const Hiker = ({image, progress}) => {
  let style = {
    zIndex: 999,
    width: '',
    position: 'absolute',
    top: '10%',
    left: progress + '%'

  };
  return (
    <div className="hiker" style={style}>
      <img className="mainAvatar" src={image}></img>
    </div>
  );
};

export default Hiker;