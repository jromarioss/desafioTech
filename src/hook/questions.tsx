import { useContext } from 'react'

import { QuestionContext } from '../contexts/questionContext'

export function useQuestions() {
  const context = useContext(QuestionContext);
  return context;
}