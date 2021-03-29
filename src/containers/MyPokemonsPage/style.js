import styled from 'styled-components'

export const MyPokemonListContainer = styled.div`
font-family: 'Jura', sans-serif;
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
.container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}

.list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 10px;
}

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