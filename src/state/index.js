import { createStore } from 'redux'
import { reducer as loadingReducer } from './Loading'

const store = createStore(loadingReducer)

export default store