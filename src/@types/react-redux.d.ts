import { Store } from '../store'

import 'react-redux'

declare module 'react-redux' {
  export interface DefaultRootState extends Store {}
}