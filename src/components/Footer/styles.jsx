import styled from 'styled-components'

export const Container = styled.footer`
  background-color: var(--background-section-light);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100px;
  width: 100vw;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    postition: fixed;
    padding: 10px;
    height: 100px;
  }
`

export const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`

export const Option = styled.a`
  border: 0;
  transition: ease-in 0.2s;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    background: var(--color-gradient);
    transform: scale(1.2);
  }
`

export const Texto = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  color: var(--white);
  margin-left: 50px;
  display: inline-block;
  position: relative;

  :after {
    content: ' ';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: -2px;
    left: 0;
    background: var(--color-gradient);
    transform-origin: bottom left;
    transition: transform 0.15s ease-out;
  }

  :hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`

export const Titulo = styled.span`
  font-size: 1rem;
  margin-right: 1rem;
  color: var(--color-orange);
`

export const Article = styled.section`
  height: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 30%;

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`
