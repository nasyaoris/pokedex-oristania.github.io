import styled from 'styled-components';


export const ButtonContainer = styled.div`
    button {
        font-family: 'Jura', sans-serif;
        font-size: ${props => props.size};
        border: 2px solid #121212;
        margin-right: 5px;
        background-color: white;
        box-shadow: 8px 5px #18314f;
    }
    &:hover {
        .button {
            background-color: black;
            color: white;
        }
    }
    &:active {
        button {
            background-color: black;
            color: white;
            box-shadow: 0px 0px #18314f;
        }
    }

    &:disabled {
        button {
            background-color: grey;
            color: white;
            box-shadow: 0px 0px #18314f;
        }
    }
`