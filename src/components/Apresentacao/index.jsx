import React from 'react'
import { Container, Titulo, Texto, Imagem, Conteudo, Frase } from './styles'
import ButtonDownload from '../ButtonDownload'

export default function Apresentacao () {
  return (
    <Container>
      <Conteudo>
        <Frase>
          <Texto>Olá,</Texto> eu sou
        </Frase>
        <Titulo>Raphael de Melo</Titulo>
        <Texto>
          Desenvolvedor web <Frase>e</Frase> mobile
        </Texto>
        <ButtonDownload />
      </Conteudo>
      <Conteudo>
        <Imagem src='https://source.unsplash.com/random' />
      </Conteudo>
    </Container>
  )
}
