import { useContext } from 'react'
import { HandPalm, Play } from 'phosphor-react'
import * as zod from 'zod'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

// ? styles
import * as Styles from './styles'

// ? inner components
import { NewCycleForm } from './components/NewCycleForm'
import { CountDown } from './components/CountDown'
import { CyclesContext } from '../../context/CyclesContext'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'informe a tarefa'),

  minutesAmount: zod
    .number()
    .min(5, 'O ciclo precisa ser no mínimo 5 minutos.')
    .max(60, 'O ciclo precisa ser no máximo 60 minutos.'),
})

// ? types
type NewCycleFormDataTypes = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const { activeCycle, createNewCycle, interruptCurrentCycle } =
    useContext(CyclesContext)

  const newCycleForm = useForm<NewCycleFormDataTypes>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { handleSubmit, watch, reset } = newCycleForm
  function handleCreateNewCycle(data: NewCycleFormDataTypes) {
    createNewCycle(data)
    reset()
  }
  // console.log(activeCycle)

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <Styles.HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <CountDown />

        {activeCycle ? (
          <Styles.StopCountdownButton
            onClick={interruptCurrentCycle}
            type="button"
          >
            <HandPalm />
            Interromper
          </Styles.StopCountdownButton>
        ) : (
          <Styles.StartCountdownButton
            disabled={isSubmitDisabled}
            type="submit"
          >
            <Play />
            Começar
          </Styles.StartCountdownButton>
        )}
      </form>
    </Styles.HomeContainer>
  )
}
