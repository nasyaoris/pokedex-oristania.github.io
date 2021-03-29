import React from 'react';
import { HeaderContainer } from './style'
import { Tooltip } from 'antd';
import { Link } from 'react-router-dom'
import pokeball from '../../assets/img/pokeball.svg'
import star from '../../assets/img/star.svg'


function Header(props) {
    const routeChange = () => {
        let path = `/`;
        window.location.href = path
      }

      const routeChangeMyPokemon = () => {
        let path = `/pokedex/mypokedex`;
        window.location.href = path
      }
  
    return (
        <HeaderContainer>
            <div className="title">
                <img src="https://fontmeme.com/permalink/210328/6af39ad94e6423fd3cdc7d3045bd9d25.png" alt="pokemon-font" border="0" className="logo" />
            </div>
            <div className="buttons">
                <Link to="/">
                    <Tooltip title="Pokedexes">
                        <button>                    
                            <img src={pokeball} alt="pokeball" className="button" onClick={routeChange} />
                        </button>
                    </Tooltip>
                </Link>
                <Link to="/pokedex/mypokedex">
                    <Tooltip title="My Pokedex">
                        <button>                    
                            <img src={star} alt="star" className="button" onClick={routeChangeMyPokemon} />
                        </button>
                    </Tooltip>
                </Link>
            </div>
        </HeaderContainer>

    )

}

export default Header;