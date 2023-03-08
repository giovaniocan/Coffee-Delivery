import {
  Bank,
  CreditCard,
  CurrencyDollarSimple,
  MapPin,
  Money,
} from 'phosphor-react'
import {
  FormAddressContainer,
  FormContainerBase,
  HeaderContainerForm,
  InputContainer,
  InputCep,
  InputRua,
  InputComplement,
  InputCidade,
  InputNumero,
  InputUf,
  InputBairro,
  Arrumaralina,
  MethodPayment,
  PaymentContainer,
} from './styles'

export function FormAddress() {
  return (
    <FormAddressContainer>
      <h2>Complete o Seu pedido</h2>
      <FormContainerBase>
        <HeaderContainerForm>
          <MapPin size={22} color="#C47F17" />
          <div>
            <h3>Endereço de entrega</h3>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </HeaderContainerForm>
        <InputContainer>
          <InputCep placeholder="CEP" />
          <InputRua placeholder="Rua" />
          <Arrumaralina>
            <InputNumero placeholder="Número" />
            <InputComplement placeholder="Complemento" />
          </Arrumaralina>
          <Arrumaralina>
            <InputBairro placeholder="Bairro" />
            <InputCidade placeholder="Cidade" />
            <InputUf placeholder="UF" />
          </Arrumaralina>
        </InputContainer>
      </FormContainerBase>
      <FormContainerBase>
        <HeaderContainerForm>
          <CurrencyDollarSimple size={22} color="#8047F8" />
          <div>
            <h3>Pagamento</h3>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </HeaderContainerForm>
        <PaymentContainer>
          <MethodPayment>
            <input
              type="radio"
              id="credit"
              /* name="paymentMethods" */
              value="Cartão de Crédito"
            />
            <label htmlFor="credit">
              <CreditCard size={16} />
              Cartão de crédito
            </label>
          </MethodPayment>
          <MethodPayment>
            <input
              type="radio"
              id="debit"
              /* name="paymentMethods" */
              // {...register('paymentMethods')}  acho que assim funcionaria o radio/*
              value="Cartão de Débito"
            />
            <label htmlFor="debit">
              <Bank size={16} />
              Cartão de débito
            </label>
          </MethodPayment>
          <MethodPayment>
            <input
              type="radio"
              id="money"
              /* espero que seja assim msm */
              value="Dinheiro"
            />
            <label htmlFor="money">
              <Money size={16} />
              DINHEIRO
            </label>
          </MethodPayment>
        </PaymentContainer>
      </FormContainerBase>
    </FormAddressContainer>
  )
}
