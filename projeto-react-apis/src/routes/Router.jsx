import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import { PokemonsListPage } from "../pages/PokemonsListPage/PokemonsListPage";
import { PokedexPage } from "../pages/PokedexPage/PokedexPage";
import { PokemonDetailPage } from "../pages/PokemonDetailPage/PokemonDetailPage";

export default function Router({
    addToPokedex,
    removeFromPokedex,
    headers,
    pokemons,
    pokedex,
    BASE_URL,
    AUTH_TOKEN,

}) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <PokemonsListPage
                        addToPokedex={addToPokedex}
                        headers={headers}
                        pokemons={pokemons}
                        BASE_URL={BASE_URL}
                        AUTH_TOKEN={AUTH_TOKEN} />}
                />
                <Route path="/pokedex" element={
                    <PokedexPage
                        removeFromPokedex={removeFromPokedex}
                        headers={headers}
                        pokedex={pokedex}
                        BASE_URL={BASE_URL}
                        AUTH_TOKEN={AUTH_TOKEN} />}
                />
                <Route path="/pokemondetail/:name" element={
                    <PokemonDetailPage
                        headers={headers}
                        pokemons={pokemons}
                        BASE_URL={BASE_URL}
                        AUTH_TOKEN={AUTH_TOKEN} />}
                />
                <Route path="*" element={
                    <ErrorPage />}
                />
            </Routes>
        </BrowserRouter>
    )
}