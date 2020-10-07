import React from 'react'
import styled from 'styled-components'

import Nav from '../components/Nav'
import Page from '../components/Page'
import CourseCard from '../components/CourseCard'
import Footer from '../components/Footer'

const Cards = styled.section`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  justify-content: center;
`

const courses = [
  {
    course: "Auto maquiagem",
    instructor: "Isadora Silva",
    instructorImg: require('../assets/3.png'),
    instructorProfession: "Maquiadora Profissional",
    description: "O curso de auto maquiagem vai abranger todas as tecnicas desde a preparação da pele ao acabemento da maquiagem.",
    beggining: "10/11/2020",
    hours: "15 horas",
    price: "R$ 150,00"
  },
  {
    course: "Mechas",
    instructor: "Izabelly cristina",
    instructorImg: require('../assets/1.png'),
    instructorProfession: "Hair stylist",
    description: "O curso de mechas vai abranger todas as tecnicas desde à escolha das cores baseado no tom de pele do cliente ao tratamento de fios muito desgastados.",
    beggining: "10/11/2020",
    hours: "15 horas",
    price: "R$ 150,00"
  },
  {
    course: "Atendimento ao cliente",
    instructor: "Zefinha",
    instructorImg: require('../assets/5.png'),
    instructorProfession: "Empresária",
    description: "O curso de atendimento ao cliente vai abranger todas as tecnicas desde análise de mercado à atendimento do cliente em loja física e virtual.",
    beggining: "10/11/2020",
    hours: "15 horas",
    price: "R$ 150,00"
  }
]


const Cursos = () => (
  <div>      
    <Nav />
    <Page>
      <h1>Nossos cursos</h1>
      <Cards>
      { courses.map(course => (
        <CourseCard key={course.course} {...course}/>
      ))}
      </Cards>
    </Page>
    <Footer />
  </div>
)

export default Cursos;
