import React, { useEffect, useState } from 'react'
import PropTypes from "prop-types"
import Swal from 'sweetalert2' 
import { useQuery } from '@apollo/client';
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { catchPokemon } from '../MyPokemonsPage/actions'
import { GET_POKEMON } from './actions'

import { PokemonDetailContainer, CardContainer, ModalSuccessContainer } from './style'
import Modal from './components/Modal'
import Button from '../../components/Button'

function Card(props) {
    return (
        <CardContainer>
            <p>{props.text}</p>
        </CardContainer>

    )
}

function ModalCatchSuccess(props) {
  const [nickname, setNickName] = useState("")
  const [isError, setIsError] = useState(false)
  const { data, onCatch, open, handleClose } = props
  const { name } = data

  useEffect(() => {
    setNickName("")
    setIsError(false)
  }, [props])

  async function handleChange(value) {
    await setNickName(value)
  }

  async function handleSubmit() {
    setIsError(false)
    const obj = {
      nickname: nickname,
      data
    }
    if (!localStorage.getItem('myPokemonList')) {
      localStorage.setItem('myPokemonList', JSON.stringify([]));
    } 

    let checkName = JSON.parse(localStorage.getItem('myPokemonList'))?.filter(el => nickname === el.nickname)
    if (checkName === undefined) {
      onCatch(obj)
      handleClose()
    }else if (checkName.length !== 0) {
      setIsError(true)
    }
    else {
      onCatch(obj)
      handleClose()
      Swal.fire({
        icon: 'success',
        text: `You caught ${name}! Click the Star at the header to check your podexes`,
        showConfirmButton: false,
        timer: 4000
      })
    }
    setNickName("")
  }

  return (
    <Modal open={open} handleClose={handleClose} maxWidth="xs" fullWidth  preventClose={false}>
      <ModalSuccessContainer>
        <p>You caught {name.toUpperCase()} !</p>
        <label>Enter Nickname: </label>
        <input type="text" className="input-group input" onChange={(event) => handleChange(event.target.value)} defaultValue="" value={nickname}/>
        {
          isError && 
          (<p style={{color: "red"}}>Nickname already taken</p>)

        }
        <Button label="Submit" onClick={handleSubmit} disabled={nickname === ""} />
      </ModalSuccessContainer>
    </Modal>

  )
}

ModalCatchSuccess.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]), 
  onCatch: PropTypes.func, 
  open: PropTypes.bool, 
  handleClose: PropTypes.func 
}

function ModalCatchFailed(props) {
  return (
    <Modal open={props.open} handleClose={props.handleClose} maxWidth="xs" fullWidth  preventClose={false}>
      <div>
       Pokemon Got Away!
      </div>
    </Modal>

  )
}

ModalCatchFailed.propTypes = {
  open: PropTypes.bool, 
  handleClose: PropTypes.func 
}

function PokemonDetailPage(props) {
    const { id, page } = useParams()
    const [openSuccess, setOpenSuccess] = useState(false)
    const [openFailed, setOpenFailed] = useState(false)
    const routeChange = () => {
      let path = `/${page}`;
      window.location.href = path
    }

    function handleClose(type) {
      if (type === 'success') setOpenSuccess(false);
      setOpenFailed(false)
    }

    function handleCatch() {
      const random = Math.random().toFixed(2)
      if (random < 0.5) {
        setOpenFailed(false)
        setOpenSuccess(true)
      }else {
        setOpenFailed(true)
      }
    }

    const gqlVariables = {
      name: id,
    };
    const { loading, error, data } = useQuery(GET_POKEMON, {
      variables: gqlVariables
    });
    if (loading) return <p>Loading...</p>;
    if (error) {
      console.log(error)
      return (<p>Error :(</p>);
    }

    return(
        <PokemonDetailContainer>
            <div className="back">
              <Button label="< Back" onClick={() => routeChange()} size="12px"/>
            </div>
            <div className="detail-wrapper">
                <div className="poke-img">
                    <img src={data.pokemon.sprites.front_default} alt="pokeImg" />
                </div>
                <div className="poke-name">
                    <h2>{data.pokemon.name.toUpperCase()}</h2>
                </div>
                <div className="catch">
                  <Button label="Catch!" onClick={() => handleCatch()} size="20px" />
                </div>
                <div className="poke-types">
                    <h4>Types</h4>
                    <div className="types">
                    {
                        data.pokemon.types.map((el,idx) => (
                            <Card text={el.type.name} key={idx} />
                        ))
                    }
                    </div>
                </div>
                <div className="poke-move">
                    <h4>Move</h4>
                    <div className="move">
                    {
                        data.pokemon.moves.map((el,idx) => (
                            <Card text={el.move.name} key={idx} />
                        ))
                    }
                    </div>
                </div>
            </div>
            <ModalCatchSuccess 
              open={openSuccess}
              handleClose={() => handleClose('success')} 
              onCatch={(data) => props.catchPokemon(data)} 
              data={data.pokemon} 
            />
            <ModalCatchFailed open={openFailed} handleClose={() => handleClose('failed')} />
        </PokemonDetailContainer>
    )
}

PokemonDetailPage.propTypes = {
  catchPokemon: PropTypes.func
}

const mapDispatchToProps = (dispatch) => ({
  catchPokemon: (pokemon) => dispatch(catchPokemon(pokemon))
});


export default connect(null, mapDispatchToProps)(PokemonDetailPage);
