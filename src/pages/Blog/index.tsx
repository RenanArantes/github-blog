import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import { BlogContainer } from './styles'

export function Home() {
  return (
    <BlogContainer>
      <Profile />
      <SearchForm />
    </BlogContainer>
  )
}
