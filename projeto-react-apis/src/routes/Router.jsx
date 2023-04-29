import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import { PokemonsListPage } from "../pages/PokemonsListPage/PokemonsListPage";
import { PokedexPage } from "../pages/PokedexPage/PokedexPage";
import { PokemonDetailPage } from "../pages/PokemonDetailPage/PokemonDetailPage";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PokemonsListPage/>}/>
                <Route path="/pokedex" element={<PokedexPage/>}/>
                <Route path="/pokemondetail/:name" element={<PokemonDetailPage/>}
                />
                <Route path="*" element={<ErrorPage />}/>
            </Routes>
        </BrowserRouter>
    )
}