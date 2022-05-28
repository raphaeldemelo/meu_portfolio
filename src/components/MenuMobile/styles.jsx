import styled from 'styled-components';

export const Container = styled.div`
position: fixed;
width: 100%;
height: 100%;
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index: 5;
display: flex;
align-items: center;
justify-content: center;
backdrop-filter: blur(3px);
background: rgba(17, 18, 17, 0.95);
opacity: 0;
pointer-events: none;
transition: 0.2s;

${({ isVisible }) => isVisible && `
opacity: 1;
pointer-events: auto;
`}
`;

export const Nav = styled.nav`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 2rem;
`;