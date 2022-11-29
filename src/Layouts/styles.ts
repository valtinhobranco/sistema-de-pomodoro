import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 16rem);
  width: min(120rem, 95%);
  background: ${(props) => props.theme.gray800};
  margin: 8rem auto;
  padding: 4rem;
  border-radius: 8px;
`
