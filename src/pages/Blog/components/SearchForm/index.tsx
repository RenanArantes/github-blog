import { SearchFormContainer, SearchInput } from './styles'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { IssueContext } from '../../../../context/Issues'

const searchFormSchema = zod.object({
  query: zod.string(),
})

type SearchFormInputs = zod.infer<typeof searchFormSchema>

export function SearchForm() {
  const { fetchIssues } = useContext(IssueContext)

  const { register, handleSubmit, control } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchIssues(data: SearchFormInputs) {
    await fetchIssues(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchIssues)}>
      <label>
        <p>Publicações</p>
        <p>x publicações</p>
      </label>
      <SearchInput
        placeholder="Buscar conteúdo"
        type="text"
        {...register('query')}
      />
    </SearchFormContainer>
  )
}
