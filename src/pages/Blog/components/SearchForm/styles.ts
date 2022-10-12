import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  max-width: 864px;

  margin: 0 auto;
  margin-top: 72px;
  margin-bottom: 48px;

  label {
    display: flex;

    justify-content: space-between;
    margin-bottom: 18px;

    p:last-child {
      color: ${(props) => props.theme.colors.base.span};
      font-size: 14px;
      line-height: 22.4px;
    }
  }
`
export const SearchInput = styled.input`
  width: 100%;
  padding: 12px 16px;

  border: 1px solid ${(props) => props.theme.colors.base.border};
  border-radius: 6px;
  background: ${(props) => props.theme.colors.base.input};
  color: ${(props) => props.theme.colors.base.text};

  ::placeholder {
    color: ${(props) => props.theme.colors.base.label};
  }

  :focus {
    outline: 1px solid ${(props) => props.theme.colors.blue};
  }
`
