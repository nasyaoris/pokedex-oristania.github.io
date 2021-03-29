import React from 'react'
import { PokemonCardContainer } from './style'
// import { mock } from '../../constants'


function PokemonCard({
    pokemon, 
    onDelete
}){
    return (
        <PokemonCardContainer>
            <div className="card-container">
                <div className="img-container">
                    <img src={pokemon?.data.sprites.front_default} className="img" alt="pokemon"/>
                </div>
                <div className="detail">
                    {pokemon?.data.name}
                </div>
            </div>
        </PokemonCardContainer>
    )
}

export default PokemonCard