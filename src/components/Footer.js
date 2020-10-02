import React from 'react'
import styled from 'styled-components'

import Logo from './Logo'

const FooterContainer = styled.footer`
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: #121618;
  display: flex;
  justify-content: center;
  padding: 2rem 0;

  h1, img {
    opacity: 0.8;
  }
`

const Footer = () => (
  <FooterContainer>
    <Logo />
  </FooterContainer>
)

export default Footer;