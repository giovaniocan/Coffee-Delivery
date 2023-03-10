import {
  Bank,
  CreditCard,
  CurrencyDollarSimple,
  MapPin,
  Money,
} from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
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
  const { register } = useFormContext()
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
          <InputCep
            type="number"
            placeholder="CEP"
            required
            {...register('cep', { valueAsNumber: true })}
          />
          <InputRua type="text" placeholder="Rua" {...register('street')} />
          <Arrumaralina>
            <InputNumero
              type="number"
              placeholder="Número"
              required
              {...register('houseNumber', { valueAsNumber: true })}
            />
            <InputComplement
              type="text"
              placeholder="Complemento (Opcional)"
              {...register('complement')}
            />
          </Arrumaralina>
          <Arrumaralina>
            <InputBairro
              type="text"
              placeholder="Bairro"
              required
              {...register('district')}
            />
            <InputCidade
              placeholder="Cidade"
              id="city"
              type="text"
              {...register('city')}
            />
            <InputUf
              type="text"
              placeholder="UF"
              required
              {...register('state')}
              minLength={2}
              maxLength={2}
            />
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
              {...register('paymentMethods')}
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
              {...register('paymentMethods')}
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
              value="Dinheiro"
              {...register('paymentMethods')}
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
