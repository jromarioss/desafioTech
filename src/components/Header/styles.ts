import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100vw;
  height: 6.8125rem;
  display: flex;
  align-items: center;
  padding-left: 29rem;
  background-color: ${props => props.theme['gray-300']};

  @media(max-width: 1536px) {
    padding-left: 18rem;
  }

  @media(max-width: 1440px) {
    padding-left: 15rem;
  }

  @media(max-width: 1024px) {
    padding-left: 1.5rem;
  }

  @media(max-width: 428px) {
    height: 5.375rem;
    padding-left: 2rem;
  }

  @media(max-width: 320px) {
    height: 4rem;
    padding-left: 1.5rem;
  }

  p {
    font-size: 1.875rem;
    font-weight: bold;
    color: ${props => props.theme['gray-100']};

    @media(max-width: 428px) {
      font-size: 1.5rem;
    }
  }
`;
