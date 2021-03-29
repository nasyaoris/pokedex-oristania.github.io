import styled from 'styled-components';

export const PokemonDetailContainer = styled.div`
display: flex;
position: relative; 
justify-content: center;
font-family: 'Jura', sans-serif;
margin-top: 30px;

.detail-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.poke-name {
    font-weight: bold;
    font-size: 25px;
    text-align: left;
    h1 {
        margin: unset
    }
}

.poke-img {
    img {
        width: 15rem;
    }
}

.poke-types {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 10px;
}

.poke-move {
    display: flex;
    flex-direction: column;
    width: 100%; 
}
.types {
    display: flex;
    flex-wrap: wrap;
}

.move {
    display: flex;
    flex-wrap: wrap;
    height: 10rem;
    width: 30rem;
    background-color: white;
    border-radius: ${props => props.theme.border.cardRadius};
    overflow-y: scroll;
}

.back {
    position: absolute;
    left: 0;
}

.catch {
    margin-top: 20px;
}

@media (max-width: 429px) {
    .move {
        width: 100%;
    }
    .poke-name {
        font-size: 10px;
    }

    .poke-img {
    margin-top: 20px;
    img {
        width: 10rem;
    }
}
}

`
export const CardContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 10px;
border-radius: 20px;
background-color: white;
margin: 5px;
background-color: lightblue;
height: 2rem;
p {
    margin: unset
}
`
export const ModalSuccessContainer = styled.div`
font-family: 'Jura', sans-serif;
p {
    font-size: "25px";
}

.input {
    margin-bottom: 10px;
}


`

