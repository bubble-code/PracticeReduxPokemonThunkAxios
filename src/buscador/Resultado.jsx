import React from 'react'
import { useSelector } from 'react-redux'

export const Resultado = () => {
    const { loading, pokemon, error } = useSelector(state => state.buscador_reducer)
    return (
        <div>
            <h3 className="text-white">Resultado</h3>
            {loading && <div className="text-warning">Buscador...</div>}
            {
                pokemon.length >= 1 && <div className="text-success">
                    <img src={pokemon[0].sprites.front_default} alt="" />
                    <span>{pokemon[0].name}</span>
                </div>
            }
            {error !== '' && <span className="text-danger">{error}</span>}
        </div>
    )
}
