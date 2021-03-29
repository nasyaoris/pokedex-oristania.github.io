import React from 'react'
import { PokemonCardContainer } from './style'
import { Button, Tooltip } from 'antd';
import {
    DeleteOutlined,
} from '@ant-design/icons';


function PokemonCard({
    pokemon,
    onDelete
}) {
    return (
        <PokemonCardContainer>
            <div className="delete-button">
                    <Tooltip title="remove">
                        <Button shape="circle" type='danger' onClick={onDelete} icon={<DeleteOutlined twoToneColor="red" />} />
                    </Tooltip>
            </div>
            <div className="card-container">
                <div className="img-container">
                    <img src={pokemon?.data.sprites.front_default} className="img" alt="pokemon" />
                </div>
                <div className="nickname">
                    {pokemon?.nickname}
                </div>
                <div className="name">
                    {pokemon?.data.name}
                </div>
            </div>
        </PokemonCardContainer>
    )
}

export default PokemonCard