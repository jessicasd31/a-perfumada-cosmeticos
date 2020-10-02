import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Logo from './Logo'

const HeaderContainer = styled.nav`
  width: 100%;
  padding: 2rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #121618;
  color: white;
`

const NavList = styled.ul`
  display: inline-flex;
  list-style: none;
`

const Liink = styled(Link)`
    margin: 0 1.5rem;
    text-decoration: none;
    color: white;
    opacity: 0.8;

    &:hover {
      cursor: pointer;
      color: #92194F;
    }
`

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <NavList>
        <li>
          <Liink to="/">Home</Liink>
        </li>
        <li>
          <Liink to="/">Sobre</Liink>
        </li>
        <li>
          <Liink to="/">Cursos</Liink>
        </li>
        <li>
          <Liink to="/">Contato</Liink>
        </li>
      </NavList>
    </HeaderContainer>
  )
}

export default Header;