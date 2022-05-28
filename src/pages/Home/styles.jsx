import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`
export const Inicio = styled.section`
  background-color: var(--background-section-light);
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Conteudo = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
  flex: 1;
`

export const Imagem = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 50%;
`

export const Fundo = styled.img`
  width: 100%;
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
`

export const Texto = styled.span`
  background-image: var(--color-gradient);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
`

export const Sobre = styled.section`
  background-color: var(--background-section-dark);
`
export const Projetos = styled.section`
  background-color: var(--background-section-light);
`
export const Contato = styled.section`
  background-color: var(--background-section-dark);
`
