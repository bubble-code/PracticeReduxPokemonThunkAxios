const { POKEMON_CONSTANTS } = require("../constant/Constant")


const initialState = {
    loading: false,
    pokemon: [],
    error: ''
}

export const buscador_reducer = (state = initialState, action) => {

    switch (action.type) {
        case POKEMON_CONSTANTS.FETCH_POKEMON_REQUEST:
            return {
                loading: true,
                pokemon: [],
                error: ''

            }
        case POKEMON_CONSTANTS.FETCH_POKEMON_SUCCESS:
            return {
                loading: false,
                pokemon: action.payload,
                error: ''
            }
        case POKEMON_CONSTANTS.FETCH_POKEMON_FAILURE:
            return {
                loading: false,
                pokemon: [],
                error: action.payload
            }

        default: return state
    }
}