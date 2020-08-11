import React from 'react';
import { BannerWonder, Text } from './components/BannerWonder';
import TagWonder from './components/TagWonder';
import TitleWonder from './components/TilteWonder';
import DescriptionWonder from './components/DescriptionWonder';
import ThumbWonder from './components/Thumbwonder';
import thumb from './assets/img/thumb.png';
import wonder from './assets/img/wonder.jpg';
import HeaderOpen from './components/HeaderOpen/index';
import FooterOpen from './components/FooterOpen';
import SectionWonder from './components/SectionWonder';

function App() {
  return (
    <>
      <HeaderOpen />  

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

      <SectionWonder>
        <TagWonder>Season 1</TagWonder>

        <DescriptionWonder>(1988)</DescriptionWonder>
      </SectionWonder>

      <FooterOpen />
    </>
  );
}

export default App;
