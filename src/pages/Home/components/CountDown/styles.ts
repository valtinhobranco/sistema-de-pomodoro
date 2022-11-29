import styled from 'styled-components'
import variables from '../../../../styles/variables'

export const CountDownContainer = styled.div`
  line-height: 12.8rem;
  color: ${(props) => props.theme.gray100};
  display: flex;
  gap: 1.6rem;
  span {
    background: ${(props) => props.theme.gray700};
    font-family: ${variables.fonts.secondaryFont};
    font-size: ${variables.textSizes.title};
    padding: 3.2rem 1.6rem;
    border-radius: ${variables.borderRadios};
  }
`

export const Separator = styled.div`
  padding: 3.6rem 0;
  color: ${(props) => props.theme.green500};
  width: 6.4rem;
  font-size: ${variables.textSizes.title};
  font-family: ${variables.fonts.secondaryFont};
  overflow: hidden;
  display: flex;
  justify-content: center;
`
