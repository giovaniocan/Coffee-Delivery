import { CardCoffee } from './cardCoffee'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { FormAddress } from './FormAddress'
import {
  CardContainer,
  CartCoffeeContainer,
  FinishedButton,
  FormContainer,
  SubTotal,
  Total,
} from './styles'

const NewFormValidationSchema = zod.object({
  cep: zod.number().min(1, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe a rua'),
  houseNumber: zod.number().min(1, 'Informe o número da casa'),
  complement: zod.string().optional(),
  district: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  state: zod.string().min(1, 'Informe o estado'),
  paymentMethods: zod.string(),
})

type NewFormData = zod.infer<typeof NewFormValidationSchema>

export function Checkout() {
  const NewForm = useForm<NewFormData>({
    resolver: zodResolver(NewFormValidationSchema),
    defaultValues: {
      cep: undefined,
      street: '',
      houseNumber: undefined,
      complement: '',
      district: '',
      city: '',
      state: '',
      paymentMethods: '',
    },
  })

  const { handleSubmit, reset } = NewForm

  function onSubmit(data: NewFormData) {
    console.log(data) // faça algo com os dados aqui
    reset()
  }

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <FormProvider {...NewForm}>
        <FormAddress />
      </FormProvider>
      <CartCoffeeContainer>
        <h2>Faça o seu pedido</h2>
        <CardContainer>
          <CardCoffee />

          <SubTotal>
            <div>
              <p>Total de itens</p>
              <h4>R$ 29,70</h4>
            </div>
            <div>
              <p>Entrega</p>
              <h4>R$ 3,50</h4>
            </div>
          </SubTotal>
          <Total>
            <p>Total</p>
            <p>R$ 33,20</p>
          </Total>

          <FinishedButton type="submit">confirmar pedido</FinishedButton>
        </CardContainer>
      </CartCoffeeContainer>
    </FormContainer>
  )
}
