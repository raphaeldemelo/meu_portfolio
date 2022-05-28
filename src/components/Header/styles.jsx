import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100vw;
  height: 100vh;
  background-color: var(--background-section-light);
  position: relative;
  padding: 10px 0px 10px 0px;
`

export const Logo = styled.h2`
  background: var(--color-gradient);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;

  @media (max-width: 768px) {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    height: 8vh;
  }
`

export const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`

export const Option = styled.a`
  text-decoration: none;
  color: var(--white-second);
  font-weight: bold;

  @media (max-width: 768px) {
    display: none;
  }

  :hover {
    background: var(--color-orange);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
  }
`

export const Button = styled.button`
  background: var(--color-gradient);
  width: 100px;
  height: 40px;
  display: flex;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  font-weight: bold;

  @media (max-width: 768px) {
    display: none;
  }
`

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`
