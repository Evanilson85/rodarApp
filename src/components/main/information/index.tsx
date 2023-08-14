import { Container, ContainerFlex } from './style'
import laptop from '../../../assets/laptop.png'

export const Information = () => {
  return (
    <>
      <Container>
        <div className='containerText'>
          <div>
            <h1>
              REALIZE COTAÇÕES DE QUALQUER LUGAR
            </h1>
          </div>
          <ContainerFlex>
           <div className='paragraphs'>
              <p>
                Com o RodarApp a sua empresa pode solicitar cotações de qualquer lugar e a qualquer hora, sem precisar de intermediadores. 
              </p>
              <br />
              <p>
                Só no RodarApp você tem acesso a centenas de credenciadas para obter o melhor preço para sua empresa ao cotar peças, serviços e manutenções para sua frota.
              </p>
              <br />
              <p>
                Então não perca mais tempo! Entre agora mesmo em contato conosco e automatize a gestão de frota da sua empresa ou prefeitura.
              </p>
           </div>

            <img src={laptop} alt="laptop" />
          </ContainerFlex>
        </div>
      </Container>
    </>
  )
}