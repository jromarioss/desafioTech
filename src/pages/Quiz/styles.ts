import { styled } from 'styled-components'

export const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const QuizContent = styled.div`
  display: flex;
  padding: 2.75rem;
  margin-top: 2.8125rem;
  flex-direction: column;
  align-items:  center;
  gap: 1.625rem;
  border-radius: 25px;
  background-color: ${props => props.theme['gray-100']};

  @media (max-width: 428px) {
    width: 22.5rem;
    padding: 1rem 0.75rem;
    gap: 1rem;
  }

  @media (max-width: 360px) {
    width: 20rem;
    padding: 1rem;
  }

  @media (max-width: 320px) {
    width: 18rem;
    padding: 0.75rem;
    margin-top: 1.5rem;
  }

  div {
    width: 55.375rem;
    height: 5.1875rem;
    padding: 1rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme['gray-200']};
    border-radius: 42px;

    @media (max-width: 768px) {
      width: 40rem;
      height: 5rem;
    }
    
    @media (max-width: 428px) {
      width: 100%;
      height: 4rem;
      padding-inline: 0.5rem;
      border-radius: 24px;
    }
  }

  p {
    text-align: center;
    font-size: 1.75rem;
    font-weight: bold;
    color: ${props => props.theme['gray-300']};

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }

    @media (max-width: 428px) {
      font-size: 0.875rem;
      padding-inline: 0.5rem;
    }
  }
`;

export const Button = styled.button`
  all: unset;
  width: 55.375rem;
  height: 5.1875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.75rem;
  text-align: center;
  color: ${props => props.theme['gray-300']};
  background-color: ${props => props.theme['gray-100']};
  border: 1px solid ${props => props.theme['gray-300']};
  border-radius: 42px;
  transition: .5s;

  &:hover {
    background-color: ${props => props.theme['gray-300']};

    p {
      color: ${props => props.theme['gray-100']};
    }
  }

  p {
    padding-inline: 1.5rem;

    @media (max-width: 428px) {
      padding-inline: 0.5rem;
    }
  }

  @media (max-width: 768px) {
    width: 40rem;
    height: 5rem;
    font-size: 1.5rem;
  }

  @media (max-width: 428px) {
    width: 100%;
    height: 4rem;
    font-size: 0.875rem;
    border-radius: 24px;
  }
`;
