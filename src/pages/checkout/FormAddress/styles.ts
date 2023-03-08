import styled from 'styled-components'

export const FormAddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.75rem;

  h2 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 130%;
    margin-bottom: 1.5rem;
  }
`

export const FormContainerBase = styled.div`
  width: 40rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  flex-direction: column;
  padding: 2.5rem;
`

export const HeaderContainerForm = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  padding-bottom: 2rem;
  h3 {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1rem;
    line-height: 130%;
    font-weight: 400;
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
    line-height: 130%;
  }
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;
`

export const BaseInput = styled.input`
  background: ${(props) => props.theme['base-inpunt']};
  height: 3rem;
  border: 0;
  font-weight: 400;
  font-size: 0.875rem;
  padding: 0.75rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['base-button']};
  }

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`
export const Arrumaralina = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const InputCep = styled(BaseInput)`
  width: 35%;
`

export const InputRua = styled(BaseInput)`
  width: 100%;
`

export const InputNumero = styled(BaseInput)`
  width: 35%;
`

export const InputComplement = styled(BaseInput)`
  width: 62%;
`

export const InputBairro = styled(BaseInput)`
  width: 35%;
`

export const InputCidade = styled(BaseInput)`
  width: 49%;
`

export const InputUf = styled(BaseInput)`
  width: 11%;
`

export const PaymentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  input:nth-child(1) {
    width: 1rem;
  }
  input:nth-child(2) {
    width: 10rem;
  }
  input:nth-child(3) {
    width: 6rem;
  }
`

export const MethodPayment = styled.div`
  width: 10rem;
  height: 3rem;
  input {
    position: absolute;
    visibility: hidden;
  }

  label {
    width: 100%;
    padding: 1rem;
    border: none;
    border-radius: 6px;
    background: ${(props) => props.theme['base-button']};
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-weight: 400;
    font-size: 0.7rem;
    line-height: 130%;
    white-space: nowrap; //deixa tudo na mesma linha
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
      background: ${(props) => props.theme['base-hover']};
    }
  }
  input:checked + label {
    outline: 1px solid ${(props) => props.theme.purple};
    background: ${(props) => props.theme['purple-light']};
  }
`
