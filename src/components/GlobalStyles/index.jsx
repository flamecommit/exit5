import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

const GlobalStyles = createGlobalStyle`
  ${reset}

  body {
    font-family: 'Noto Sans KR', sans-serif;
    background: ${props => props.theme.colors.bodyBackground};
  }

  * {
    box-sizing: border-box;

    &::before,
    &::after {
      box-sizing: border-box;
    }
    &:focus-visible {
      outline: 2px dashed #862b10;
    }
  }
`

export default GlobalStyles
