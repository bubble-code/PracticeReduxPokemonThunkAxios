import axios from 'axios'
import { POKEMON_CONSTANTS } from '../constant/Constant'

export const fecthPokemonRequest = () => {
    return {
        type: POKEMON_CONSTANTS.FETCH_POKEMON_REQUEST
    }
}
export const fetchPokemonSuccess = (pokemon) => {
    return {
        type: POKEMON_CONSTANTS.FETCH_POKEMON_SUCCESS,
        payload: pokemon
    }
}
export const fetchPokemonError = (error) => {
    return {
        type: POKEMON_CONSTANTS.FETCH_POKEMON_FAILURE,
        payload: error
    }
}

export const fetchPokemon = (valor) => {
    return (dispatch) => {
        dispatch(fecthPokemonRequest());
        axios.get(`https://pokeapi.co/api/v2/pokemon/${valor}`)
            .then(response => {
                dispatch(fetchPokemonSuccess([response.data]))
            })
            .catch(error => {
                dispatch(fetchPokemonError('No se encontro nada'))
            })
    }
}