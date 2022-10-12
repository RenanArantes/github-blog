import {
  InfoContainer,
  LinkBase,
  LinkHtml,
  PostInfoContainer,
  Title,
} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowAltCircleLeft,
  faArrowAltCircleUp,
} from '@fortawesome/free-regular-svg-icons'
import { faCalendarDay, faComment } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useContext } from 'react'
import { IssueContext } from '../../../../context/Issues'

export function PostInfo() {
  const { issues } = useContext(IssueContext)

  return (
    <PostInfoContainer>
      <label>
        <LinkBase to={'/'}>
          <FontAwesomeIcon icon={faArrowAltCircleLeft} /> VOLTAR
        </LinkBase>
        <LinkHtml href={issues[0].url} target="_blank">
          VER NO GITHUB{' '}
          <FontAwesomeIcon
            icon={faArrowAltCircleUp}
            style={{ marginLeft: '8px' }}
          />
        </LinkHtml>
      </label>
      <label>
        <Title>{issues[0].title}</Title>
      </label>
      <InfoContainer>
        <label>
          <FontAwesomeIcon icon={faGithub} style={{ marginRight: '8px' }} />
          {issues[0].user.login}
        </label>
        <label>
          <FontAwesomeIcon
            icon={faCalendarDay}
            style={{ marginRight: '8px' }}
          />
          {formatDistanceToNow(new Date(new Date()), {
            locale: ptBR,
            addSuffix: true,
          })}
        </label>
        <label>
          <FontAwesomeIcon icon={faComment} style={{ marginRight: '8px' }} />
          {issues[0].comments === 1
            ? issues[0].comments + ' comentário'
            : issues[0].comments + ' comentários'}
        </label>
      </InfoContainer>
    </PostInfoContainer>
  )
}
