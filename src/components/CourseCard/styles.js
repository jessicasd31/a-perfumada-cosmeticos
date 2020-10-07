import styled from 'styled-components'

export const CardContent = styled.div`
  border: 3px solid black;
  display: flex;
  align-items: center;
  max-width: 25vw;
  flex-direction: column;
  margin: 2rem 1rem 0;
  padding: 2rem 3rem;

  h1 {
    color: var(--primary);
    font-size: 1.2em;
  }

  h2 {
    color: var(--secundary);
    font-size: 1em;
    text-transform: uppercase;
  }

  h3 {
    color: var(--grayMedium);
    font-size: 1em;
  }

  img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    margin: 1rem 0;
  }

  span { 
    color: var(--gray);
  }

  div {
    margin-bottom: 2rem;
  }

  &:hover, &:active {
    border: 2px solid var(--secundary);
  }

  @media (max-width: 800px) {
    min-width: 80vw;
    
    div {
      margin: 1rem 0;
    }

    p {
      display: none;
    }
  }
`