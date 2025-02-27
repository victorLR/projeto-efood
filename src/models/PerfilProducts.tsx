class Produto {
  title: string
  description: string
  infos: string[]
  image: string
  id: number

  constructor(
    title: string,
    description: string,
    infos: string[],
    image: string,
    id: number
  ) {
    this.description = description
    this.image = image
    this.infos = infos
    this.title = title
    this.id = id
  }
}

export default Produto
