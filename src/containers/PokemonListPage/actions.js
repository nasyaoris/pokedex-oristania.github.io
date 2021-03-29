// import { gql, useQuery } from '@apollo/client';
// import React from "react";
// import {
//     FETCH_POKEMONS,
//     FETCH_POKEMONS_SUCCESS,
//     FETCH_POKEMONS_FAILED,
// } from './constants'

// export const GET_POKEMONS = gql`
//   query pokemons($limit: Int, $offset: Int) {
//     pokemons(limit: $limit, offset: $offset) {
//       count
//       next
//       previous
//       status
//       message
//       results {
//         url
//         name
//         image
//       }
//     }
//   }
// `;


// export function FetchPokemons() {
//     return dispatch => {
//         const { loading, data, error } = useQuery(
//             GET_POKEMONS
//           );
//         if (loading) dispatch({ type: FETCH_POKEMONS});
//         if (error) dispatch({ type: FETCH_POKEMONS_FAILED});
//         if (!data) { 
//             dispatch({ type: FETCH_POKEMONS_FAILED})
//         }else {
//             dispatch({
//                 type: FETCH_POKEMONS_SUCCESS,
//                 payload: data,
//             })
//         }
//     }
//   }
  