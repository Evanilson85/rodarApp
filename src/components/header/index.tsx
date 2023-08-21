import * as S from './style'
import { Menu } from './menu'
import home from '../../assets/banner.svg'
import bannerMobile from '../../assets/Group 1.jpg'
import img from '../../assets/home.png'

export const Header = () => {

  const info = [
    {
      number: 1,
      text: ' Sistema automatizado para solicitação de cotações e compra de peças'
    },
    {
      number: 2,
      text: 'Locação de veículos, máquinas e equipamentos'
    },
    {
      number: 3,
      text: 'Gestão de benefícios alimentação, refeição e combustível automatizada (em breve)'
    },
  ]

  return (
    <>
      <Menu/>
      <S.header id='Home'>
          <div className='desktop'>
            <img src={home} alt="" />
          </div>
          <div className='containerMobile'>
            <div className='mobile'>
              <img src={bannerMobile} alt="" />
              <img src={img} alt="" />
              {info.map(({ number, text }) => (
                <div className='info' key={number}>
                  <div className='numberInfo'>
                    {number}
                  </div>
                  <p className='text'>
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
      </S.header>
    </>
  )
}