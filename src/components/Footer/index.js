import React from 'react'
import Logo from '../Logo'
import { Link } from 'react-router-dom'
import { 
  FooterContainer, 
  ContentInfos, 
  TextInfo, 
  IconsMedia
} from './styles'


const Footer = () => (
  <FooterContainer>
    <Logo />
    <IconsMedia>
      <Link to="">
        <i className="fa fa-facebook fa-lg" aria-hidden="true" />
      </Link>
      <Link to="">  
        <i className="fa fa-instagram fa-lg" aria-hidden="true" />
      </Link>
    </IconsMedia>
    <ContentInfos>
      <TextInfo>
        <i className="fa fa-phone" aria-hidden="true" />
        <span>
          +55 (84) 3412-1782
          <p>+55 (84) 99818-9647</p>
        </span>
      </TextInfo>
      <TextInfo>
        <i className="fa fa-map-marker" aria-hidden="true" />
        <span>
          Rua Escrivão Antônio Quintino, 43, Centro.
          Currais Novos/RN.
        </span>
      </TextInfo>
      <TextInfo>
        <i className="fa fa-clock-o" aria-hidden="true" />
        <span>
          segunda à sexta: 
          <p>08:00 - 12:00 / 14:00 - 17:30.</p>
          <p>sábado: 08:00 - 12:00</p>
        </span>
      </TextInfo>
      <TextInfo>  
        <i className="fa fa-envelope" aria-hidden="true" />
        <p>aperfumada@mail.com</p>
      </TextInfo>
    </ContentInfos>
  </FooterContainer>
)

export default Footer;