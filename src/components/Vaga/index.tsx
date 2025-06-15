import { ItemVaga, TituloVaga, LinkVaga } from './Vaga'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = (props: Props) => (
  <ItemVaga>
    <TituloVaga>{props.titulo}</TituloVaga>
    <ul>
      <li>Localização: {props.localizacao}</li>
      <li>Nível: {props.nivel}</li>
      <li>Modalidade: {props.modalidade}</li>
      <li>
        Salário: R$ {props.salarioMin} - R$ {props.salarioMax}
      </li>
      <li>Requisitos: {props.requisitos.join(', ')}</li>
    </ul>
    <LinkVaga as="a" href="#">
      Ver detalhes e candidatar-se
    </LinkVaga>
  </ItemVaga>
)

export default Vaga
