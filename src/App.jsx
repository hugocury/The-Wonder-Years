import React from 'react';
import { HeaderWonder, Wrapper } from './components/HeaderWonder';
import LogoWonder from './components/LogoWonder';
import ButtonWonder from './components/ButtonWonder';
import FooterWonder from './components/FooterWonder';
import LinkWonder from './components/LinkWonder';
// import HighlightWonder from './components/HighlightWonder';
import LogoReact from './components/LogoReact';
import { BannerWonder, Text } from './components/BannerWonder';
import TagWonder from './components/TagWonder';
import TitleWonder from './components/TilteWonder';
import DescriptionWonder from './components/DescriptionWonder';
import ThumbWonder from './components/Thumbwonder';
import thumb from './assets/img/thumb.png';
import wonder from './assets/img/wonder.jpg';

function App() {
  return (
    <>
      <HeaderWonder>
        <Wrapper>
        <LogoWonder />

        <ButtonWonder as="a" href="/video/new">Novo Vídeo</ButtonWonder>
        </Wrapper>
      </HeaderWonder>

      <BannerWonder>
        <Text>
          <TagWonder>Anos Incíveis</TagWonder>
          <TitleWonder>Whith a little help from my friends</TitleWonder>
          <DescriptionWonder>
            Para quem teve o prazer de assistir à essa série nos anos 90
          </DescriptionWonder>
        </Text>

        <ThumbWonder
          src={thumb}
          alt="Thumb Wonder Years"
          title="Melhor abertura série de todos os tempos"
          avatar={wonder}
          channelName="The Wonder Years"
        />        
      </BannerWonder>

      <FooterWonder>
        <LogoWonder />
        <p>
          Desenvolvido por
          {' '}
          <LinkWonder href= "https://github.com/hugocury">Hugo Cury</LinkWonder>
          {' '}
          <a href= "https://www.alura.com.br"><LogoReact/></a>
        </p>
      </FooterWonder>
    </>
  );
}

export default App;
