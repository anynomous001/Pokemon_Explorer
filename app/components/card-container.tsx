'use client'

import { useFetch } from "@/hooks/useFetch";
import PokemonCards from "@/app/components/pokemon-cards";
import { nanoid } from "nanoid";
import HomePageSkeleton from "./HomePageSkeleton";
import usePokemonStore from "../store/pokemonState";

export interface Pokemon {
    name: string,
    id: number,
    image: string
}


const CardContainer = () => {

    const { error, loading } = useFetch()

    const { filteredPokemon } = usePokemonStore();




    if (loading) {
        return <HomePageSkeleton />
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {
                filteredPokemon.map((pokemon: Pokemon) => {
                    console.log(pokemon)
                    return <PokemonCards
                        key={nanoid()}
                        pokemon={pokemon}
                        error={error as Error}
                        loading={loading}
                    />
                })
            }


        </div>
    )
}

export default CardContainer