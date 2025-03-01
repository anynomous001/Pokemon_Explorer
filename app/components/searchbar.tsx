'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import usePokemonStore from "../store/pokemonState"

const SearchBar = () => {


    const { query, setQuery, allPokemon, setFilteredPokemon } = usePokemonStore();



    const handleSearch = () => {
        const filteredPokemons = query
            ? allPokemon.filter((p: any) => p.name.toLowerCase().includes(query.toLowerCase()))
            : allPokemon


        setFilteredPokemon(filteredPokemons)
        setQuery('')
    }

    return (
        <div className="flex w-full max-w-sm items-center space-x-2">
            <Input
                type="email"
                placeholder="Search Your pokemon here"
                onChange={(e) => setQuery(e.target.value)}
                value={query}
            />
            <Button
                type="submit"
                onClick={handleSearch}
            >Search</Button>
        </div>
    )
}



export default SearchBar