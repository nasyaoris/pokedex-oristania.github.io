import React from 'react';
import { HeaderContainer } from './style'
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
                    <button  data-toggle="tooltip" data-placement="bottom" title="Pokedex">                    
                        <img src={pokeball} alt="pokeball" className="button" onClick={routeChange} />
                    </button>
                </Link>
                <Link to="/pokedex/mypokedex">
                <button  data-toggle="tooltip" data-placement="bottom" title="My Pokedex">                    
                        <img src={star} alt="star" className="button" onClick={routeChangeMyPokemon} />
                </button>
                </Link>
            </div>
        </HeaderContainer>

    )

}

export default Header;