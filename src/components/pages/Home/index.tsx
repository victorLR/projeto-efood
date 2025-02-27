import FoodList from '../../FoodList'
import Footer from '../../Footer'
import Head from '../../Head'
import sushi from '../../../assets/images/sushi.png'
import Produto from '../../../models/Produtos'

const SaibaMais: Produto[] = [
  {
    id: 1,
    title: 'Hiuki Sushi',
    infos: ['Destaque da semana', 'Japonesa'],
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: sushi
  },
  {
    id: 2,
    title: 'Hiuki Sushi',
    infos: ['Destaque da semana', 'Japonesa'],
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: sushi
  },
  {
    id: 3,
    title: 'Hiuki Sushi',
    infos: ['Destaque da semana', 'Japonesa'],
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: sushi
  },
  {
    id: 4,
    title: 'Hiuki Sushi',
    infos: ['Destaque da semana', 'Japonesa'],
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: sushi
  },
  {
    id: 5,
    title: 'Hiuki Sushi',
    infos: ['Destaque da semana', 'Japonesa'],
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: sushi
  },
  {
    id: 6,
    title: 'Hiuki Sushi',
    infos: ['Destaque da semana', 'Japonesa'],
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: sushi
  }
]

const Home = () => (
  <>
    <Head />
    <FoodList produtos={SaibaMais} />
    <Footer />
  </>
)

export default Home
