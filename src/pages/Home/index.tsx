import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'

import { HomeContainer, HomeContent, Button } from './styles'
import { useQuestions } from '../../hook/questions';

const newFormValidationSchema = zod.object({
  name: zod.string().min(3, 'Informe seu nome')
})

export type newFormData = zod.infer<typeof newFormValidationSchema>;

export function Home() {
  const { handleSubmit, register, formState: { errors } } = useForm<newFormData>({
    resolver: zodResolver(newFormValidationSchema),
    defaultValues: {
      name: ''
    }
  })

  const { addName } = useQuestions();
  const router = useNavigate()

  function handleCreateNewForm(data: newFormData) {
    addName(data.name)
    router('/quiz')
  }

  return (
    <HomeContainer>
      <HomeContent>
        <p>Nome</p>

        <form onSubmit={handleSubmit(handleCreateNewForm)}>
          <input
            type='text'
            {...register('name')}
          />
          <span>{errors?.name?.message}</span>
          <Button type='submit'>acessar</Button>
        </form>
      </HomeContent>
    </HomeContainer>
  )
}
