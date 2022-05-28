import React from 'react'
import { BtnBackToTop } from './styles'
import { FiArrowUp } from 'react-icons/fi'

function backToTop () {
  window.scrollTo(0, 0)
}

export default function ButtonBackToTop () {
  return (
    <BtnBackToTop onClick={() => backToTop()}>
      <FiArrowUp size={30} color='#fff' />
    </BtnBackToTop>
  )
}
