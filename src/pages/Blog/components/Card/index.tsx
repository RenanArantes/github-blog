import { CardContainer, Title } from './styles'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { IssueContext } from '../../../../context/Issues'

interface Issue {
  id: number
  url: string
  title: string
  body: string
  state: 'open' | 'closed'
  created_at: string
}

interface CardProps {
  issue: Issue
}

export function Card({ issue }: CardProps) {
  const { title, created_at, body } = issue
  const { fetchIssues } = useContext(IssueContext)

  return (
    <Link
      to={`/post/${title}`}
      style={{ textDecoration: 'none', color: 'inherit' }}
      onClick={() => {
        fetchIssues(title)
      }}
    >
      <CardContainer>
        <span>
          <Title>{title}</Title>
          <time>
            {formatDistanceToNow(new Date(created_at), {
              locale: ptBR,
              addSuffix: true,
            })}
          </time>
        </span>
        <p>{body.substring(0, 250) + '...'}</p>
      </CardContainer>
    </Link>
  )
}
