import Foods from '../Foods'
import { List, Container } from './styles'
import sushi from '../../assets/images/sushi.png'

type Props = {
  title?: string
}

const FoodList = ({ title }: Props) => (
  <Container>
    <div className="container">
      <h2>{title}</h2>
      <List>
        <Foods
          title="Hiuki Sushi"
          infos={['Destaque da semana', 'Japonesa']}
          description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
          image={sushi}
        />
        <Foods
          title="Hiuki Sushi"
          infos={['Destaque da semana', 'Japonesa']}
          description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
          image={sushi}
        />
        <Foods
          title="Hiuki Sushi"
          infos={['Destaque da semana', 'Japonesa']}
          description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
          image={sushi}
        />
        <Foods
          title="Hiuki Sushi"
          infos={['Destaque da semana', 'Japonesa']}
          description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
          image={sushi}
        />
        <Foods
          title="Hiuki Sushi"
          infos={['Destaque da semana', 'Japonesa']}
          description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
          image={sushi}
        />
        <Foods
          title="Hiuki Sushi"
          infos={['Destaque da semana', 'Japonesa']}
          description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
          image={sushi}
        />
      </List>
    </div>
  </Container>
)

export default FoodList
