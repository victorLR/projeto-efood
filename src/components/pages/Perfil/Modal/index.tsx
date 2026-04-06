import {
  Overlay,
  ModalBox,
  ModalFoto,
  ModalConteudo,
  ModalNome,
  ModalDesc,
  ModalPorcao,
  BotaoAdicionar,
  BotaoFechar
} from './styles'

export type PratoModal = {
  id: number
  nome: string
  descricao: string
  foto: string
  preco: number
  porcao?: string
}

type Props = {
  prato: PratoModal | null
  onFechar: () => void
  onAdicionar: (prato: PratoModal) => void
}

const formatarPreco = (preco: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)

const Modal = ({ prato, onFechar, onAdicionar }: Props) => {
  if (!prato) return null

  return (
    <Overlay onClick={onFechar}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <BotaoFechar onClick={onFechar} aria-label="Fechar">
          ✕
        </BotaoFechar>
        <ModalFoto
          src={prato.foto}
          alt={prato.nome}
          onError={(e) => {
            e.currentTarget.src =
              'https://via.placeholder.com/280x344/E66767/FFF8F2?text=Foto'
          }}
        />
        <ModalConteudo>
          <div>
            <ModalNome>{prato.nome}</ModalNome>
            <ModalDesc>{prato.descricao}</ModalDesc>
            {prato.porcao && <ModalPorcao>Serve: {prato.porcao}</ModalPorcao>}
          </div>
          <BotaoAdicionar onClick={() => onAdicionar(prato)}>
            Adicionar ao carrinho - {formatarPreco(prato.preco)}
          </BotaoAdicionar>
        </ModalConteudo>
      </ModalBox>
    </Overlay>
  )
}

export default Modal
