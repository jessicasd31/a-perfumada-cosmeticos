import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const LogoLink = styled(Link)`
  display: inline-flex;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 1;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 12px;
  }

  h1 {
    color: white;
    font-weight: normal;
    font-size: 20pt;
  }

  small {
    color: #92194F;
    letter-spacing: 4px;
    font-size: 10pt;
    text-transform: uppercase;
  }

`

const Logo = () => (
   <LogoLink to="/">
     <img src={require('../assets/logoaperfumadapeq.png')} alt="Logo A Perfumada"/>
     <div>
       <h1>A Perfumada</h1>
       <small>Cosméticos</small>
     </div>
   </LogoLink>
)

export default Logo;