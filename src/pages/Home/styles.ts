import { styled } from 'styled-components'

export const HomeContainer = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10rem;
`;

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2.5rem 3.625rem;
  border-radius: 25px;
  background-color: ${props => props.theme['gray-100']};

  @media (max-width: 428px) {
    padding: 1.5rem 2rem;
  }

  @media (max-width: 376px) {
    padding-inline: 1.75rem;
  }

  @media (max-width: 320px) {
    padding: 1rem 1.5rem;
  }

  p {
    width: 100%;
    margin-bottom: 2.75rem;
    font-size: 2.5rem;
    font-weight: bold;
    color: ${props => props.theme['gray-300']};

    @media (max-width: 428px) {
      font-size: 2rem;
      margin-bottom: 1.5rem;
    }

    @media (max-width: 320px) {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2.25rem;

    @media (max-width: 428px) {
      gap: 0.5rem;
    }
  }

  span {
    font-size: 1rem;
    padding-left: 1rem;
    font-weight: bold;
    color: ${props => props.theme['red']};
  }

  input {
    width: 30.375rem;
    height: 5.1875rem;
    border-radius: 42px;
    padding-left: 2rem;
    color: ${props => props.theme['gray-300']};
    background-color: ${props => props.theme['gray-200']};
    font-size: 2rem;

    @media (max-width: 428px) {
      width: 18.75rem;
      height: 4rem;
      padding-left: 1.5rem;
      font-size: 1.5rem;
    }

    @media (max-width: 376px) {
      width: 17.5rem;
      height: 3.5rem;
    }

    @media (max-width: 320px) {
      width: 15rem;
      height: 3rem;
      font-size: 1rem;
    }
  }
`;

export const Button = styled.button`
  all: unset;
  width: 30.375rem;
  height: 5.1875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: ${props => props.theme['gray-100']};
  background-color: ${props => props.theme['gray-300']};
  border-radius: 42px;
  border: 2px solid transparent;
  font-size: 1.875rem;
  transition: .5s;

  &:hover {
    color: ${props => props.theme['gray-300']};
    background-color: ${props => props.theme['gray-100']};
    border: 2px solid ${props => props.theme['gray-300']};
  }

  @media (max-width: 428px) {
    width: 18.75rem;
    height: 4rem;
    font-size: 1.5rem;
  }

  @media (max-width: 376px) {
    width: 17.5rem;
    height: 3.5rem;
  }

  @media (max-width: 320px) {
    width: 15rem;
    height: 3rem;
    font-size: 1rem;
  }
`;
