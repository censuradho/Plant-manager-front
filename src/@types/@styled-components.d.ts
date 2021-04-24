import 'styled-components'
import { Theme } from '../_interfaces/theme'

declare module 'styled-components' {
  export interface DefaultTheme  extends Theme {}
}
