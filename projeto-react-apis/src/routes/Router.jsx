import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import { PokemonsListPage } from "../pages/PokemonsListPage/PokemonsListPage";
import { PokedexPage } from "../pages/PokedexPage/PokedexPage";
import { PokemonDetailPage } from "../pages/PokemonDetailPage/PokemonDetailPage";

export default function Router({
    addToPokedex,
    removeFromPokedex,
    pokemons,
    pokedex,
    BASE_URL,
}) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <PokemonsListPage
                        addToPokedex={addToPokedex}
                        pokemons={pokemons}
                        BASE_URL={BASE_URL}/>}
                />
                <Route path="/pokedex" element={
                    <PokedexPage
                        removeFromPokedex={removeFromPokedex}
                        pokedex={pokedex}
                        BASE_URL={BASE_URL}/>}
                />
                <Route path="/pokemondetail/:name" element={
                    <PokemonDetailPage
                        addToPokedex={addToPokedex}
                        removeFromPokedex={removeFromPokedex}
                        pokedex={pokedex}
                        pokemons={pokemons}
                        BASE_URL={BASE_URL}/>}
                />
                <Route path="*" element={
                    <ErrorPage />}
                />
            </Routes>
        </BrowserRouter>
    )
}