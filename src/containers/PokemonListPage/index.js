import React, { useState } from "react";
import { gql, useQuery } from '@apollo/client';
import randomColor from "randomcolor";

import PokemonCard from './components/PokemonCard'
import Pagination from './components/Pagination'

import { PokemonListContainer } from './style'
import { useParams } from "react-router";

const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
        id
        url
        name
        image
      }
    }
  }
`;

function PokemonListPage(props) {
  const { page } = useParams()
  const [currentPage, setCurrentPage] = useState(page ? page : 1);
  const routeChange = (id) => {
    let path = `/detail/${currentPage}/${id}`;
    window.location.href = path
  }

  const gqlVariables = {
    limit: 1000,
    offset: 0,
  };
  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: gqlVariables
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <PokemonListContainer>
      <div className="container">
          <Pagination
            title=""
            emptyText="There's no Pokedex"
            isLoading={loading}
            currentPage={currentPage}
            setCurrentPage={(int) => setCurrentPage(int)}
          >
          {
            data.pokemons.results.map(el => {
            let color = randomColor()
             return <PokemonCard pokemon={el} onClick={() => routeChange(el.name)} color={color} />
            })
          }
          </Pagination>
      </div>
    </PokemonListContainer>
  )
}

export default PokemonListPage;
