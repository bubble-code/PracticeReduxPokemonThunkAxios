import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchPokemon } from '../redux/actions/buscadorAction';

export const Buscador = () => {
    const dispatch = useDispatch();
    const [val, setVal] = useState('')
    const handleBuscar = (val) => {
        dispatch(fetchPokemon(val))
    }
    const handleChange = e => {
        setVal(e.target.value)
    }

    return (
        <div className="form-group">
            <label htmlFor="buscar" className="text-white">Buscar</label>
            <input type='text' className="form-control" id="buscar"
                value={val}
                onChange={handleChange}
            />
            <button onClick={() => handleBuscar(val)} >Buscar</button>
        </div>
    )
}
