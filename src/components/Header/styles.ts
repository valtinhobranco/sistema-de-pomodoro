import styled from 'styled-components'
import variables from '../../styles/variables'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > a {
    transition: ${variables.transitions};
    &:focus {
      outline: 0;
      box-shadow: none;
    }
  }
  > nav {
    display: flex;
    gap: 0.8em;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 4.8rem;
      width: 4.8rem;
      transition: ${variables.transitions};
      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme.green500};
        > svg {
          color: ${(props) => props.theme.green500};
        }
      }
      > svg {
        font-size: 24px;
        color: ${(props) => props.theme.white};
      }
      &.active {
        > svg {
          color: ${(props) => props.theme.green500};
        }
        border-bottom: 3px solid ${(props) => props.theme.green500};
      }

      &:focus {
        outline: 0;
        box-shadow: none;
      }
    }
  }
`
