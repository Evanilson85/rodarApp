import { Container } from './style.ts'
import image1 from '../../../assets/image 1gestao_frota.png'

export const ProductsAndServices = () => {

  const teste = [
    {
      id: 1,
      img: '',
      name: 'Gestão de Frota',
      p: ' Fazemos a gestão de sua frota, independente do tamanho.'
    },
    {
      id: 2,
      img: '',
      name: 'Gestão de Frota',
      p: ' Fazemos a gestão de sua frota, independente do tamanho.'
    },
    {
      id: 3,
      img: '',
      name: 'Gestão de Frota',
      p: ' Fazemos a gestão de sua frota, independente do tamanho.'
    },
    {
      id: 4,
      img: '',
      name: 'Gestão de Frota',
      p: ' Fazemos a gestão de sua frota, independente do tamanho.'
    },
    {
      id: 5,
      img: '',
      name: 'Gestão de Frota',
      p: ' Fazemos a gestão de sua frota, independente do tamanho.'
    },
    {
      id: 6,
      img: '',
      name: 'Gestão de Frota',
      p: ' Fazemos a gestão de sua frota, independente do tamanho.'
    },
  ]

  return(
    <>
      <Container>
        <section>
          <div className='title'>
            <h1>PRODUTOS E SERVIÇOS</h1>
          </div>
          
          <div className='containerCards'>
            {teste.map(({ id, name, p }) => (
              <div className='card' key={id}>
                <img src={image1} alt="" />
                <div className='text'>
                  <h3>{name}</h3>
                  <p>
                   { p }
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </>
  )
}