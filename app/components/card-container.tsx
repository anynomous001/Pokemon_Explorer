'use client'

import { useFetch } from "@/hooks/useFetch";
import PokemonCards from "@/app/components/pokemon-cards";
import { nanoid } from "nanoid";
import HomePageSkeleton from "./HomePageSkeleton";


const CardContainer = () => {

    const { pokemon, error, loading } = useFetch()

    if (loading) {
        return <HomePageSkeleton />
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {
                pokemon.map((pokemon: any) => {
                    console.log(pokemon.image)
                    return <PokemonCards
                        key={nanoid()}
                        pokemon={pokemon}
                        error={error}
                        loading={loading}
                    />
                })
            }


        </div>
    )
}

export default CardContainer