import React from 'react';
import HeaderWonder from './components/HeaderWonder';
import LogoWonder from './components/LogoWonder';
import ButtonWonder from './components/ButtonWonder';
import FooterWonder from './components/FooterWonder';
import LinkWonder from './components/LinkWonder';
import HighlightWonder from './components/HighlightWonder';

function App() {
  return (
    <>
      <HeaderWonder>
        <LogoWonder />

        <ButtonWonder>Novo Vídeo</ButtonWonder>
      </HeaderWonder>

      <FooterWonder>
        <LogoWonder />
        <p>
          Desenvolvido por
          {' '}
          <LinkWonder href= "https://github.com/hugocury">Hugo Cury</LinkWonder>
          {' '}
          <HighlightWonder>#ImersãoAlura</HighlightWonder>
        </p>
      </FooterWonder>
    </>
  );
}

export default App;
