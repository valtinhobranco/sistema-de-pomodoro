import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5rem;
  height: 100vh;
  > div {
    > a {
      > img.logo {
        height: 10rem;
      }
    }
  }

  > h1 {
    font-size: 5rem;
  }
`
