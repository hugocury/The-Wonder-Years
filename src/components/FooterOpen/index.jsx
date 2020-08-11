import React from 'react';
import FooterWonder from './styles';
import LogoWonder from '../LogoWonder';
import LinkWonder from '../LinkWonder';
import LogoReact from '../LogoReact';

function FooterOpen() {
  return (
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
  );
}

export default FooterOpen;
