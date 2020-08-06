import React from 'react';
import { WrapperThumb, Thumb, Background, Title} from './styles';
import AvatarWonder from '../AvatarWonder';

function ThumbWonder({ src, alt, avatar, channelName, title }) {
  return (
    <Background>
      <WrapperThumb>
        <Thumb src={src} alt={alt}/>
        <AvatarWonder photo={avatar} channelName={channelName} />
        <Title>{title}</Title>
      </WrapperThumb>
    </Background>
  );
}

export default ThumbWonder;