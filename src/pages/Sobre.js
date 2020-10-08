import React from 'react'
import styled from 'styled-components'

import Nav from '../components/Nav'
import Page from '../components/Page'
import Footer from '../components/Footer'

const Main = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;

  img {
    width: 40vw;
  }

  div {
    padding: 0 5rem;
    text-align: justify;
    flex: 1;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;

    img {
      width: 60vw;
      margin: 1rem 0 2rem;
    }

    div {
      padding: 0;
      text-align: center;
      flex: 1;

      p {
        max-width: 80vw;
        text-align: justify;
      }
    }
  }
`

const Sobre = () => (
  <div>      
    <Nav />
    <Page>
      <Main>
        <img src={require('../assets/sobre.png')} alt="Foto da equipe gestora A perfumada" />
        <div>
          <h2>A Perfumada Cosméticos</h2>
          <p><strong>A Perfumada Cosméticos</strong> surgiu há 11 anos na cidade de Currais Novos/RN através de Zefinha. Hoje toda a loja, cursos e funcionários são geridos por ela e suas filhas. A Perfumada é um exemplo de ótimo atendimento e varidade em seus produtos. A história da loja é uma das principais referências no ramo da beleza em toda a região, inclusive em outras cidades também como Acari, Lagoa Nova, Caicó e redondezas.</p>
          <img src={require('../assets/equipec.png')} alt="Equipe A Perfumada" />
        </div>
      </Main>
    </Page>
    <Footer />
  </div>
)

export default Sobre;
