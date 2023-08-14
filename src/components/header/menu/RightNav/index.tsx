import { Ul } from './style'

export const RightNav = ({ open }: { open : boolean}) => {
  return (
    <Ul open={open}>
      <li>Home</li>
      <li>Produtos e Serviços</li>
      <li>Sobre a Rodar</li>
      <li>Contato</li>

      <div className='buttonApp'>
        <button>ACESSAR O APP</button>
      </div>
    </Ul>
  )
}

