import styled from '@emotion/styled'
import { colors } from '../../app/styles/theme.js'

export const DefaultButton = styled.button`
background: ${colors.grey};
border: 2px outset ${colors.white};
padding: 2px 6px;
font-size: 12px;
cursor: pointer;
&:active {
  border: 2px inset ${colors.white};
}
`