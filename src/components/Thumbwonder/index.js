import React from 'react';
import { WrapperThumb, Thumb, Avatar, Background } from './styles';

function ThumbWonder({ src, alt, avatar, channelName }) {
  return (
    <Background>
    <WrapperThumb>
        <Thumb src={src} alt={alt}/>
        <Avatar src={avatar} alt={channelName} />
      </WrapperThumb>
    </Background>
  );
}

export default ThumbWonder;