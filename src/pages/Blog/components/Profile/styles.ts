import styled from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  padding: 32px;
  max-width: 864px;
  height: 212px;

  background: ${(props) => props.theme.colors.base.profile};

  margin: 0 auto;
  margin-top: -90px;

  border-radius: 10px;

  img {
    width: 148px;
    height: 148px;
    border-radius: 10px;
  }
`
export const ProfileDataContainer = styled.div`
  margin-left: 32px;
  width: 100%;

  span:first-child {
    display: flex;
    justify-content: space-between;
  }

  h2 {
    color: ${(props) => props.theme.colors.base.title};
    font-size: 24px;
    font-weight: 700;
    line-height: 130%;
  }
`
export const LinkBase = styled.a`
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
export const InfoContainer = styled.div`
  display: flex;
  margin-top: 24px;

  label {
    margin-right: 24px;
  }

  svg {
    font-size: 18px;
    margin-right: 8px;

    color: ${(props) => props.theme.colors.base.label};
  }
`
