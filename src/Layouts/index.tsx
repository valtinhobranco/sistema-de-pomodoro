import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

// ? styles
import * as Styles from './styles'

export function Layouts() {
  return (
    <Styles.LayoutContainer>
      <Header />
      <Outlet />
    </Styles.LayoutContainer>
  )
}
