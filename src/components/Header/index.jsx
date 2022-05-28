import React from 'react'
import { Container, Logo, Nav, Option, Button, Bars } from './styles'

export default function Header ({ setMenuIsVisible }) {
  return (
    <Container>
      <Bars onClick={() => setMenuIsVisible(true)} />
      <Logo>Portfolio</Logo>

      <Nav>
        <Option href='#home'>Home</Option>
        <Option href='#sobre'>Sobre</Option>
        <Option href='#projetos'>Projetos</Option>
      </Nav>

      <Button>
        <Option style={{ color: '#fff' }} href='#contato'>
          Contato
        </Option>
      </Button>
    </Container>
  )
}
