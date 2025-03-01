'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { usePokemonStore } from "../store/pokemonState"

const SearchBar = () => {


    const { query, setQuery, pokemon, setPokemon } = usePokemonStore();



    const handleSearch = () => {
        const filteredPokemons = query
            ? pokemon.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()))
            : pokemon


        setPokemon(filteredPokemons)
    }

    return (
        <div className="flex w-full max-w-sm items-center space-x-2">
            <Input
                type="email"
                placeholder="Search Your pokemon here"
                onChange={(e) => setQuery(e.target.value)}
            />
            <Button
                type="submit"
                onClick={handleSearch}
            >Search</Button>
        </div>
    )
}



export default SearchBar