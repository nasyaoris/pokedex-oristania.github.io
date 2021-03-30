import React, { useEffect, useState } from 'react'
import { PokemonCardContainer } from './style'

function PokemonCard({
    pokemon, 
    onClick,
    color,
}){

    const [total, setTotal] = useState(0)

    useEffect(() => {
        if (!localStorage.getItem('myPokemonList')) {
            localStorage.setItem('myPokemonList', JSON.stringify([]));
          } 
      
          let checkName = JSON.parse(localStorage.getItem('myPokemonList'))?.filter(el => pokemon?.name === el.data.name)
          setTotal(checkName.length)
    }, [setTotal, pokemon.name])


    return (
        <PokemonCardContainer color={color}>
            <div className="card-container" onClick={() => onClick(pokemon?.id)}>
                <div className="img-container">
                    <img src={pokemon?.image} className="img" alt="pokemon"/>
                </div>
                <div className="detail">
                    {pokemon?.name}
                </div>
                <p>{total}</p>
            </div>
        </PokemonCardContainer>
    )
}

export default PokemonCard