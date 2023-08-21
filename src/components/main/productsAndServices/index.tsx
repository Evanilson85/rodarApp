import { Container } from './style.ts'
import image1 from '../../../assets/gestao_frota.png'
import image2 from '../../../assets/manutencao_veiculos.png'
import image3 from '../../../assets/cartoes_beneficio.png'
import image4 from '../../../assets/pecas.png'
import image5 from '../../../assets/locacao_veiculos.png'
import image6 from '../../../assets/maquinas.png'

export const ProductsAndServices = () => {

  const teste = [
    {
      id: 1,
      img: image1,
      name: 'Gestão de Frota',
      p: 'Fazemos a gestão de sua frota, independente do tamanho.'
    },
    {
      id: 2,
      img: image2,
      name: 'Manutenção de Veículos',
      p: 'Cuidamos da manutenção de sua frota.'
    },
    {
      id: 3,
      img: image3,
      name: 'Cartão Benefício (breve)',
      p: 'Combustível, alimentação ou refeição, seja qual for o benefìcio a Rodar têm.'
    },
    {
      id: 4,
      img: image4,
      name: 'Vendas de Peças',
      p: 'Peças originais e de procedência comprovada.'
    },
    {
      id: 5,
      img: image5,
      name: 'Locação de veículos',
      p: 'Alugue veículos de forma fácil e rápida com a Rodar.'
    },
    {
      id: 6,
      img: image6,
      name: 'Locação de máquinas',
      p: 'Alugue máquinas, tratores e equipamentos sem sair de casa.'
    },
  ]

  return(
    <>
      <Container id='service'>
        <section>
          <div className='title'>
            <h1>PRODUTOS E SERVIÇOS</h1>
          </div>
          
          <div className='containerCards'>
            {teste.map(({ id, img,  name, p }) => (
              <div className='card' key={id}>
                <img src={img} alt={name} />
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