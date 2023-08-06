import { useQuestions } from '../../hook/questions';

import { HeaderContainer } from './styles'

export function Header() {
  const { name } = useQuestions();

  return (
    <HeaderContainer>
      <p>{name}</p>
    </HeaderContainer>
  )
}