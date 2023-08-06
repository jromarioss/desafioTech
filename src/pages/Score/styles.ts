import { styled } from 'styled-components'

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    text-decoration: none;
    padding: 1rem;
    margin-top: 0.5rem;
    color: ${props => props.theme['gray-300']};
    font-size: 1.5rem;
    font-weight: bold;
    border: 1px solid transparent;

    &:hover {
      border: 1px solid ${props => props.theme['gray-300']};
      border-radius: 30px;
    }
  }
`;

export const ScoreContent = styled.div`
  display: flex;
  padding: 2.75rem;
  margin-top: 2rem;
  flex-direction: column;
  align-items:  center;
  gap: 1.625rem;
  border-radius: 25px;
  background-color: ${props => props.theme['gray-100']};

  @media (max-width: 768px) {
    padding: 1.5rem 2rem;
  }

  @media (max-width: 428px) {
    width: 22.5rem;
    padding: 1rem 0.75rem;
    gap: 1rem;
  }

  @media (max-width: 376px) {
    width: 20rem;
  }

  @media (max-width: 376px) {
    width: 18rem;
  }

  p {
    text-align: center;
    font-size: 3.125rem;
    font-weight: bold;

    @media (max-width: 428px) {
      font-size: 2rem;
    }

    @media (max-width: 376px) {
      font-size: 1.5rem;
    }
  }
`;

interface ScoreDivProps {
  variant: 'light' | 'dark'
}

export const ScoreDiv = styled.div<ScoreDivProps>`
  width: 55.375rem;
  height: 5.1875rem;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 3rem;
  padding-right: 3.875rem;
  background-color: ${props => props.variant === 'light' ? props.theme['gray-200'] : props.theme['gray-300']};
  border-radius: 42px;

  @media (max-width: 768px) {
    width: 40rem;
    height: 5rem;
  }
  
  @media (max-width: 428px) {
    width: 100%;
    height: 4rem;
    padding-left: 0;
    padding-right: 0;
    padding-inline: 1.5rem;
    border-radius: 24px;
  }

  p {
    font-size: 1.875rem;
    color: ${props => props.variant === 'light' ? props.theme['gray-300'] : props.theme['gray-100']};

    @media (max-width: 428px) {
      font-size: 1rem;
    }
  }
`;
