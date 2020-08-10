import React from 'react';
import PropTypes from 'prop-types';
import { WrapperAvatar, Avatar, Channel } from './styles';

function AvatarWonder( {photo, channelName }) {
  return (
    <WrapperAvatar>
      <Avatar src={photo} alt={channelName} />
      <Channel>{channelName}</Channel>
    </WrapperAvatar>
  )
}

AvatarWonder.propTypes = {
  photo: PropTypes.string.isRequired,
  channel: PropTypes.string.isRequired,
}

export default AvatarWonder;