import {
  ProfileDataContainer,
  LinkBase,
  ProfileContainer,
  InfoContainer,
} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleUp } from '@fortawesome/free-regular-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'

export function Profile() {
  return (
    <ProfileContainer>
      <img src="http://www.github.com/RenanArantes.png" alt="avatar image" />
      <ProfileDataContainer>
        <span style={{ marginBottom: '8px' }}>
          <h2>Nome</h2>
          <LinkBase to="/">
            GITHUB{' '}
            <FontAwesomeIcon
              icon={faArrowAltCircleUp}
              style={{ marginLeft: '8px' }}
            />
          </LinkBase>
        </span>
        <span>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
        </span>
        <InfoContainer>
          <label>
            <FontAwesomeIcon icon={faGithub} style={{ marginRight: '8px' }} />
            UserName
          </label>
          <label>
            <FontAwesomeIcon icon={faBuilding} style={{ marginRight: '8px' }} />
            Company
          </label>
          <label>
            <FontAwesomeIcon
              icon={faUserGroup}
              style={{ marginRight: '8px' }}
            />
            x followers
          </label>
        </InfoContainer>
      </ProfileDataContainer>
    </ProfileContainer>
  )
}
