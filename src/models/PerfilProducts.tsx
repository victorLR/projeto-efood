class Produto {
  title: string
  description: string
  fullDescription?: string
  infos: string[]
  image: string
  id: number
  preco: number
  porcao?: string

  constructor(
    title: string,
    description: string,
    infos: string[],
    image: string,
    id: number,
    preco: number,
    porcao?: string,
    fullDescription?: string
  ) {
    this.title = title
    this.description = description
    this.fullDescription = fullDescription
    this.image = image
    this.infos = infos
    this.id = id
    this.preco = preco
    this.porcao = porcao
  }
}

export default Produto
