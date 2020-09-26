import { combineReducers } from 'redux'
import { pokemon_reducer } from './reducers/Reducer'
import { buscador_reducer } from './reducers/BuscadorReducer'

const rootReducers = combineReducers({
    pokemon_reducer,
    buscador_reducer
})
export default rootReducers;