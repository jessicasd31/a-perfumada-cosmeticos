import styled from 'styled-components'

const Page = styled.article`
  width: 100%;
  min-height: 60vh;
  background-image: url('bg.jpg');
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  
  h2 {
    color: var(--secundary);
    font-size: 2em;
  }

  h1 {
    color: var(--primary);
    font-size: 1.5em;
  }

  h3 {
    color: var(--primary);
    font-size: 1.5em;
  }

  p {
    color: var(--gray);
    margin: 2rem 0 4rem;
    max-width: 60vw;

    strong {
      color: var(--grayMedium);
    }
  }

  img {
    max-width: 85vw;
  }
`

export default Page;