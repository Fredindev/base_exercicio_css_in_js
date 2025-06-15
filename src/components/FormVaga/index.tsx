import { Formulario, BotaoPesquisar, CampoPesquisa } from './FormVagas'
import { FormEvent, useState } from 'react'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <Formulario onSubmit={aoEnviarForm}>
      <CampoPesquisa
        placeholder="Front-end, fullstack, node, design"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTermo(e.target.value)
        }
        type="search"
      />
      <BotaoPesquisar type="submit">Pesquisar</BotaoPesquisar>
    </Formulario>
  )
}
export default FormVagas
