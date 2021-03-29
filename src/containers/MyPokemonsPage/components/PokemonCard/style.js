import styled from 'styled-components'

export const PokemonCardContainer = styled.div`
font-family: 'Jura', sans-serif;
font-weight: bold;
.card-container {
    cursor: pointer;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    box-shadow: 2px 3px #888888;
    border-radius: ${props => props.theme.border.cardRadius};
    padding-bottom: 10px;
    width: 20rem;
    height: 10rem;
    background-color: white;
}

.card-container:hover {
    background-color: lightgray;
}

@media (max-width: 769px) {
  
}

@media (max-width: 429px) {
.card-container {
    width: 8rem;
    height: 10rem;
}

}

@media (max-width: 385px) {


}




`