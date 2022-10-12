import { PostInfo } from './components/PostInfo'
import { IssueContainer } from './styles'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useContext } from 'react'
import { IssueContext } from '../../context/Issues'

export function Post() {
  const { issues } = useContext(IssueContext)

  return (
    <div>
      <PostInfo />
      <IssueContainer>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {issues[0].body}
        </ReactMarkdown>
      </IssueContainer>
    </div>
  )
}
