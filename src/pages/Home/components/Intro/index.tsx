import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import banner from '../../../../assets/banner.svg'
import {
  CoffeIcon,
  Icon,
  IntemsIcon,
  IntroContainer,
  PackageICon,
  Shopping,
  TimerIcon,
} from './syles'

export function Intro() {
  return (
    <IntroContainer>
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <h3>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </h3>

        <IntemsIcon>
          <Icon>
            <Shopping>
              <ShoppingCart size={22} weight="fill" color="#fff" />
            </Shopping>
            <p>Compra simples e segura</p>
          </Icon>
          <Icon>
            <PackageICon>
              <Package size={22} weight="fill" color="#fff" />
            </PackageICon>
            <p>Embalagem mantem o café intacto</p>
          </Icon>
          <Icon>
            <TimerIcon>
              <Timer size={22} weight="fill" color="#fff" />
            </TimerIcon>
            <p>Entrega rápida e rastreada</p>
          </Icon>
          <Icon>
            <CoffeIcon>
              <Coffee size={22} weight="fill" color="#fff" />
            </CoffeIcon>
            <p>O café chega fresquinho até você</p>
          </Icon>
        </IntemsIcon>
      </div>
      <div>
        <img src={banner} alt="foto de um café" />
      </div>
    </IntroContainer>
  )
}
