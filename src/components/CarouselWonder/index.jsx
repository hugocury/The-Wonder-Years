import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CarouselStyle, Wrapper, Left, Right } from './styles';
import ThumbWonder from '../Thumbwonder';

function CarouselWonder({ videos }) { 
  const [move, setMove] = useState(0);

  function actionRight() {
    setMove((oldMove) => oldMove - 1);
  }

  function actionLeft() {
    setMove((oldMove) => oldMove + 1);
  }

  function leftShow() {
    return move < 0;
  }

  return (
    <CarouselStyle leftShow={leftShow()} rightShow={true} >
      <Left onClick={actionLeft}/>
      <Wrapper move={move}>
        {videos.map(({src, alt, title, avatar, channelName, link}) => (
          <ThumbWonder 
          src={src}
          alt={alt}
          title={title}
          avatar={avatar}
          channelName={channelName}
          link={link} 
          />
        ))}
      </Wrapper>
      <Right onClick={actionRight}/>
    </CarouselStyle>
  );
}

const typeVideo = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    channelName: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

CarouselWonder.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.shape(typeVideo)).isRequired,
};

export default CarouselWonder;