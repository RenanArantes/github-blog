import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const PostInfoContainer = styled.div`
  padding: 32px;
  max-width: 864px;
  height: 168px;

  background: ${(props) => props.theme.colors.base.profile};

  margin: 0 auto;
  margin-top: -90px;

  border-radius: 10px;

  label {
    display: flex;
    justify-content: space-between;
  }
`
export const LinkBase = styled(Link)`
  font-size: 12px;
  color: ${(props) => props.theme.colors.blue};
  text-decoration: none;

  &:visited {
    color: ${(props) => props.theme.colors.blue};
  }

  &:hover {
    text-decoration: underline;

    transition: ${(props) => props.theme.transition};
  }
`
export const LinkHtml = styled.a`
  font-size: 12px;
  color: ${(props) => props.theme.colors.blue};
  text-decoration: none;

  &:visited {
    color: ${(props) => props.theme.colors.blue};
  }

  &:hover {
    text-decoration: underline;

    transition: ${(props) => props.theme.transition};
  }
`

export const Title = styled.p`
  margin-top: 20px;
  margin-bottom: 10px;

  font: 700 24px Nunito, sans-serif;
  line-height: 31.2px;
  color: ${(props) => props.theme.colors.base.title};
`

export const InfoContainer = styled.div`
  display: flex;

  label {
    margin-right: 24px;
  }

  svg {
    font-size: 18px;
    margin-right: 8px;

    color: ${(props) => props.theme.colors.base.label};
  }
`
