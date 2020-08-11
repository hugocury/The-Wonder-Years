import React from 'react';
import { HeaderWonder, Wrapper} from './styles';
import LogoWonder from '../LogoWonder';
import ButtonWonder from '../ButtonWonder';

function HeaderOpen() {
  return(
    <HeaderWonder>
      <Wrapper>
        <LogoWonder />

        <ButtonWonder as="a" href="/video/new">Extras</ButtonWonder>
      </Wrapper>
    </HeaderWonder>
  );
}

export default HeaderOpen;