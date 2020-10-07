import React from 'react'
import { Link } from 'react-router-dom'
import { CardContent } from './styles'

const Card = (props) => {
  const { course, instructor, instructorImg, instructorProfession, description, beggining, hours, price } = props;

  return(
    <CardContent>
      <h1>{ course }</h1>
      <img src={instructorImg} alt="Foto instrutor do curso" />
      <h2>{ instructor }</h2>
      <h3>{ instructorProfession }</h3>
      <p>{ description }</p>
      <div>
        <h3>Início: <span>{ beggining }</span></h3>
        <h3>Carga horária: <span>{ hours }</span></h3>
        <h3>Investimento: <span>{ price }</span></h3>
      </div>
      <Link to="/">Saiba mais...</Link>
    </CardContent>
  )
}

export default Card;
