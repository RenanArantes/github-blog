import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 416px;
  height: 260px;

  padding: 32px;
  margin-bottom: 32px;

  border-radius: 10px;
  background: ${(props) => props.theme.colors.base.post};

  span {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 20px;
  }

  time {
    font-size: 14px;
    color: ${(props) => props.theme.colors.base.span};
  }
`
export const Title = styled.p`
  font-size: 32px;
  font: 700 32px Nunito, sans-serif;
  line-height: 32px;
  color: ${(props) => props.theme.colors.base.title};

  text-align: center;
`
