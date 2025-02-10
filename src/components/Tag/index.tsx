import { TagCont } from './styles'

type Props = {
  children: string
}

const Tag = ({ children }: Props) => <TagCont>{children}</TagCont>

export default Tag
