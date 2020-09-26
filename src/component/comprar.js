import React from 'react'
import { useDispatch } from 'react-redux'
import { buy_pokemon_actions, return_pokemon_actions } from '../redux/actions/GameShowAction'

export const Comprar = () => {
    const dispatch = useDispatch()

    const handleAdd = () => {
        dispatch(buy_pokemon_actions(1));
    }
    const handleReturn = () => {
        dispatch(return_pokemon_actions(1))
    }
    return (
        <>
            <button className="button" onClick={handleAdd}>Comprar</button>
            <button className="button" onClick={handleReturn}>Devolver</button>
        </>
    )
}
