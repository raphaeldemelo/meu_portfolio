import React from 'react'
import { Container, Button } from './styles'
import curriculo from '../../assets/curriculo.pdf'

export default function ButtonDownload () {
  return (
    <Container>
      <a
        target='_blank'
        href={curriculo}
        download='curriculo - Raphael.pdf'
        type='application/pdf'
      >
        <Button type='button'>Download CV</Button>
      </a>
    </Container>
  )
}
