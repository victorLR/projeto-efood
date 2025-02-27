import ProductList from '../ProductList'
import Footer from '../Footer'
import Pizza from '../../../../assets/images/image 3.png'
import PerfilHead from '../PerfilHead'
import Produto from '../../../../models/PerfilProducts'

const SaibaMais: Produto[] = [
  {
    id: 1,
    title: 'Pizza Marguerita',
    infos: [],
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: Pizza
  },
  {
    id: 1,
    title: 'Pizza Marguerita',
    infos: [],
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: Pizza
  },
  {
    id: 1,
    title: 'Pizza Marguerita',
    infos: [],
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: Pizza
  },
  {
    id: 1,
    title: 'Pizza Marguerita',
    infos: [],
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: Pizza
  },
  {
    id: 1,
    title: 'Pizza Marguerita',
    infos: [],
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: Pizza
  },
  {
    id: 1,
    title: 'Pizza Marguerita',
    infos: [],
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: Pizza
  }
]

const Perfil = () => (
  <>
    <PerfilHead />
    <ProductList produtos={SaibaMais} />
    <Footer />
  </>
)

export default Perfil
