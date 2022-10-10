import { InfoContainer, LinkBase, PostInfoContainer, Title } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowAltCircleLeft,
  faArrowAltCircleUp,
} from '@fortawesome/free-regular-svg-icons'
import { faCalendarDay, faComment } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function PostInfo() {
  return (
    <PostInfoContainer>
      <label>
        <LinkBase to={'/'}>
          <FontAwesomeIcon icon={faArrowAltCircleLeft} /> VOLTAR
        </LinkBase>
        <LinkBase to={'/'}>
          VER NO GITHUB{' '}
          <FontAwesomeIcon
            icon={faArrowAltCircleUp}
            style={{ marginLeft: '8px' }}
          />
        </LinkBase>
      </label>
      <label>
        <Title>Title of issue</Title>
      </label>
      <InfoContainer>
        <label>
          <FontAwesomeIcon icon={faGithub} style={{ marginRight: '8px' }} />
          UserName
        </label>
        <label>
          <FontAwesomeIcon
            icon={faCalendarDay}
            style={{ marginRight: '8px' }}
          />
          x time
        </label>
        <label>
          <FontAwesomeIcon icon={faComment} style={{ marginRight: '8px' }} />x
          followers
        </label>
      </InfoContainer>
    </PostInfoContainer>
  )
}
