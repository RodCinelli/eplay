import Button from '../Button'

import { Overlay, CartContainer, Sidebar, Prices, Quantity } from './styles'

const Cart = () => (
  <CartContainer>
    <Overlay />
    <Sidebar>
      <ul>
        <li>
          <h3>Nome do jogo</h3>
        </li>
      </ul>
      <Quantity>2 jogos(s) no carrinho</Quantity>
      <Prices>
        Total de R$ 250,00 <span>Em até 6x sem juros</span>
      </Prices>
      <Button title="Clique aqui para continuar com a compra" type="button">
        Continuar com a compra
      </Button>
    </Sidebar>
  </CartContainer>
)

export default Cart
