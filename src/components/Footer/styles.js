import styled from 'styled-components'

export const FooterContainer = styled.footer`
  width: 100%;
  left: 0;
  bottom: 0;
  background-color: #121618;
  padding: 2rem 6rem;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  min-height: 20vh;
  max-height: 30vh;
  align-items: space-around;
  align-content: space-around;
  border-top: 1px dashed var(--primary);

  .fa-facebook, .fa-instagram {
    background-color: var(--blackLighter);
    width 40px;
    height: 40px;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 14vw;
  }

  @media (max-width: 800px) {
    max-height: 70vh;
    padding: 2rem;
    flex-flow: column wrap;

    img {
      width: 40vw;
      align-self: center;
    }

    .fa-facebook, .fa-instagram {
      width: 30px;
      height: 30px;
      font-size: 12pt;
    }
  }
`

export const ContentInfos = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap; 
  flex: 1;
  width: 55%;
  align-items: baseline;

  @media (max-width: 600px) {
    width: 95%;
  }
`

export const TextInfo = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: start;
  padding-bottom: 1.5rem;
  padding-right: 6rem;
  width: 50%;
  font-size: 0.8em;

  @media (max-width: 1200px) {
    font-size: 0.5em; 
    padding: 0.2rem;
  }

  i {
    margin-right: 10px;
  }
`
export const IconsMedia = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  justify-content: center;
  flex-direction: row;
  margin: 1rem 0;
`