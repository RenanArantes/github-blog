import { Card } from './components/Card'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import { BlogContainer, PostContainer } from './styles'

export function Home() {
  return (
    <BlogContainer>
      <Profile />
      <SearchForm />
      <PostContainer>
        <Card />
        <Card />
        <Card />
      </PostContainer>
    </BlogContainer>
  )
}
