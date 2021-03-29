import styled from 'styled-components'

export const PokemonListContainer = styled.div`
margin-top: 30px;
.container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

/* .list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
} */

@media (max-width: 769px) {
  
  }

@media (max-width: 429px) {
.list {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 10px;
  }

}

  @media (max-width: 385px) {

  }


`