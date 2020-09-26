import { POKEMON_CONSTANTS } from '../constant/Constant'

const initialState = {
    pokemon: 30
};
export const pokemon_reducer = (state = initialState, action) => {
    switch (action.type) {
        case POKEMON_CONSTANTS.BUY_POKEMON:
            return {
                ...state,
                pokemon: state.pokemon - action.payload
            }
        case POKEMON_CONSTANTS.RETURN_POKEMON:
            return {
                ...state,
                pokemon: state.pokemon + action.payload
            }
        default:
            return state;
    }
}