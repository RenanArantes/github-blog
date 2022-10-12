import { useContext } from 'react'
import { IssueContext } from '../../context/Issues'
import { Card } from './components/Card'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import { BlogContainer, PostContainer } from './styles'
// https://api.github.com/search/issues?q=%20repo:RenanArantes/github-blog
export function Home() {
  const { issues } = useContext(IssueContext)

  return (
    <BlogContainer>
      <Profile />
      <SearchForm />
      <PostContainer>
        {issues && issues.map((issue) => <Card key={issue.id} issue={issue} />)}
      </PostContainer>
    </BlogContainer>
  )
}
