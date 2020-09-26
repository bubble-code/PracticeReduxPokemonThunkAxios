import React from 'react'
import { useSelector } from 'react-redux'

export const Cantidad = () => {
    const cantP = useSelector(state => state.pokemon_reducer)

    return (
        <h3>
            Unidades: {cantP.pokemon}
        </h3>
    )
}
