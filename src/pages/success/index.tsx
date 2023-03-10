import {
  SuccessContainer,
  HeaderContainerSuccess,
  InfoOrder,
  TimerIcon,
  MapIcon,
  CashIcon,
  Each,
  Teste,
  Content,
} from './styles'
import moto from '../../assets/motocycle.svg'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

export function Success() {
  return (
    <SuccessContainer>
      <Teste>
        <HeaderContainerSuccess>
          <h1>Uhu ! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </HeaderContainerSuccess>
        <InfoOrder>
          <Each>
            <MapIcon>
              <MapPin size={16} weight="fill" color="#fff" />
            </MapIcon>
            <Content>
              <h3>Entrega em ......</h3>
              <h4> O resto</h4>
            </Content>
          </Each>
          <Each>
            <TimerIcon>
              <Timer size={16} weight="fill" color="#fff" />
            </TimerIcon>
            <Content>
              <h4>Previsão de entrega</h4>
              <h3> 20 min - 30 min</h3>
            </Content>
          </Each>
          <Each>
            <CashIcon>
              <CurrencyDollar size={16} weight="fill" color="#fff" />
            </CashIcon>
            <Content>
              <h4>Pagamento na entrega</h4>
              <h3> Cartão de credito </h3>
            </Content>
          </Each>
        </InfoOrder>
      </Teste>
      <img src={moto} alt="" />
    </SuccessContainer>
  )
}
