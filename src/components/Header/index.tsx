// ? styles
import { Scroll, Timer } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

// ? styles
import * as Styles from './styles'

import Logo from '../../assets/logo-ignite.svg'

export function Header() {
  return (
    <Styles.HeaderContainer>
      <NavLink to="/" end title="Home">
        <img src={Logo} alt="" />
      </NavLink>
      <nav>
        <NavLink to="/" end title="Home">
          <Timer />
        </NavLink>
        <NavLink to="/history" end title="Histórico">
          <Scroll />
        </NavLink>
      </nav>
    </Styles.HeaderContainer>
  )
}
