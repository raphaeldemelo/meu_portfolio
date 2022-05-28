import React, { useState } from 'react'
import { Container, Nav } from './styles'
import { IoIosClose } from 'react-icons/io'

export default function MenuMobile ({ menuIsVisible, setMenuIsVisible }) {
  return (
    <Container isVisible={menuIsVisible}>
      <IoIosClose
        size={30}
        color='#fff'
        style={{ position: 'absolute', top: '1rem', right: '1rem' }}
        onClick={() => setMenuIsVisible(false)}
      />

      <Nav>
        <a onClick={() => setMenuIsVisible(false)} href='#home'>
          Início
        </a>
        <a onClick={() => setMenuIsVisible(false)} href='#sobre'>
          Sobre
        </a>
        <a onClick={() => setMenuIsVisible(false)} href='#projetos'>
          Projetos
        </a>
        <a onClick={() => setMenuIsVisible(false)} href='#contato'>
          Contato
        </a>
      </Nav>
    </Container>
  )
}
