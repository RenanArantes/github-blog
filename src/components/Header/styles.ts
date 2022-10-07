import styled from 'styled-components'
import cover from '../../assets/cover.png'

export const HeaderContainer = styled.header`
  background-image: url(${cover});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  height: 296px;

  margin: 0 auto;
  display: flex;

  img {
    width: 148px;
    height: 98px;

    margin: 0 auto;
    margin-top: 64px;
  }
`
