import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import { PokemonsListPage } from "../pages/PokemonsListPage/PokemonsListPage";
import { PokedexPage } from "../pages/PokedexPage/PokedexPage";
import { PokemonDetailPage } from "../pages/PokemonDetailPage/PokemonDetailPage";

export default function Router(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <PokemonsListPage
                        headers={props.headers}
                        pokemons={props.pokemons}
                        BASE_URL={props.BASE_URL}
                        AUTH_TOKEN={props.AUTH_TOKEN}/>}
                />
                <Route path="/pokedex" element={
                    <PokedexPage
                        AUTH_TOKEN={props.AUTH_TOKEN}
                        BASE_URL={props.BASE_URL} />}
                />
                <Route path="/pokemondetail/:id" element={
                    <PokemonDetailPage
                        AUTH_TOKEN={props.AUTH_TOKEN}
                        BASE_URL={props.BASE_URL} />}
                />
                <Route path="*" element={
                    <ErrorPage />}
                />
            </Routes>
        </BrowserRouter>
    )
}