import React from 'react';
import path from 'path';

const ChooseAvatar = ({imgPath, avatars, changeAvatar}) => {
  avatars = avatars.map(avatar => {
    let aPath = path.join(imgPath, avatar);
    let chooseAvatar = function() {changeAvatar(avatar)};
    return (<img className= "avatar" key={avatar} src={aPath} onClick={chooseAvatar}></img>)
  });

  return (
    <div className="chooseAvatar">
      <h2>Choose Avatar</h2>
      {avatars}
    </div>
  );
};

export default ChooseAvatar;