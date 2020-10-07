import React from 'react'
import styled from 'styled-components'

import Nav from '../components/Nav'
import Page from '../components/Page'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Nav />
      <Page>
        <h3>BEM VINDO AO</h3>
        <h2>CENTRO DE TREINAMENTO</h2>
        <h1>A PERFUMADA</h1>
        <p>Há 11 anos <strong>A Perfumada Cosméticos</strong> vem formando  profissionais na área da beleza através de cursos ministrados por profissionais renomados em suas respectivas áreas. O <strong>Centro de treinamento A Perfumada</strong> foi inaugurado em 11/11/2015 proporcionando aos nossos clientes e amigos a oportunidade de terem a melhor formação com os melhores profissionais sem precisarem sair da nossa região.</p>
        <img src={require('../assets/coursesphotos.png')} alt="Photos cursos A Perfumada" />
      </Page>
      <Footer />
    </div>
  )
}

export default Home;