import React from 'react';
import { WrapperThumb, Thumb, Avatar, Background, Channel } from './styles';
import AvatarWonder from '../AvatarWonder';

function ThumbWonder({ src, alt, avatar, channelName }) {
  return (
    <Background>
      <WrapperThumb>
        <Thumb src={src} alt={alt}/>
        <AvatarWonder photo={avatar} channelName={channelName} />
      </WrapperThumb>
    </Background>
  );
}

export default ThumbWonder;