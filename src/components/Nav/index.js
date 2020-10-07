import React from 'react'
import { HeaderContainer,
NavList,
LinkNav
} from './styles'

const Header = () => {
  return (
    <HeaderContainer>
      <img src={require('../../assets/logo.svg')} alt="Logo A Perfumada Cosméticos" />
      <NavList>
        <li>
          <LinkNav to="/">Home</LinkNav>
        </li>
        <li>
          <LinkNav to="/sobre">Sobre</LinkNav>
        </li>
        <li>
          <LinkNav to="/cursos">Cursos</LinkNav>
        </li>
        <li>
          <LinkNav to="/contato">Contato</LinkNav>
        </li>
      </NavList>
    </HeaderContainer>
  )
}

export default Header;