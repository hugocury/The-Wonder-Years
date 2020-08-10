import React from 'react';
import PropTypes from 'prop-types';
import { WrapperThumb, Thumb, Background, Title} from './styles';
import AvatarWonder from '../AvatarWonder/index';

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

ThumbWonder.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  channelName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default ThumbWonder;