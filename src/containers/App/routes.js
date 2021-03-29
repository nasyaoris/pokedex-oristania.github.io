// import ReactStarter from "../../components/ReactStarter";
import NotFoundPage from "../../components/NotFoundPage";
import PokemonListPage from "../PokemonListPage"
import PokemonDetailPage from "../PokemonDetailPage"
import MyPokemonListPage from "../MyPokemonsPage"

export const routes = [
  {
    component: PokemonListPage,
    exact: true,
    path: "/:page"
  },
  {
    component: PokemonListPage,
    exact: true,
    path: "/"
  },
  {
    component: PokemonDetailPage,
    exact: true,
    path: "/detail/:page/:id"
  },
  {
    component: MyPokemonListPage,
    exact: true,
    path: "/pokedex/mypokedex"
  },
  { component: NotFoundPage }
];
