import React from 'react'
import logoAstromatch from '../Assets/logo.png'
import { LogoHeader } from './styles';


function Header() {
  return (
    <div>
        <LogoHeader src={logoAstromatch} alt="Logo astromatch é um coração vermelho com uma chama vermelha no topo"/> 
    </div>
  )
}

export default Header;