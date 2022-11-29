// ? styles
import { useContext } from 'react'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { CyclesContext } from '../../context/CyclesContext'
import * as Styles from './styles'

// interface HistoryProps {
//   children?: ReactNode
// }

export function History() {
  const { cycles } = useContext(CyclesContext)
  return (
    <Styles.HistoryContainer>
      <h1>Meu Histórico</h1>

      <Styles.HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount} minutos</td>
                  <td>
                    {formatDistanceToNow(new Date(cycle.startDate), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>

                  <td>
                    {cycle.finishedDate && (
                      <Styles.Status statusColor="green">
                        Concluído
                      </Styles.Status>
                    )}

                    {cycle.interruptDate && (
                      <Styles.Status statusColor="red">
                        Interrompido
                      </Styles.Status>
                    )}

                    {!cycle.finishedDate && !cycle.interruptDate && (
                      <Styles.Status statusColor="yellow">
                        Em andamento
                      </Styles.Status>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </Styles.HistoryList>
    </Styles.HistoryContainer>
  )
}
