import { SearchFormContainer, SearchInput } from './styles'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <label>
        <p>Publicações</p>
        <p>x publicações</p>
      </label>
      <SearchInput placeholder="Buscar conteúdo" />
    </SearchFormContainer>
  )
}
