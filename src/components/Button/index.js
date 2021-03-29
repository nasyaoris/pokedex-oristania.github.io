import React from 'react';
import { ButtonContainer } from './style'

function Button(props) {
    return (
        <ButtonContainer size={props.size}>
            <button className="btn btn-default button" disabled={props.disabled} onClick={props.onClick}>
                {props.label}
            </button>
        </ButtonContainer>
    )
}

export default Button;