import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderContainer = styled.nav`
  width: 100%;
  padding: 2rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--bgBlack);
  color: var(--primary);

  img {
    width: 16vw;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    padding: 1.6rem 4rem;
    
    img {
      width: 55vw;
    }
  }
`

const NavList = styled.ul`
  display: inline-flex;
  list-style: none;

  @media (max-width: 800px) {
    margin-top: 1.8rem;
  }
`

const LinkNav = styled(Link)`
    margin: 0 1.5rem;
    opacity: 0.8;

    &:hover, &:active {
      color: var(--secundary);
    }

    @media (max-width: 800px) {
      margin: 0 0.5rem;
      flex: 1;
      font-size: 12pt;
    }
`

const Header = () => {
  return (
    <HeaderContainer>
      <img src={require('../assets/logo.svg')} alt="Logo A Perfumada Cosméticos" />
      <NavList>
        <li>
          <LinkNav to="/">Home</LinkNav>
        </li>
        <li>
          <LinkNav to="/">Sobre</LinkNav>
        </li>
        <li>
          <LinkNav to="/">Cursos</LinkNav>
        </li>
        <li>
          <LinkNav to="/">Contato</LinkNav>
        </li>
      </NavList>
    </HeaderContainer>
  )
}

export default Header;