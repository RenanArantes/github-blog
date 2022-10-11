import { CardContainer, Title } from './styles'

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

  return (
    <CardContainer>
      <span>
        <Title>{title}</Title>
        <time>{created_at}</time>
      </span>
      <p>{body}</p>
    </CardContainer>
  )
}
