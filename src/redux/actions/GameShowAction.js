import {POKEMON_CONSTANTS} from '../constant/Constant'


export const buy_pokemon_actions = (cant)=>{
return{
    type: POKEMON_CONSTANTS.BUY_POKEMON,
    payload: cant
}
}
export const return_pokemon_actions = (cant)=>{
    return{
        type: POKEMON_CONSTANTS.RETURN_POKEMON,
        payload: cant
    }
    }