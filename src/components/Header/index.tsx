import { HeaderContainer } from './styles'
import logo from '../../assets/logo_gb.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="Github Blog" />
    </HeaderContainer>
  )
}
