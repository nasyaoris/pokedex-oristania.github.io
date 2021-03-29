import React from 'react'
import { PokemonCardContainer } from './style'

function PokemonCard({
    pokemon, 
    onClick,
    color,
}){
    return (
        <PokemonCardContainer color={color}>
            <div className="card-container" onClick={() => onClick(pokemon?.id)}>
                <div className="img-container">
                    <img src={pokemon?.image} className="img" alt="pokemon"/>
                </div>
                <div className="detail">
                    {pokemon?.name}
                </div>
            </div>
        </PokemonCardContainer>
    )
}

export default PokemonCard