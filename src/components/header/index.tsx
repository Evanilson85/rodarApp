import * as S from './style'
import { Menu } from './menu'
import home from '../../assets/banner.svg'

export const Header = () => {
  return (
    <>
      <Menu/>
      <S.header>
          <div className='desktop'>
            <img src={home} alt="" />
          </div>
        {/* <div className='container'>

        </div> */}
      </S.header>
    </>
  )
}