import styled from 'styled-components'
import variables from '../../styles/variables'

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 9.8rem 5.6rem;
  gap: 3.2rem;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 2.4rem;
    color: ${(props) => props.theme.gray100};
  }
`

export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 3.2rem;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th {
      background: ${(props) => props.theme.gray600};
      padding: 1.6rem;
      text-align: left;
      color: ${(props) => props.theme.gray100};
      font-size: 1.4rem;
      line-height: 1.6;
      &:first-child {
        border-top-left-radius: ${variables.borderRadios};
        padding-left: 2.4rem;
      }

      &:last-child {
        border-top-right-radius: ${variables.borderRadios};
        padding-left: 2.4rem;
      }
    }
    td {
      background: ${(props) => props.theme.gray700};
      border-top: 4px solid ${(props) => props.theme.gray800};
      padding: 1.6rem;
      font-size: 1.4rem;
      line-height: 1.6;
      &:first-child {
        width: 50%;
        padding-left: 2.4rem;
      }

      &:last-child {
        padding-left: 2.4rem;
      }
    }
  }
`

const STATUS_COLORS = {
  yellow: 'yellow500',
  green: 'green500',
  red: 'red500',
} as const

// ? types
type StatusColorProps = {
  statusColor: keyof typeof STATUS_COLORS
}

export const Status = styled.span<StatusColorProps>`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  &:before {
    content: '';

    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    background: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
  }
`
