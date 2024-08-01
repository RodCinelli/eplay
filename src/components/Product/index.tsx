import Tag from '../Tag'

import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" />
    <Titulo>Nome do jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi hic in
      deleniti eos et quia quo laudantium officia fuga ipsum. Cum repellat earum
      nostrum ea officiis consequuntur, aspernatur reiciendis fugit!
    </Descricao>
  </Card>
)

export default Product
