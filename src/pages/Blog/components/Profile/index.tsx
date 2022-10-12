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
import { useEffect, useState } from 'react'
import api from '../../../../lib/axios'

interface UserData {
  avatar_url: string
  name: string
  bio: string | null
  login: string
  company: string | null
  followers: number
  html_url: string
}

export function Profile() {
  const [user, setUser] = useState<UserData>({} as UserData)

  async function loadUser() {
    const localStorageUser = localStorage.getItem('!@github-blog:user')

    if (localStorageUser === null) {
      const response = await api.get<UserData>('/users/RenanArantes')

      setUser({
        avatar_url: response.data.avatar_url,
        name: response.data.name,
        bio: response.data.bio,
        login: response.data.login,
        company: response.data.company,
        followers: response.data.followers,
        html_url: response.data.html_url,
      })

      localStorage.setItem('@github-blog:user', JSON.stringify(user))
    } else {
      setUser(JSON.parse(localStorageUser))
    }
  }

  useEffect(() => {
    loadUser()
  }, [])

  return (
    <ProfileContainer>
      <img src={user.avatar_url} alt={user.name} />
      <ProfileDataContainer>
        <span style={{ marginBottom: '8px' }}>
          <h2>{user.name}</h2>
          <LinkBase href={user.html_url} target="_blank">
            GITHUB{' '}
            <FontAwesomeIcon
              icon={faArrowAltCircleUp}
              style={{ marginLeft: '8px' }}
            />
          </LinkBase>
        </span>
        <span>
          {user.bio !== null ? (
            <p>{user.bio}</p>
          ) : (
            <p>Biografia não escrita pelo usuário</p>
          )}
        </span>
        <InfoContainer>
          <label>
            <FontAwesomeIcon icon={faGithub} style={{ marginRight: '8px' }} />
            {user.login}
          </label>
          <label>
            <FontAwesomeIcon icon={faBuilding} style={{ marginRight: '8px' }} />
            {user.company !== null ? (
              <p>{user.company}</p>
            ) : (
              'Usuário sem empresa'
            )}
          </label>
          <label>
            <FontAwesomeIcon
              icon={faUserGroup}
              style={{ marginRight: '8px' }}
            />

            {user.followers === 0 && `${user.followers} sem seguidores`}
            {user.followers === 1 && `${user.followers} seguidor(a)`}
            {user.followers > 1 && `${user.followers} seguidores`}
          </label>
        </InfoContainer>
      </ProfileDataContainer>
    </ProfileContainer>
  )
}
