import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Header } from '../../components/Header'
import { useQuestions } from '../../hook/questions';

import { QuizContainer, QuizContent, Button } from './styles'

export function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { questions, addScore } = useQuestions();

  const router = useNavigate()
  
  function handleAnswers(selectedAnswer: string) {
    const current = questions[currentQuestion]
    
    if (selectedAnswer === current.resposta_correta) {
      addScore();
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      router('/score')
    }
  }

 function shufflerQuestions(array: string[]) {
    const shuffled = [...array]

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }

    return shuffled
  }

  const currentQ = questions[currentQuestion]

  const shuffledOptions = shufflerQuestions([
    currentQ.resposta_correta,
    currentQ.resposta_errada1,
    currentQ.resposta_errada2,
  ])

  return (
    <QuizContainer>
      <Header />
      
      <QuizContent>
        <div>
          <p>{currentQ?.pergunta}</p>
        </div>
        {shuffledOptions.map((option, index) => (
          <Button key={index} onClick={() => handleAnswers(option)}>
            <p>{option}</p>
          </Button>
        ))} 
      </QuizContent>
    </QuizContainer>
  )
}
