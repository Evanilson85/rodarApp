import { Ul } from './style'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export const RightNav = ({ open, changeMenu }: { open : boolean, changeMenu: () => void}) => {

  return (
    <Ul open={open}>
      <li onClick={() => changeMenu()}>
        <AnchorLink href='#Home'>Home</AnchorLink>
      </li>
      <li onClick={() => changeMenu()}>
        <AnchorLink href='#service'>Produtos e Serviços</AnchorLink>
      </li>
      <li onClick={() => changeMenu()}>
        <AnchorLink href='#about'>Sobre a Rodar</AnchorLink>
      </li>
      <li onClick={() => changeMenu()}>
        <AnchorLink href='#footer'>Contato</AnchorLink>
      </li>

      <div className='buttonApp'>
        <button>
          <a href="">ACESSAR O APP</a>
        </button>
      </div>
    </Ul>
  )
}

