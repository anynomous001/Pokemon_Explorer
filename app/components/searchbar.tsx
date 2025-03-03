'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import usePokemonStore from "../store/pokemonState"
import { debounce } from 'lodash'
import { useCallback } from "react"
import { all } from "axios"

const SearchBar = () => {


    const { query, setQuery, allPokemon, setFilteredPokemon, filteredPokemon } = usePokemonStore();


    const debounceSearch = useCallback(
        debounce((searchTerm: string) => {
            const filteredPokemons = searchTerm ?
                allPokemon.filter((pokemon: any) => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()))
                : allPokemon
            setFilteredPokemon(filteredPokemons)
            setQuery('')
        }, 300),
        [filteredPokemon]
    )

    const handleSearch = (e: any) => {
        const searchTerm = e.target.value
        debounceSearch(searchTerm)
        setQuery(searchTerm)
    }

    return (
        <div className="flex w-full max-w-sm items-center space-x-2">
            <Input
                type="email"
                placeholder="Search Your pokemon here"
                onChange={(e) => handleSearch(e)}
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