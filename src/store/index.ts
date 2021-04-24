import { createStore } from 'redux'

import rootReducer from './ducks/rootReducer'

const store = createStore(rootReducer)

export type Store = ReturnType<typeof rootReducer>

export default store
