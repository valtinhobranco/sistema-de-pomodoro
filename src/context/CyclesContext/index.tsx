import { differenceInSeconds } from 'date-fns'
import {
  createContext,
  ReactNode,
  useState,
  useReducer,
  useEffect,
} from 'react'
import {
  addNewCycleActions,
  interruptCurrentCycleActions,
  markCurrentCycleAsFinishedActions,
} from '../../reducers/Cycles/actions'
import { Cycle, cyclesReducer } from '../../reducers/Cycles/reducers'

interface CreateCycleFormDataTypes {
  task: string
  minutesAmount: number
}

interface CyclesContextTypes {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  markCurrentCycleAsFinished: () => void
  setSecondsPassed: (seconds: number) => void
  createNewCycle: (data: CreateCycleFormDataTypes) => void
  interruptCurrentCycle: () => void
}

export const CyclesContext = createContext({} as CyclesContextTypes)

interface CyclesContextProps {
  children: ReactNode
}

export function CyclesContextProvider({ children }: CyclesContextProps) {
  const [cyclesState, dispatch] = useReducer(
    cyclesReducer,
    {
      cycles: [],
      activeCycleId: null,
    },
    () => {
      const storyStateJSON = localStorage.getItem(
        '@ignite-timer:cycles-state-1.0.0',
      )
      if (storyStateJSON) {
        return JSON.parse(storyStateJSON)
      }

      return {
        cycles: [],
        activeCycleId: null,
      }
    },
  )

  const { cycles, activeCycleId } = cyclesState

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate))
    }

    return 0
  })

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState)
    localStorage.setItem('@ignite-timer:cycles-state-1.0.0', stateJSON)
  }, [cyclesState])

  function markCurrentCycleAsFinished() {
    dispatch(markCurrentCycleAsFinishedActions())
  }

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  const createNewCycle = (data: CreateCycleFormDataTypes) => {
    // console.log(data)
    const id = String(new Date().getTime())
    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    dispatch(addNewCycleActions(newCycle))

    setAmountSecondsPassed(0)
  }

  const interruptCurrentCycle = () => {
    dispatch(interruptCurrentCycleActions())
  }

  return (
    <>
      <CyclesContext.Provider
        value={{
          cycles,
          activeCycle,
          activeCycleId,
          markCurrentCycleAsFinished,
          amountSecondsPassed,
          setSecondsPassed,
          createNewCycle,
          interruptCurrentCycle,
        }}
      >
        {children}
      </CyclesContext.Provider>
    </>
  )
}
