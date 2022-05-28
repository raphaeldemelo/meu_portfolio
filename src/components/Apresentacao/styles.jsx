import styled from 'styled-components'

export const Container = styled.main`
  width: 90%;
  height: 100vh;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10rem;

  @media (max-width: 768px) {
    gap: 1rem;
    width: 50%;
  }
`

export const Titulo = styled.h1`
  width: 100%;
  animation: digitando 4s steps(40), blink 0.5s infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid var(--color-orange);

  @keyframes digitando {
    from {
      width: 0;
    }
  }

  @keyframes blink {
    40% {
      border-color: transparent;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 900px) {
    font-size: 1.5rem;
  }
`

export const Frase = styled.span`
  @media (max-width: 768px) {
    font-size: 0.92rem;
  }

`

export const Texto = styled.span`
  background-image: var(--color-gradient);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;

  @media (max-width: 768px) {
    font-size: .92rem;
  }
`

export const Imagem = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`

export const Conteudo = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 200px;
    height: 200px;
  }
`
