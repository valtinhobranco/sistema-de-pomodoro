import styled from 'styled-components'
import variables from '../../styles/variables'

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > form {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 5.6rem;
  }
`

export const BaseCountdownButton = styled.button`
  width: 100%;
  padding: 1.6rem;
  border-radius: ${variables.borderRadios};

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.8rem;
  font-weight: bold;

  cursor: pointer;

  color: ${(props) => props.theme.gray100};
  transition: ${variables.transitions};

  > svg {
    font-size: 24px;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const StartCountdownButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme.green500};
  &:not(:disabled):hover {
    background: ${(props) => props.theme.green700};
  }
`

export const StopCountdownButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme.red500};
  &:not(:disabled):hover {
    background: ${(props) => props.theme.red700};
  }
`
