import { createContext, ReactNode, useCallback, useEffect, useState } from 'react'

import { api } from '../lib/api';

interface QuestionProps {
  id: number
  pergunta: string
  resposta_correta: string
  resposta_errada1: string
  resposta_errada2: string
}

interface QuestionContextProps {
  name: string
  score: number
  questions: QuestionProps[]
  addName: (nameUser: string) => void
  addScore: () => void
}

export const QuestionContext = createContext<QuestionContextProps>({} as QuestionContextProps);

interface QuestionContextProviderProps {
  children: ReactNode;
}

export function QuestionContextProvider({children}: QuestionContextProviderProps) {
  const [name, setName] = useState('');
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState<QuestionProps[]>([])

  function addName(nameUser: string) {
    setName(nameUser);
  }

  function addScore() {
    setScore(state => state + 1)
  }

  const fetchQuiz = useCallback(async () => {
    try {
      const response = await api.get('/list')
      setQuestions(response.data.data)
    } catch(error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    fetchQuiz()
  }, [fetchQuiz])

  return (
    <QuestionContext.Provider value={{
      questions, score, name, addName, addScore
    }}>
      {children}
    </QuestionContext.Provider>
  )
}
