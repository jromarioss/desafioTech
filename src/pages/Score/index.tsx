import { NavLink } from 'react-router-dom'
import { Header } from '../../components/Header'
import { useQuestions } from '../../hook/questions';

import { ScoreContainer, ScoreContent, ScoreDiv } from './styles'

export function Score() {
  const { score, questions } = useQuestions();
  const wrongQuestions = questions.length - score;

  const percentage = (score / questions.length) * 100;

  return (
    <ScoreContainer>
      <Header />
      
      <ScoreContent>
        <p>score</p>

        <ScoreDiv variant='light'>
          <p>Acertos</p>
          <p>{score}</p>
        </ScoreDiv>

        <ScoreDiv variant='light'>
          <p>Error</p>
          <p>{wrongQuestions}</p>
        </ScoreDiv>

        <ScoreDiv variant='dark'>
          <p>Porcentagem</p>
          <p>{percentage}%</p>
        </ScoreDiv>
      </ScoreContent>
      
      <NavLink to='/'>Tentar novamente</NavLink>
    </ScoreContainer>
  )
}
