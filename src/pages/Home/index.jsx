import React, { useState } from 'react'
import {
  Container,
  Inicio,
  Sobre,
  Projetos,
  Contato,
  Fundo,
  Conteudo
} from './styles'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ButtonBackToTop from '../../components/ButtonBackToTop'
import ButtonChat from '../../components/ButtonChat'
import waves from '../../assets/waves.png'
import Apresentacao from '../../components/Apresentacao'
import MenuMobile from '../../components/MenuMobile'

export default function Home () {
  const [menuIsVisible, setMenuIsVisible] = useState(false)

  return (
    <>
      <Container>
        <MenuMobile
          menuIsVisible={menuIsVisible}
          setMenuIsVisible={setMenuIsVisible}
        />
        <Header setMenuIsVisible={setMenuIsVisible} />
        <Inicio id='home'>
          <Apresentacao />
          <Fundo src={waves} />
        </Inicio>

        <Sobre id='sobre'>
          <h1>Sobre mim</h1>
          <h1>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here's by accident, sometimes on purpose (injected humour
            and the like).
          </h1>
        </Sobre>

        <Projetos id='projetos'>
          <h1>Meus Projetos</h1>
          <h1>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            .
          </h1>
        </Projetos>

        <Contato id='contato'>
          <Conteudo style={{ alignItems: 'center' }}>
            <h1>Contato</h1>
            <ButtonChat />
          </Conteudo>
        </Contato>
        <Footer />

        <ButtonBackToTop />
      </Container>
    </>
  )
}
