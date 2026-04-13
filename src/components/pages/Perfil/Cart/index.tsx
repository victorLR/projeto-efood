import { FormEvent, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import TrashIcon from '../../../../assets/images/trash.png'
import { RootReducer } from '../../../../store'
import { clear, close, remove } from '../../../../store/reducers/cart'
import {
  Overlay,
  Sidebar,
  Items,
  Item,
  ItemImage,
  ItemInfo,
  ItemTitle,
  ItemPrice,
  RemoveButton,
  Footer,
  TotalRow,
  CheckoutButton,
  SectionTitle,
  Form,
  Label,
  Input,
  Row,
  BackButton,
  ConfirmationText
} from './styles'

type Step = 'cart' | 'delivery' | 'payment' | 'confirmation'

type DeliveryData = {
  receiver: string
  address: string
  city: string
  zipCode: string
  number: string
  complement: string
}

type PaymentData = {
  cardName: string
  cardNumber: string
  cvv: string
  expiresMonth: string
  expiresYear: string
}

const formatPrice = (value: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value)

const Cart = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { items, isOpen } = useSelector((state: RootReducer) => state.cart)

  const [step, setStep] = useState<Step>('cart')
  const [orderId, setOrderId] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [delivery, setDelivery] = useState<DeliveryData>({
    receiver: '',
    address: '',
    city: '',
    zipCode: '',
    number: '',
    complement: ''
  })
  const [payment, setPayment] = useState<PaymentData>({
    cardName: '',
    cardNumber: '',
    cvv: '',
    expiresMonth: '',
    expiresYear: ''
  })

  const totalPrice = useMemo(
    () => items.reduce((acc, item) => acc + item.preco, 0),
    [items]
  )

  const closeCart = () => {
    dispatch(close())
    if (step !== 'confirmation') {
      setStep('cart')
    }
  }

  const goToPayment = (e: FormEvent) => {
    e.preventDefault()
    setStep('payment')
  }

  const submitOrder = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const payload = {
      products: items.map((item) => ({
        id: item.id,
        price: item.preco
      })),
      delivery: {
        receiver: delivery.receiver,
        address: {
          description: delivery.address,
          city: delivery.city,
          zipCode: delivery.zipCode,
          number: Number(delivery.number),
          complement: delivery.complement
        }
      },
      payment: {
        card: {
          name: payment.cardName,
          number: payment.cardNumber,
          code: Number(payment.cvv),
          expires: {
            month: Number(payment.expiresMonth),
            year: Number(payment.expiresYear)
          }
        }
      }
    }

    try {
      const response = await fetch(
        'https://api-ebac.vercel.app/api/efood/checkout',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        }
      )

      const data = await response.json()

      if (!response.ok) {
        throw new Error('Erro ao finalizar pedido')
      }

      setOrderId(String(data.orderId || data.order_id || ''))
      setStep('confirmation')
      dispatch(clear())
    } catch (error) {
      alert('Não foi possível finalizar o pedido. Tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const finishOrder = () => {
    dispatch(close())
    setStep('cart')
    setOrderId('')
    navigate('/')
  }

  return (
    <>
      <Overlay $visible={isOpen} onClick={closeCart} />
      <Sidebar $visible={isOpen}>
        {step === 'cart' && (
          <>
            <Items>
              {items.map((item, index) => (
                <Item key={`${item.id}-${index}`}>
                  <ItemImage src={item.foto} alt={item.nome} />
                  <ItemInfo>
                    <ItemTitle>{item.nome}</ItemTitle>
                    <ItemPrice>{formatPrice(item.preco)}</ItemPrice>
                  </ItemInfo>
                  <RemoveButton
                    type="button"
                    title="Remover item"
                    onClick={() => dispatch(remove(index))}
                  >
                    <img src={TrashIcon} alt="Remover item" />
                  </RemoveButton>
                </Item>
              ))}
            </Items>
            <Footer>
              <TotalRow>
                <span>Valor total</span>
                <span>{formatPrice(totalPrice)}</span>
              </TotalRow>
              <CheckoutButton
                type="button"
                onClick={() => setStep('delivery')}
                disabled={!items.length}
              >
                Continuar com a entrega
              </CheckoutButton>
            </Footer>
          </>
        )}

        {step === 'delivery' && (
          <Form onSubmit={goToPayment}>
            <SectionTitle>Entrega</SectionTitle>

            <Label htmlFor="receiver">Quem irá receber</Label>
            <Input
              id="receiver"
              value={delivery.receiver}
              onChange={({ target }) =>
                setDelivery({ ...delivery, receiver: target.value })
              }
              required
            />

            <Label htmlFor="address">Endereço</Label>
            <Input
              id="address"
              value={delivery.address}
              onChange={({ target }) =>
                setDelivery({ ...delivery, address: target.value })
              }
              required
            />

            <Label htmlFor="city">Cidade</Label>
            <Input
              id="city"
              value={delivery.city}
              onChange={({ target }) =>
                setDelivery({ ...delivery, city: target.value })
              }
              required
            />

            <Row>
              <div>
                <Label htmlFor="zipCode">CEP</Label>
                <Input
                  id="zipCode"
                  inputMode="numeric"
                  maxLength={8}
                  value={delivery.zipCode}
                  onChange={({ target }) =>
                    setDelivery({
                      ...delivery,
                      zipCode: target.value.replace(/\D/g, '')
                    })
                  }
                  required
                />
              </div>
              <div>
                <Label htmlFor="number">Número</Label>
                <Input
                  id="number"
                  inputMode="numeric"
                  maxLength={6}
                  value={delivery.number}
                  onChange={({ target }) =>
                    setDelivery({
                      ...delivery,
                      number: target.value.replace(/\D/g, '')
                    })
                  }
                  required
                />
              </div>
            </Row>

            <Label htmlFor="complement">Complemento (opcional)</Label>
            <Input
              id="complement"
              value={delivery.complement}
              onChange={({ target }) =>
                setDelivery({ ...delivery, complement: target.value })
              }
            />

            <CheckoutButton type="submit">
              Continuar com o pagamento
            </CheckoutButton>
            <BackButton type="button" onClick={() => setStep('cart')}>
              Voltar para o carrinho
            </BackButton>
          </Form>
        )}

        {step === 'payment' && (
          <Form onSubmit={submitOrder}>
            <SectionTitle>
              Pagamento - Valor a pagar {formatPrice(totalPrice)}
            </SectionTitle>

            <Label htmlFor="cardName">Nome no cartão</Label>
            <Input
              id="cardName"
              value={payment.cardName}
              onChange={({ target }) =>
                setPayment({ ...payment, cardName: target.value })
              }
              required
            />

            <Row>
              <div>
                <Label htmlFor="cardNumber">Número do cartão</Label>
                <Input
                  id="cardNumber"
                  inputMode="numeric"
                  maxLength={16}
                  value={payment.cardNumber}
                  onChange={({ target }) =>
                    setPayment({
                      ...payment,
                      cardNumber: target.value.replace(/\D/g, '')
                    })
                  }
                  required
                />
              </div>
              <div>
                <Label htmlFor="cvv">CVV</Label>
                <Input
                  id="cvv"
                  inputMode="numeric"
                  maxLength={4}
                  value={payment.cvv}
                  onChange={({ target }) =>
                    setPayment({
                      ...payment,
                      cvv: target.value.replace(/\D/g, '')
                    })
                  }
                  required
                />
              </div>
            </Row>

            <Row>
              <div>
                <Label htmlFor="expiresMonth">Mês de vencimento</Label>
                <Input
                  id="expiresMonth"
                  inputMode="numeric"
                  maxLength={2}
                  value={payment.expiresMonth}
                  onChange={({ target }) =>
                    setPayment({
                      ...payment,
                      expiresMonth: target.value.replace(/\D/g, '')
                    })
                  }
                  required
                />
              </div>
              <div>
                <Label htmlFor="expiresYear">Ano de vencimento</Label>
                <Input
                  id="expiresYear"
                  inputMode="numeric"
                  maxLength={4}
                  value={payment.expiresYear}
                  onChange={({ target }) =>
                    setPayment({
                      ...payment,
                      expiresYear: target.value.replace(/\D/g, '')
                    })
                  }
                  required
                />
              </div>
            </Row>
            <CheckoutButton
              type="submit"
              disabled={
                isSubmitting ||
                delivery.zipCode.length !== 8 ||
                payment.cardNumber.length < 13 ||
                payment.cvv.length < 3
              }
            >
              {isSubmitting ? 'Finalizando...' : 'Finalizar pagamento'}
            </CheckoutButton>
            <BackButton type="button" onClick={() => setStep('delivery')}>
              Voltar para a edição de endereço
            </BackButton>
          </Form>
        )}

        {step === 'confirmation' && (
          <>
            <SectionTitle>
              Pedido realizado - {orderId || '(ORDER_ID)'}
            </SectionTitle>
            <ConfirmationText>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
              <br />
              <br />
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
              <br />
              <br />
              Lembre-se de que nossa loja preza pelas boas práticas e
              recomendações de segurança, garantindo assim sua segurança e bem-
              estar durante a refeição.
              <br />
              <br />
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </ConfirmationText>
            <CheckoutButton type="button" onClick={finishOrder}>
              Concluir
            </CheckoutButton>
          </>
        )}
      </Sidebar>
    </>
  )
}

export default Cart
